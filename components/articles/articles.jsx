import Link from "next/link";
import { Tags } from "./tags";
import { PostMeta } from "./postsMeta";

export default function Excerpt({ posts, tags }) {
  if (posts === null) {
    return (
      <div className="container">
        <FallbackPage />
      </div>
    );
  }

  return (
    <section className="inner-section excerpt-grid">
      <section className="col-1">
        <section className="small-page-title">
          <h4>ARTICLES</h4>
          <div className="hr" />
        </section>
        <section className="excerpt-list">
          <PostMeta posts={posts} />
        </section>
        <section className="_link">
          <Link href="/posts">
            <a>View All</a>
          </Link>
        </section>
      </section>
      <section className="col-2">
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

const FallbackPage = (message) => (
  <div>
    <h2>{message}</h2>
  </div>
);
