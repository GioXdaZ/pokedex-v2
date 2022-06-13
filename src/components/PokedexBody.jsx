import "./PokedexBody.css";

export const PokedexBody = () => {
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
      <div className="bodyScreen">
        <div className="pokeBorderScreen">
          <div className="lightsTopScreen">
            <div className="borderLights">
              <div className="lightRedTop"></div>
            </div>
            <div className="borderLights">
              <div className="lightRedTop"></div>
            </div>
          </div>
          <div className="pokeScreen">
            <div className="imagePokemon"></div>
            <div className="numberPokemon">
              <h1>#</h1>
            </div>
          </div>
          <div className="borderTinyScreen">
            <div className="pokeLightError"></div>
          </div>
          <div className="audioOutputContainer">
            <div className="audioOutput"></div>
            <div className="audioOutput"></div>
            <div className="audioOutput"></div>
            <div className="audioOutput"></div>
          </div>
        </div>
      </div>
      <div className="pokeBottom">
        <div className="positionLightsLarge">
          <div className="lights">
            <div className="borderLightsLarge">
              <div className="lightGreen"></div>
            </div>
            <div className="borderLightsLarge">
              <div className="lightRed"></div>
            </div>
          </div>
        </div>
        <div className="stickLeft"></div>
        <div className="lightContainerTiny">
          <div className="borderLightsTiny">
            <div className="lightRedTiny"></div>
          </div>
          <div className="borderLightsTiny">
            <div className="lightGreenTiny"></div>
          </div>
        </div>
        <div className="pokePanelInfo">
          <div className="borderPanelInfo">
            <div className="screenPanel">
              <div className="panelPokemonInfo">
                <div className="namePokemon">
                  <h2>NAME</h2>
                  <div className="genderPokemon">
                    <h2>8</h2>
                  </div>
                </div>
                <div className="speciesPokemon">
                  <h6>Species:</h6>
                </div>
                <div className="heightPokemon">
                  <h6>Height:</h6>
                </div>
                <div className="weightPokemon">
                  <h6>Weight:</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow">
          <div className="borderArrowPanel">
            <div className="arrowPanel">
              <div className="decorationArrow"></div>
            </div>
          </div>
        </div>
        <div className="lightsBottomContainer">
          <div className="lightBottom">
            <div className="green"></div>
          </div>
          <div className="lightBottom">
            <div className="yellow"></div>
          </div>
          <div className="lightBottom">
            <div className="yellow"></div>
          </div>
          <div className="lightBottom">
            <div className="yellow"></div>
          </div>
        </div>
      </div>
      <div className="pokeHinge">
        <div className="pokeRings"></div>
        <div className="pokeRings"></div>
      </div>
    </div>
  );
};
