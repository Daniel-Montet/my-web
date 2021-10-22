import { getPosts, getTags } from "../../lib/ghostUtils";
import { useRouter } from "next/router";
import Posts from "../../components/posts/posts";
import { Grid } from "../../components/layout/layout";

export async function getStaticProps({ params }) {
  const {
    posts,
    meta: postsMeta,
    error: postsError,
  } = await getPosts(params.slug);
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

export async function getStaticPaths({ params }) {
  return { paths: [], fallback: true };
}

export default function BlogPageLayout({ posts, tags }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Grid>
      <Posts posts={posts} tags={tags} />
    </Grid>
  );
}
