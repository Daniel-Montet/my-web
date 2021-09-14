import styles from "./articles.module.css";
import Link from "next/link";

export default function Articles({ posts, meta }) {
  let page = meta.pagination.page;
  let next = meta.pagination.next;
  let prev = meta.pagination.prev;

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

  const NoPosts = (
    <div>
      <h2>Not Found</h2>
    </div>
  );

  if (posts === null) {
    // console.log("ran it");
    return <div className="container">{NoPosts}</div>;
  }
  // console.log(posts);
  return (
    <div className="container">
      <div className={styles.inner}>
        <div>
          <h3>Articles</h3> <hr />
        </div>
        <Posts posts={posts} />
        <div>
          {prev}
          <hr />
          <span>Page: {page}</span>
          <hr />
          {next}
        </div>
      </div>
    </div>
  );
}

// renders post and a short excerpt
const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.custom_excerpt}</p>
            <span>{post.published_at}</span>
            <hr />
            <span>{post.reading_time}</span>
          </div>
        );
      })}
    </div>
  );
};
