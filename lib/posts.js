import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://ghost-cms-nextjsbackend.herokuapp.com/ghost',
    key: 'fdd2c1077452ed48da2ecd2b5f',
    version: "v3"
  });