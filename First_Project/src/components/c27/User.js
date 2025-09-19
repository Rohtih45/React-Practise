import axios from "axios";
const url = "https://randomuser.me/api/?results=50";

export function getUsers(setUser){
    axios.get(url).then(function(resolve){
        console.log(resolve.data.results)
        setUser(resolve.data.results)
    }).catch(function(reject){
        alert("Failed to fetch Records")
    })
}