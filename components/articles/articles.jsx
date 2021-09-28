import styles from "./articles.module.css";
import Link from "next/link";
import date from "../../lib/date";
import {Tags} from "../tags/tags";

export default function Articles({ posts, tags  }) {

  if (posts === null) {
    return (
      <div className="container">
        <FallbackPage />
      </div>
    );
  }

  return (
    <section className="container">
      <section className={`${styles.inner} flex-row`}>
        <section className={styles.col7}>
          <section className={`${styles.colHeader} flex-row`}>
            <h4 className={styles.h4}>ARTICLES</h4>
            <div className={styles.hr} />
          </section>
          <section className={styles.posts}>
            <PostMeta posts={posts} />
          </section>
          <section className={styles.viewMore}>
            <Link href="/posts">
              <a>View More</a>
            </Link>
          </section>
        </section>
        <section className={styles.col3}>
          <section className={`${styles.colHeader} flex-row`}>
            <h4 className={styles.h4}>TAGS</h4>
            <div className={styles.hr} />
          </section>
          <section>
            <Tags tags={tags}/>
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
          <a className={styles.h2}>
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
