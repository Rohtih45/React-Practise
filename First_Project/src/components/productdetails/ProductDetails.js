import axios from "axios";

export function getProductDetails(setProduct, id) {
  const url = `https://fakestoreapi.com/products/${id}`;
  axios
    .get(url)
    .then(function (success) {
      console.log(success.data);
      setProduct(success.data);
    })
    .catch(function (reject) {
      console.log(reject);
    });
}
