import "./pokedexStyles/pokedexStyles.css";
import { PokedexBody } from "./components/PokedexBody";
import { PokedexCap } from "./components/PokedexCap";

function App() {
  return (
    <div className="pokedex">
      <PokedexBody />
      <PokedexCap />
    </div>
  );
}

export default App;
