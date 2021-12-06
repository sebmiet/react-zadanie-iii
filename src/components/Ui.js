import React from "react";

const Ui = ({ handleDrawButton, handleLastQuote }) => {
  return (
    <div className="buttons">
      <button onClick={handleDrawButton} className="button-left">Nowy cytat...</button>
      <button onClick={handleLastQuote} className="button-right">Poprzedni...</button>
    </div>
  );
};

export default Ui;
