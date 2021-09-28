let BLOG_URL = process.env.BLOG_URL;
let CONTENT_API_KEY = process.env.CONTENT_API_KEY;

export const getPosts = async (filter = null) => {
  let result;

  if (filter) {
    result = await fetch(
      `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&filter=tag:${filter}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return { error };
      });
  } else {
    result = await fetch(
      `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return { error };
      });
  }

  return result;
};

export const getTags = async () => {
  let res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/tags?key=${CONTENT_API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return { error };
    });

  return res;
};
