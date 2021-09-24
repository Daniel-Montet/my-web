import Link from "next/link";
import { useRouter } from "next/router";
import date from "../../lib/date";
import Arrow from "/public/left-arrow.svg";

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

export async function getStaticPaths({ params }) {
  return { paths: [], fallback: true };
}

function Post({ post }) {
  return (
    <section className="post-outer">
      <section>
        <h1>{post.title}</h1>
        <div className="meta flex-row">
          <span className="time">{date(post.published_at)}</span>
          <span className="dot"></span>
          <span>{post.reading_time} MIN</span>
        </div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
  );
}

function Nav() {
  return (
    <div className="arrow-nav">
      <div>
        <img src={Arrow.src} />
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </div>
      <div>
        <img src={Arrow.src} />
        <Link href="/posts">
          <a className="nav-link">Posts</a>
        </Link>
      </div>
    </div>
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
    <section className="grid">
      <section className="item1">
        <Nav />
      </section>
      <section className="item2">
        <Post post={post} />
      </section>
    </section>
  );
}
