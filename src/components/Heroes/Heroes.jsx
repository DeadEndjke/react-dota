import { useState, useEffect } from "react";
import axios from "axios";

import HeroItem from "./HeroItem/HeroItem";
import a from "./Heroes.module.css";
import Title from "./Title/Title";
import Nav from "./../Nav/Nav";
import { TextField } from "@mui/material";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  let url = `https://62a45baf259aba8e10e6edb5.mockapi.io/dota/heroes`;
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      console.log(data);
      setHeroes(data);
    });
  }, []);
  return (
    <div className={a.back}>
      <div className={a.bg}>
        <img
          className={a.backimage}
          src="https://preview.redd.it/qunxfupt8p271.png?auto=webp&s=08e0a6f44da046f30f16748504dcd9e7b77b3bab"
          alt=""
        />
      </div>

      <Nav />
      <div className={a.maincontent}>
        <div className={a.titlearea}>
          <Title />
        </div>
        <div className={a.textfield}>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>

        <div className={a.content}>
          <div className={a.heroesweb}>
            {heroes.map((heroes) => (
              <HeroItem
                key={heroes.id}
                id={heroes.id}
                name={heroes.name}
                img={heroes.img}
                attr={heroes.attr_image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
