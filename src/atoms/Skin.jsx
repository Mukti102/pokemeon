import React from "react";

function Skin({ singlePokemon }) {
  return (
    <div className="w-full flex gap-2 mt-4">
      <div className="w-20 h-20  overflow-hidden">
        <img
          src={singlePokemon?.sprites?.other?.home?.front_shiny}
          alt="poke"
          className="w-full h-full object-cover scale-90"
        />
      </div>
      <div className="w-20 h-20  overflow-hidden">
        <img
          src={singlePokemon?.sprites?.other?.home?.front_default}
          alt="poke"
          className="w-full h-full object-cover scale-110"
        />
      </div>
      <div className="w-20 h-20  overflow-hidden">
        <img
          src={singlePokemon?.sprites?.other["official-artwork"]?.front_shiny}
          alt="poke"
          className="w-full h-full object-cover scale-90"
        />
      </div>
    </div>
  );
}

export default Skin;
