import Link from "next/link"

export const Tags = ({tags}) => {
    return tags.map((tag) =>
      <Link  href="/tags/[slug]" as={`/tags/${tag.slug}` } key={tag.id}>
        <a >{tag.name}</a>
      </Link>
    )
  }