export interface BlogDetail {
  description: string;
}

export interface Blog {
  title: string;
  category: string;
  slug: string;
  img: string;
  postedby: string;
  status: string;
  blog_detail: BlogDetail[];
}
