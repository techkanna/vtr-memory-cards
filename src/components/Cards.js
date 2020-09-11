import React, { useState } from 'react';

function Cards({ cards, currentActiveCard }) {
  const [showAns, setShowAns] = useState(false);
  const getClassName = (i) => {
    let name = 'card';
    if (i === currentActiveCard) name += ' active';
    if (i < currentActiveCard) name += ' left';
    if (i > currentActiveCard) name += ' right';

    return name;
  };
  return (
    <div id="cards-container" className="cards">
      {cards.map((card, i) => (
        <div
          key={i}
          onClick={() => setShowAns((s) => !s)}
          className={`${getClassName(i)} ${showAns ? 'show-answer' : ''}`}
        >
          <div className="inner-card">
            <div className="inner-card-front">
              <p>{card.question}</p>
            </div>
            <div className="inner-card-back">
              <p>{card.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
