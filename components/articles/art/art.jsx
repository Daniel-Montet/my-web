import styles from "../articles.module.css";
import Link from "next/link";
import { PostMeta } from "./postsMeta";
import {Tags} from "../../tags/tags";


export default function Excerpts({ posts, tags  }) {
  if (posts === null) {
    return (
      <div className="container">
        <FallbackPage />
      </div>
    );
  }

  return (
      <section className="article-grid">
        <section  className="article-col-1" >
          <section className="title">
            <h4 >ARTICLES</h4>
            <div className="hr" />
          </section>
          <section className={styles.posts}>
            <PostMeta posts={posts} />
          </section>
          <section className="viewMore">
            <Link href="/posts">
              <a>View More</a>
            </Link>
          </section>
        </section>
        <section className="article-col-2">
          <section className="title">
            <h4>TAGS</h4>
            <div className="hr" />
          </section>
          <section>
            <Tags tags={tags}/>
          </section>
        </section>
      </section>
  );
}


const FallbackPage = (message) => (
  <div>
    <h2>{message}</h2>
  </div>
);