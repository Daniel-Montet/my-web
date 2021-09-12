import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://ghost-cms-nextjsbackend.herokuapp.com",
  key: "fdd2c1077452ed48da2ecd2b5f",
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: "tags",
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}
