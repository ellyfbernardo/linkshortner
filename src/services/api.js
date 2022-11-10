import  axios  from "axios";

 export const key = "5de5ac4330af62f07d75930a272c25fee1cf3e1b"

 const api = axios.create({
     baseURL:'https://api-ssl.bitly.com/v4/',
     headers:{
         'Authorization':  `Bearer ${key}`
     }

})

export default api;
