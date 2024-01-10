import React, { useEffect, useState } from "react";
import { fetchApi } from "../utils/Fetch";
import { baseUrl } from "../utils/apiRes";
function Indentity({ singlePokemon }) {
  const [Habitat, setHabitat] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchApi(
        `${baseUrl}pokemon-species/${singlePokemon?.name}`
      );
      const { habitat } = res.data;
      setHabitat(habitat);
    };
    fetch();
  }, []);
  return (
    <div className="text-[12px] text-white w-full flex flex-col h-max  my-1">
      <span>Tinggi: {singlePokemon?.height}0 cm </span>
      <span>Peso : {singlePokemon?.weight} kg</span>
      <span>Habitat : {Habitat?.name || null}</span>
    </div>
  );
}

export default Indentity;
