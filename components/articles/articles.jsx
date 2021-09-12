import styles from "./articles.module.css";

export default function Articles({ posts }) {
  const NoPosts = () => (
    <div>
      <h2>Not Found</h2>
    </div>
  );

  const Posts = () => (
    <div className={styles.inner}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );

  if (posts === null) {
    console.log("ran it");
    return (
      <div className="container">
        <NoPosts />
      </div>
    );
  }
  console.log(posts);
  return (
    <div className="container">
      <Posts />
    </div>
  );
}
