import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Post } from "../../utils/types";
import Tag from "../../components/Tag";
import Head from "next/head";
import Markdown from "../../components/Blog/Markdown";

export default function BlogPost(props: Post) {
  const tags = props.frontmatter.tags?.split(", ");

  return (
    <>
      <Head>
        <title>{`${props.frontmatter.title}`}</title>
      </Head>
      <div className='m-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0'>
        <Link href='/blog' passHref>
          <div className='whitespace-nowrap flex font-semibold items-center space-x-1 bg-gray-200 dark:bg-zinc-700 w-fit h-fit py-1 pr-3 pl-2 rounded hover:bg-gray-300 dark:hover:bg-zinc-600 cursor-pointer duration-150'>
            <ChevronLeftIcon className='w-3 h-3 font-bold' />
            <p>Go back</p>
          </div>
        </Link>
        <div className='lg:w-3/4 mx-auto space-y-6'>
          <div className='space-y-2'>
            <p className='text-gray-500 text-sm'>
              Published {props.frontmatter.date}
            </p>
            <h1 className='font-bold flex text-2xl'>
              {props.frontmatter.title}
            </h1>
            <div className='flex space-x-2'>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
          <Markdown content={props.content} />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const md = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(md);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
