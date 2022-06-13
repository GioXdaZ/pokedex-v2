import "./PokedexCap.css";

export const PokedexCap = () => {
  return (
    <div className="pokeCapBodyBorder">
      <div className="pokeCapBody">
        <div className="pokeCapBodyIn">
          <div className="pokeCapBorderScreen">
            <div className="pokeCapScreen">
              <div className="infoPokemonScreen">
                <h2>INFO HERE </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonsPanel">
          <div className="pokeButtonPanelTop">
            <div className="pokeButtonPanel aqua"></div>
            <div className="pokeButtonPanel aqua"></div>
            <div className="pokeButtonPanel aqua"></div>
            <div className="pokeButtonPanel aqua"></div>
            <div className="pokeButtonPanel aqua"></div>
          </div>
          <div className="pokeButtonPanelBottom">
            <div className="pokeButtonPanel aqua"></div>
            <div className="pokeButtonPanel aqua"></div>
            <div className="pokeButtonPanel aqua"></div>
            <div className="pokeButtonPanel aqua"></div>
            <div className="pokeButtonPanel aqua"></div>
          </div>
        </div>
        <div className="positionLightLargeCap">
          <div className="lights">
            <div className="borderLightsLarge">
              <div className="lightGreen"></div>
            </div>
            <div className="borderLightsLarge">
              <div className="lightRed"></div>
            </div>
          </div>
        </div>
        <div className="positionLightTinyCap">
          <div className="lightsCapBottonContainer">
            <div className="lightCapBottom">
              <div className="redLightCap"></div>
            </div>
            <div className="lightCapBottom">
              <div className="greenLightCap"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="buttonPanelBone">
            <div className="pokeButtonPanel bone"></div>
            <div className="pokeButtonPanel bone"></div>
          </div>
        </div>
        <div>
          <div className="stickRightPanel">
            <div className="stickRight"></div>
          </div>
        </div>
        <div>
          <div className="typesPanelContainer">
            <div className="typesBorderPanels">
              <div className="typesScreenPanel">
                <div className="type">
                  <h3>TYPE 1</h3>
                </div>
              </div>
            </div>
            <div className="typesBorderPanels">
              <div className="typesScreenPanel">
                <div className="type">
                  <h3>TYPE 2</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
