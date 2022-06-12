import "./PokedexTypesPanel.css";

export const PokedexTypesPanel = () => {
  return (
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
  );
};
