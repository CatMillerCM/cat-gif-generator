const axios = require('axios');

function getCatGifJson() {
  const baseUrl = "https://cataas.com";
  const path = "cat/gif"
  const query = "json=true";

  return axios.get(`${baseUrl}/${path}?${query}`);
}

export default getCatGifJson;