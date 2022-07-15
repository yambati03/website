export interface Post {
  frontmatter: Frontmatter;
  slug: string;
  content: string;
}

export interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string;
}
