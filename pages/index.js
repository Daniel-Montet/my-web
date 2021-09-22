import Articles from "../components/articles/articles";
import Intro from "../components/intro/intro";
import Nav from "../components/navigation/nav";
import Me from "../components/me/me";

let BLOG_URL = process.env.BLOG_URL;
let CONTENT_API_KEY = process.env.CONTENT_API_KEY;

export default function Home({ meta, posts }) {
  console.log(meta);
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
  const { posts, meta, error } = await getPosts();

  if (error) {
    return {
      props: { posts: null, meta: null },
    };
  }

  return {
    props: { posts, meta },
  };
}

//object returned from endpoint ---> { meta:{},posts:[] }
const getPosts = async () => {
  let x = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&limit=3`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return { error };
    });
  // console.log(x);
  return x;
};
