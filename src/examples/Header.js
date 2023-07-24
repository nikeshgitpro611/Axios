import React, { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

const Header = () => {
  const [joke, setJoke] = useState("dad jokes");

  const fetchdata = async () => {
    try {
      const {data} = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke)
      console.log("responce : ", data.joke);
    } catch (error) {
      console.log(error.responce);
    }
  };

  //   useEffect(() => {
  //     fetchdata();
  //   });

  return (
    <section className="section text-section">
      <button className="btn" onClick={fetchdata}>
        random Jokes
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};

export default Header;
