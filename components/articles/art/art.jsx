import styles from "../articles.module.css";
import Link from "next/link";
import date from "../../../lib/date";
import { Tags } from "../../tags/tags";

export default function Excerpt({ posts, tags }) {
  if (posts === null) {
    return (
      <div className="container">
        <FallbackPage />
      </div>
    );
  }

  return (
    <section className="excerpt-container">
      <section className="excerpt-column-1">
        <section className="small-page-title">
          <h4>ARTICLES</h4>
          <div className="hr" />
        </section>
        <section className="excerpt-list">
          <PostMeta posts={posts} />
        </section>
        <section className="_link">
          <Link href="/posts">
            <a>View More</a>
          </Link>
        </section>
      </section>
      <section className="excerpt-column-2">
        <section className="small-page-title">
          <h4>TAGS</h4>
          <div className="hr" />
        </section>
        <section className="tag-list">
          <Tags tags={tags} />
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
          <a className={styles.h2}>{post.title}</a>
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
