import { getPosts, getTags } from "../../lib/ghostUtils";
import { useRouter } from "next/router";
import Link from "next/link";
import date from "../../lib/date";
import styles from "../../components/articles/articles.module.css";
import Arrow from "/public/left-arrow.svg";

function Articles({ posts, tags }) {
  if (posts === null) {
    return (
      <div className="container">
        <FallbackPage />
      </div>
    );
  }
  console.log(posts);
  return (
    <section>
      <section className="article-inner flex-row">
        <section className={styles.col7}>
          <section className={`${styles.colHeader} flex-row`}>
            <h4 className={styles.h4}>ARTICLES</h4>
            <div className={styles.hr} />
          </section>
          <section className={styles.posts}>
            <PostMeta posts={posts} />
          </section>
        </section>
        <section className={styles.col3}>
          <section className={`${styles.colHeader} flex-row`}>
            <h4 className={styles.h4}>TAGS</h4>
            <div className={styles.hr} />
          </section>
          <section>
            <TagsMeta tags={tags} />
          </section>
        </section>
      </section>
    </section>
  );
}

// renders post and a short excerpt
const PostMeta = ({ posts }) => {
  return posts.map((post) => {
    return (
      <article className={styles.post} key={post.id}>
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a href="#" className={styles.h2}>
            {post.title}
          </a>
        </Link>
        <p className={styles.p}>{post.custom_excerpt}</p>
        <div className={`flex-row ${styles.meta}`}>
          <span className={styles.time}>{date(post.published_at)}</span>
          <div className={`${styles.dashes} flex-row`}>
            <div className={styles.dash} />
            <div className={styles.dash} />
          </div>
          <span>{post.reading_time} MIN</span>
        </div>
      </article>
    );
  });
};

const FallbackPage = (message) => (
  <div>
    <h2>{message}</h2>
  </div>
);

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

const TagsMeta = ({ tags }) => {
  return tags.map((tag) => (
    <Link href="/tags/[slug]" as={`/tags/${tag.slug}`}>
      <a>{tag.name}</a>
    </Link>
  ));
};

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

export default function BlogPageLayout({ posts, tags }) {
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
        <Articles posts={posts} tags={tags} />
      </section>
    </section>
  );
}
