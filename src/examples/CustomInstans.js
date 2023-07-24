import React, { useEffect } from "react";
import authFetch from "../axios/Default";
import axios from "axios";

const CustomInstans = () => {
  const fetchData = async() => {
    const resp1 = await authFetch('/react-store-products');
    console.log('log : ', resp1);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return <div>CustomInstans</div>;
};

export default CustomInstans;
