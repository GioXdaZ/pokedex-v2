import { useState } from "react";
import "./pokedexStyles/pokedexStyles.css";

function App() {
  return (
    <div className="pokeBody">
      <div className="pokeTop">
        <div className="borderHuge">
          <div className="pokeCircle blue"></div>
        </div>
        <div className="circleContainer">
          <div className="borderTiny">
            <div className="pokeCircle red"></div>
          </div>
          <div className="borderTiny">
            <div className="pokeCircle yellow"></div>
          </div>
          <div className="borderTiny">
            <div className="pokeCircle green"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
