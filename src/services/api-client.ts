import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"193be3df8ede483486672ffe90764118"
    }
})