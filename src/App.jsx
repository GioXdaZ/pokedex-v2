import "./pokedexStyles/pokedexStyles.css";
import { PokedexTop } from "./components/PokedexTop";
import { PokedexScreen } from "./components/PokedexScreen";
import { PokedexHinge } from "./components/PokedexHinge";
import { PokedexCap } from "./components/PokedexCap";

function App() {
  return (
    <div className="pokedex">
      <div className="pokeBody">
        <PokedexTop />
        <div className="bodyScreen">
          <PokedexScreen />
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
      </div>
      <PokedexHinge />
      <PokedexCap />
    </div>
  );
}

export default App;
