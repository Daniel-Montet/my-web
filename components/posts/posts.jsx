import Link from "next/link";
import { Tags } from "./tags";
import { PostMeta } from "./postsMeta";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Posts({ posts, tags, handleFocus }) {
  const { ref, inView, entry } = useInView();
  console.log(posts);

  useEffect(() => {
    if (inView) {
      typeof handleFocus === "function" ?? handleFocus("posts");
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
      </section>
      <section className="col-2">
        <section className="small-page-title">
          <h4>TAGS</h4>
          <div className="hr" />
        </section>
        <section style={{ marginBottom: "25px" }}>
          <Link href="/posts">
            <a>View All Posts</a>
          </Link>
        </section>
        <section className="tag-list">
          <Tags tags={tags} />
        </section>
      </section>
    </section>
  );
}
