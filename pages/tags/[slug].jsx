// import Link from "next/link";
import { useRouter } from "next/router";
// import date from "../../lib/date";
// import Arrow from "/public/left-arrow.svg";

let BLOG_URL = process.env.BLOG_URL;
let CONTENT_API_KEY = process.env.CONTENT_API_KEY;

export default function Posts() {
    const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

    return (
        <h1>Posts</h1>
    )
}


export async function getStaticProps({ params }) {
    // console.log(params)
    let post = await getPosts(params.slug);
  
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


const getPosts = async (slug) => {
    console.log(slug)
    let  posts  = await fetch(
      `${BLOG_URL}/ghost/api/v3/content/tags/slug/${slug}?key=${CONTENT_API_KEY}&include=count.posts`
    ).then((res) => res.json());
      console.log(posts)
    return posts[0];
};