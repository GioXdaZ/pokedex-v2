import { PokedexButtonBone } from "./PokedexButtonBone";
import "./PokedexCap.css";
import { PokedexLightsCapTiny } from "./PokedexLightsCapTiny";
import { PokedexLightsLarge } from "./PokedexLightsLarge";
import { PokedexStickRight } from "./PokedexStickRight";
import { PokedexTypesPanel } from "./PokedexTypesPanel";

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
            <div className="pokeButtonPanel"></div>
            <div className="pokeButtonPanel"></div>
            <div className="pokeButtonPanel"></div>
            <div className="pokeButtonPanel"></div>
            <div className="pokeButtonPanel"></div>
          </div>
          <div className="pokeButtonPanelBottom">
            <div className="pokeButtonPanel"></div>
            <div className="pokeButtonPanel"></div>
            <div className="pokeButtonPanel"></div>
            <div className="pokeButtonPanel"></div>
            <div className="pokeButtonPanel"></div>
          </div>
        </div>
        <div className="positionLightLargeCap">
          <PokedexLightsLarge />
        </div>
        <div className="positionLightTinyCap">
          <PokedexLightsCapTiny />
        </div>
        <div>
          <PokedexButtonBone />
        </div>
        <div>
          <PokedexStickRight />
        </div>
        <div>
          <PokedexTypesPanel />
        </div>
      </div>
    </div>
  );
};
