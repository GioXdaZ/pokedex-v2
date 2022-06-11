import "./pokedexStyles/pokedexStyles.css";
import { PokedexTop } from "./components/PokedexTop";
import { PokedexScreen } from "./components/PokedexScreen";
import { PokedexHinge } from "./components/PokedexHinge";
import { PokedexCap } from "./components/PokedexCap";
import { PokedexBottom } from "./components/PokedexBottom";

function App() {
  return (
    <div className="pokedex">
      <div className="pokeBody">
        <PokedexTop />
        <div className="bodyScreen">
          <PokedexScreen />
        </div>
        <PokedexBottom />
      </div>
      <PokedexHinge />
      <PokedexCap />
    </div>
  );
}

export default App;
