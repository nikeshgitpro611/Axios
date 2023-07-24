import React, { useEffect } from "react";
import authFetch from "../axios/Intercepter";
const url = "https://course-api.com/react-store-products";

const Intersepters = () => {
  const fetchData = async () => {
    try {
        const resp1 = await authFetch('/react-store-products');
        console.log("resp1 : ", resp1);
        console.log('authFetch : ', authFetch);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Intersepters</div>;
};

export default Intersepters;
