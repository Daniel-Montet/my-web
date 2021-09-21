import styles from "./articles.module.css";
import Link from "next/link";

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
  // console.log(posts);
  return (
    <section className="container">
      <section className={`${styles.inner} flex-row`}>
        <section className={styles.col7}>
          <section className={`${styles.colHeader} flex-row`}>
            <h4 className={styles.h4}>ARTICLES</h4>
            <div className={styles.hr} />
          </section>
          <section className={styles.posts}>
            <Posts posts={posts} />
          </section>
          <PageControls page={page} next={next} prev={prev} />
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
const Posts = ({ posts }) => {
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
