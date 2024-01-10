import axios from "axios";
export const fetchApi = (url) => {
    return new Promise((resolve,rejectes) => {
        axios
        .get(url)
        .then((res) => resolve(res))
        .catch((err) => {
        rejectes(err);
}
)
    })
}