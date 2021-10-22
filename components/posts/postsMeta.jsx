import date from "../../lib/date";
import Link from "next/link"

// renders post and a short excerpt
export const PostMeta = ({ posts }) => {
    return posts.map((post) => {
      return (
        <article className="excerpt" key={post.id}>
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a className="h2">
              <h2>{post.title}</h2>
            </a>
          </Link>
          <p >{post.custom_excerpt}</p>
          <div className="meta flex-row">
            <span className="time">{date(post.published_at)}</span>
            <span className="dot"></span>
            <span>{post.reading_time} min read</span>
          </div>
        </article>
      );
    });
  };