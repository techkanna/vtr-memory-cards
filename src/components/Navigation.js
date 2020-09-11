import React from 'react';

function Navigation({ currentActiveCard, cards, setCurrentActiveCard }) {
  const getPrevCard = () => {
    setCurrentActiveCard((ac) => {
      ac = ac - 1;
      if (ac < 0) {
        ac = 0;
      }

      return ac;
    });
  };

  const getNextCard = () => {
    setCurrentActiveCard((ac) => {
      ac = ac + 1;
      if (ac > cards.length - 1) {
        ac = cards.length - 1;
      }

      return ac;
    });
  };
  return (
    <div className="navigation">
      <button onClick={getPrevCard} className="nav-button">
        <i className="fas fa-arrow-left"></i>
      </button>

      <p>
        {cards.length && (
          <span>
            {currentActiveCard + 1}/{cards.length}
          </span>
        )}
      </p>

      <button onClick={getNextCard} className="nav-button">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Navigation;
