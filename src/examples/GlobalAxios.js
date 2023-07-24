import React, { useEffect } from "react";
import axios from "axios";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalAxios = () => {
  const fetchGlobal = async () => {
    try {
      const rep1 = await axios(productsUrl)
      console.log(rep1);
    } catch (error) {}
  };

  useEffect(() => {
    fetchGlobal();
  }, []);
  return <div>GlobalAxios</div>;
};

export default GlobalAxios;
