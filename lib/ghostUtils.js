let BLOG_URL = process.env.BLOG_URL;
let CONTENT_API_KEY = process.env.CONTENT_API_KEY;

//object returned from endpoint ---> { meta:{},posts:[] }
export const getPosts = async () => {
  let res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&limit=3`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return { error };
    });

  return res;
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

export const getPage = async (slug) => {
  let res = await await fetch(
    `${BLOG_URL}/ghost/api/v3/content/pages/slug/${slug}?key=${CONTENT_API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return { error };
    });

  return res;
};
