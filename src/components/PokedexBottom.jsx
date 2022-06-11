import "./PokedexBottom.css";
import { PokedexLightsLarge } from "./PokedexLightsLarge";

export const PokedexBottom = () => {
  return (
    <div className="pokeBottom">
      <div className="positionLightsLarge">
        <PokedexLightsLarge />
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
          <div className="screenPanel"></div>
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
  );
};
