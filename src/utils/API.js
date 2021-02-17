import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20";


export default {
    search: () => axios(BASEURL)
}