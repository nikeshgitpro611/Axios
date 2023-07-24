import React, { useEffect } from "react";
import axios from "axios";
const url = "https://course-api.com/react-store-products";

const FirstExample = () => {

  const fetchData = async () => {
    try {
        const responce = await axios(url);
        const data = responce.data;
        console.log('responce : ', data);
    } catch (error) {
        console.log(error.responce);
    }
  };

  useEffect(() => {
    console.log("Axios first request ..");
    fetchData();
  }, []);

  return <div>FirstExample</div>;
};

export default FirstExample;
