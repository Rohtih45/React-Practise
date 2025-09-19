import axios from "axios";

export function getPosts(setUser) {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (resolve) {
      console.log("Fetched Successfully...");
      console.log(resolve.data[0]);
      setUser(resolve.data);
    })
    .catch(function (reject) {
      console.log(`Failed to Fetched ${reject}`);
    });
}
