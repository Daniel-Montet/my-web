import { getPosts, getTags } from "../../lib/ghostUtils";
import { useRouter } from "next/router";
import Link from "next/link";
import date from "../../lib/date";
import styles from "../../components/articles/articles.module.css";
import { Tags } from "../../components/tags/tags";
import { OtherNav } from "../../components/navigation/nav";

function Articles({ posts, tags }) {
  if (posts === null) {
    return (
      <div className="container">
        <FallbackPage />
      </div>
    );
  }

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
            <Tags tags={tags} />
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
        <div className="meta flex-row">
          <span className="time">{date(post.published_at)}</span>
          <span className="dot"></span>
          <span>{post.reading_time} min read</span>
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
        <OtherNav />
      </section>
      <section className="item2">
        <Articles posts={posts} tags={tags} />
      </section>
    </section>
  );
}
