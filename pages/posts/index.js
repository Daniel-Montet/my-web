import styles from "../../components/articles/articles.module.css";
import Link from "next/link";

let BLOG_URL = process.env.BLOG_URL;
let CONTENT_API_KEY = process.env.CONTENT_API_KEY;

export default function Articles({ posts, meta }) {
  let page = meta.pagination.page;
  let next = meta.pagination.next;
  let prev = meta.pagination.prev;

  if (posts === null) {
    return (
      <div className="container">
        <FallbackPage />
      </div>
    );
  }

  return (
    <section className="container1">
      <section className={`${styles.inner} flex-row`}>
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

const PageControls = ({ prev, next, page }) => {
  let prevButton;
  let nextButton;

  if (prev) {
    prevButton = <span>prev</span>;
  } else {
    prevButton = <span></span>;
  }
  if (next) {
    nextButton = <span>next</span>;
  } else {
    nextButton = <span></span>;
  }
  return (
    <div className="flex-row">
      {prevButton}

      <span>Page: {page}</span>

      {nextButton}
    </div>
  );
};

const FallbackPage = (message) => (
  <div>
    <h2>{message}</h2>
  </div>
);

function date(date) {
  return new Date(date).toDateString().toUpperCase();
}

export async function getStaticProps(context) {
  const { posts, meta, error } = await getPosts();

  if (error) {
    return {
      props: { posts: null, meta: null },
    };
  }

  return {
    props: { posts, meta },
  };
}

const getPosts = async () => {
  let x = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return { error };
    });
  return x;
};
