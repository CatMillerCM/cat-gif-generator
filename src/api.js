// const axios = require('axios');
import axios from 'axios';

function getCatGifJson() {
  const baseUrl = "https://cataas.com";

  return axios.get(`${baseUrl}/cat/gif?json=true`);
}

export default getCatGifJson;