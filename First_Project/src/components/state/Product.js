import axios from 'axios';

const url = "https://fakestoreapi.com/products";

export function getProducts(setProducts){
    axios.get(url).then(function(success){
        
        setProducts(success.data)
    }).catch(function(reject){
        console.log(reject)
    })
}