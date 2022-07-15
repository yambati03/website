import Head from "next/head";
import path from "path";
import fs from "fs";
import PostCard from "../../components/Blog/PostCard";
import matter from "gray-matter";
import { Post } from "../../utils/types";

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <div className='m-8'>
        <div className='md:w-3/4 mx-auto space-y-4'>
          <h1 className='font-bold flex text-2xl'>Blog</h1>
          {posts
            .sort((a, b) => {
              return (
                Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
              );
            })
            .map((post, index) => (
              <PostCard
                key={index}
                title={post.frontmatter.title}
                excerpt={post.frontmatter.excerpt}
                date={post.frontmatter.date}
                slug={post.slug}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const content = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(content);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}

export default Blog;
