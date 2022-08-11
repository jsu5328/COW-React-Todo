import React from "react";

const Header = () => {
  return (
    <header>
      <h1 id="title">노예의 노동일지</h1>
      <div className="buttonContainer">
        <div className="buttonBlue">
          <button type="button" id="listButton" className="tooltip">
            <span className="tooltiptext">자린고비뷰</span>
          </button>
          <button type="button" id="gridButton" className="tooltip">
            <span className="tooltiptext">쌀가마뷰</span>
          </button>
          <button type="button" id="addButton" className="tooltip">
            <span className="tooltiptext">노동추가</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
