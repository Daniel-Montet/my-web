import { getPosts } from '../lib/posts';

export default function Home(props) {
return (
  <ul>
  {props.posts.map(post => (
    <li key={post.id}>{post.title}</li>
  ))}
</ul>
)
}

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}