import axios from "axios";

export default axios.create({
    params:{
        baseURL:'https://api.rawg.io/api',
        key:'c5d9b342e0504d23a426c2e31c1d16a5'
    }
})
