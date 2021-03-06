import Intro from "../components/intro/intro";
import Me from "../components/me/me";
import { Grid } from "../components/layout/layout";
import Posts from "../components/posts/posts";
import { getPage, getPosts, getTags } from "../lib/ghostUtils";
import { useState } from "react";

export default function Home({ about, postsMeta, posts, tags, tagsMeta }) {
  let [navFocus, setFocus] = useState("intro");

  return (
    <Grid stacked fullHeight navFocus={navFocus}>
      <Intro handleFocus={setFocus} />
      <Me about={about} handleFocus={setFocus} />
      <Posts
        posts={posts}
        postsMeta={postsMeta}
        tags={tags}
        tagsMeta={tagsMeta}
        handleFocus={setFocus}
      />
    </Grid>
  );
}

export async function getStaticProps(context) {
  const { posts, meta: postsMeta, error: postsError } = await getPosts(3);
  const { tags, meta: tagsMeta, error: tagsError } = await getTags();
  const { pages } = await getPage("about-me");
  console.log(posts);

  if (postsError || tagsError) {
    return {
      props: {
        posts: null,
        postsMeta: null,
        tags: null,
        tagsMeta: null,
        about: null,
      },
    };
  }

  return {
    props: { posts, postsMeta, tags, tagsMeta, about: pages[0] },
  };
}
