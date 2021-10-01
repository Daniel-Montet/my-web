import { useRouter } from "next/router";
import date from "../../lib/date";
import { OtherNav } from "../../components/navigation/nav"
import { Grid } from "../../components/layout/layout";

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

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

function Post({ post }) {
  return (
    <section className="post-outer inner-section">
      <section className="post-header">
        <h1>{post.title}</h1>
        <div className="meta flex-row">
          <span className="time">{date(post.published_at)}</span>
          <span className="dot"></span>
          <span>{post.reading_time} min read</span>
        </div>
      </section>
      <div className="post-content inner-section" dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
  );
}


export default function BlogPageLayout({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
      <Grid>
        <Post post={post} />
      </Grid>
  );
}
