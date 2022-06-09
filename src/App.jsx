import { useState } from "react";
import "./pokedexStyles/pokedexStyles.css";

function App() {
  return (
    <div className="pokeBody">
      <div className="borderPokeTop">
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
      <div className="pokeBorderScreen">
        <div className="pokeScreen"></div>
        <div className="borderTinyScreen">
          <div className="pokeCircle red"></div>
        </div>
        <div className="audioOutputContainer">
          <div className="audioOutput"></div>
          <div className="audioOutput"></div>
          <div className="audioOutput"></div>
          <div className="audioOutput"></div>
        </div>
      </div>
      <div className="pokeBottom">
        <div className="ligthContainerLarge">
          <div className="lightRedLarge"></div>
          <div className="lightGreenLage"></div>
        </div>
        <div className="stickLeft"></div>
        <div className="lightContainerTiny">
          <div className="lightRedTiny"></div>
          <div className="lightGreenTiny"></div>
        </div>
        <div className="pokePanelInfo">
          <div className="screenPanel"></div>
        </div>
        <div className="arrowPanel"></div>
        <div className="lightsBottomContainer">
          <div className="lightGreenBottom"></div>
          <div className="lightYellowBottom"></div>
          <div className="lightYellowBottom"></div>
          <div className="lightYellowBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
