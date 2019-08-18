import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1cee548501d27fe351c1a5d4c4e808c548201636104ec9da5b3ce856535a37b1"
  }
});
