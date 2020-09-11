import React from 'react';

function ClearCards({ setCards }) {
  return (
    <button onClick={() => setCards([])} className="clear btn">
      <i className="fas fa-trash"></i> Clear Cards
    </button>
  );
}

export default ClearCards;
