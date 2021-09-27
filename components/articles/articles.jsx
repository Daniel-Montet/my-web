import styles from "./articles.module.css";
import Link from "next/link";
import date from "../../lib/date";

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
            <TagsMeta tags={tags}/>
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
        <div className={`flex-row ${styles.meta}`}>
          <span className={styles.time}>{date(post.published_at)}</span>
          <div className={`${styles.dashes} flex-row`}>
            <div className={styles.dash} />
            <div className={styles.dash} />
          </div>
          <span>{post.reading_time} min read</span>
        </div>
      </article>
    );
  });
};


const TagsMeta = ({tags}) => {
  return tags.map((tag) =>
    <Link href="/tags/[slug]" as={`/tags/${tag.slug}`}>
      <a>{tag.name}</a>
    </Link>
  )
}

const FallbackPage = (message) => (
  <div>
    <h2>{message}</h2>
  </div>
);
