import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID J3sgzjXYCMjmYYsZYwvU4LAx0ZyBqCQYn15jrKKZ6Ts",
    },
});
