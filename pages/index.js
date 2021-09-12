import Articles from "../components/articles/articles";
import Intro from "../components/intro/intro";
import Nav from "../components/navigation/nav";
import Me from "../components/me/me";
import { getPosts } from "../lib/posts";

export default function Home(posts) {
  return (
    <>
      <Nav />
      <Intro />
      <Me />
      <Articles posts={posts.posts} />
    </>
  );
}

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      props: { posts: null },
    };
  }

  return {
    props: { posts },
  };
}
