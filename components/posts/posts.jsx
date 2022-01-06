import Link from "next/link";
import { Tags } from "./tags";
import { PostMeta } from "./postsMeta";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Posts({ posts, tags, handleFocus }) {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      handleFocus("posts");
    }
    return;
  }, [inView]);

  return (
    <section className="inner-section excerpt-grid" id="posts" ref={ref}>
      <section className="col-1">
        <section className="small-page-title">
          <h4>POSTS</h4>
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
