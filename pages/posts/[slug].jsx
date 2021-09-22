import Link from "next/link";
import { useRouter } from "next/router";
import date from "../../lib/date";

let BLOG_URL = process.env.BLOG_URL;
let CONTENT_API_KEY = process.env.CONTENT_API_KEY;

const getPost = async (slug) => {
  let { posts } = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,published_at,reading_time,html`
  ).then((res) => res.json());
  //   console.log(data);
  return posts[0];
};

export async function getStaticProps({ params }) {
  let post = await getPost(params.slug);

  if (post) {
    return {
      props: { post: post },
    };
  }

  return {
    props: { post: null },
  };
}

export async function getStaticPaths({ params }) {
  return { paths: [], fallback: true };
}

export default function Post({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href="/">Go Back</Link>
      <h1>{post.title}</h1>
      <span>{post.reading_time}</span>
      <span>{date(post.published_at)}</span>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
