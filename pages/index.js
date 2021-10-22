import Intro from "../components/intro/intro";
import Me from "../components/me/me";
import { Grid } from "../components/layout/layout";
import Posts from "../components/posts/posts";

let BLOG_URL = process.env.BLOG_URL;
let CONTENT_API_KEY = process.env.CONTENT_API_KEY;

export default function Home({ postsMeta, posts, tags, tagsMeta }) {
  return (
    <Grid stacked fullHeight>
      <Intro />
      <Me />
      <Posts
        posts={posts}
        postsMeta={postsMeta}
        tags={tags}
        tagsMeta={tagsMeta}
      />
    </Grid>
  );
}

export async function getStaticProps(context) {
  const { posts, meta: postsMeta, error: postsError } = await getPosts();
  const { tags, meta: tagsMeta, error: tagsError } = await getTags();

  if (postsError || tagsError) {
    return {
      props: { posts: null, postsMeta: null, tags: null, tagsMeta: null },
    };
  }

  return {
    props: { posts, postsMeta, tags, tagsMeta },
  };
}

//object returned from endpoint ---> { meta:{},posts:[] }
const getPosts = async () => {
  let res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&limit=3`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return { error };
    });

  return res;
};

const getTags = async () => {
  let res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/tags?key=${CONTENT_API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return { error };
    });

  return res;
};
