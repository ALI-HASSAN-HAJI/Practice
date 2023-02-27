import axios from "axios";

export default axios.create({
    baseURL: 'https://api.wheretheiss.at/v1/satellites/25544'
})