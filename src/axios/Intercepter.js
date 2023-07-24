import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com",
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common['Accept'] = 'application/json';
    // request.headers.common["Accept"] = "application/json";
    console.log("request part......!!!");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("got responce");
    return response;
  },
  (error) => {
    console.log(error.response);
    // return Promise.reject(error);
  }
);

export default authFetch