import React, { useState } from "react";
import axios from 'axios';
const url = 'https://course-api.com/axios-tutorial-post';

const PostAxios = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlerSubmit = async(e) => {
    e.preventDefault();
    // console.log(name, email);
    try {
        const responce = await axios.post(url, {name, email});
        console.log("responce : ", responce.data);
    } catch (error) {
        console.log(error.responce);
    }
  };

  return (
    <section>
      <h2 className="text-center">Post Request</h2>
      <form className="form" onSubmit={handlerSubmit}>
        <div className="form-row">
          <lable htmlFor="name" className="form-lable">
            name
          </lable>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-block">
          register
        </button>
      </form>
    </section>
  );
};

export default PostAxios;
