import "./PokedexScreen.css";

export const PokedexScreen = () => {
  return (
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
  );
};
