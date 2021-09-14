import Articles from "../components/articles/articles";
import Intro from "../components/intro/intro";
import Nav from "../components/navigation/nav";
import Me from "../components/me/me";
// import { getPosts } from "../lib/posts";

let BLOG_URL = process.env.BLOG_URL;
let CONTENT_API_KEY = process.env.CONTENT_API_KEY;

const getPosts = async () => {
  let data = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&page=3&fields=title,custom_excerpt,published_at,reading_time,slug`
  ).then((res) => res.json());

  return data;
};

export default function Home({ meta, posts }) {
  return (
    <>
      <Nav />
      <Intro />
      <Me />
      <Articles posts={posts} meta={meta} />
    </>
  );
}

export async function getStaticProps(context) {
  const { posts, meta } = await getPosts();

  if (!posts) {
    return {
      props: { posts: null, meta: null },
    };
  }

  return {
    props: { posts, meta },
  };
}
