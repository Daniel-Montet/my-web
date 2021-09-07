// import Articles from "../components/articles/articles";
import Intro from "../components/intro/intro";
// import Profile from "../components/profile/profile";
// import { getPosts } from "../lib/posts";

// export default function Home(posts) {
//   return (
//     <>
//       <Intro />
//       <Profile />
//       <Articles posts={posts.posts} />
//     </>
//   );
// }

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


export default function Home() {
  return <Intro />
}
