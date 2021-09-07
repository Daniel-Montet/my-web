// import Articles from "../components/articles";
import Intro from "../components/Intro";
import Profile from "../components/profile";
import { getPosts } from "../lib/posts";

export default function Home(posts) {
  return (
    <>
      <Intro />
      <Profile />
      {/* <Articles posts={posts.posts} /> */}
    </>
  );
}

// export async function getStaticProps(context) {
//   const posts = await getPosts();

//   if (!posts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { posts },
//   };
// }
