import React, { useEffect, useState } from "react";
import axios from "axios";
import { globalUrl } from "../utils/apiRes";
import Skin from "../atoms/Skin";
import Abilities from "../molecules/Abilities";
import Indentity from "../molecules/Indentity";
function Card({ name }) {
  const [singlePokemon, setSinglePokemon] = useState({});
  const fetch = async () => {
    await axios
      .get(`${globalUrl}/${name}`)
      .then((result) => setSinglePokemon(result.data))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetch();
  }, [name]);
  const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgba(${r},${g},${b},.9)`;
  };
  console.log(singlePokemon);
  return (
    <div
      className={`group hover:border-1 w-60 h-[22rem] relative my-7 rounded-sm shadow-md hover:scale-110 transition-all delay-75`}
      style={{ background: randomColor() }}
    >
      <div className="group-hover:scale-110 transition-all delay-100 w-32 h-32 absolute left-14 -top-16">
        <img
          src={singlePokemon?.sprites?.other["official-artwork"]?.front_default}
          alt="pokemon"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full pt-14 px-3 flex flex-col justify-start ">
        <h1 className="font-semibold text-base text-white capitalize">
          {singlePokemon.name}
        </h1>
        <Indentity singlePokemon={singlePokemon} />
        <Abilities stats={singlePokemon?.stats} />
        <Skin singlePokemon={singlePokemon} />
      </div>
    </div>
  );
}

export default Card;
