import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import ClearCards from './components/ClearCards';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AddContainer from './components/AddContainer';

function App() {
  const [cards, setCards] = useState([]);
  const [currentActiveCard, setCurrentActiveCard] = useState(0);
  const [showAddContainer, setShowAddContainer] = useState(false);

  useEffect(() => {
    setCards(getCardsData());
  }, []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  // Get cards from local storage
  function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null
      ? [
          {
            question: 'What must a variable begin with?',
            answer: 'A letter, $ or _',
          },
          {
            question: 'What is a variable?',
            answer: 'Container for a piece of data',
          },
          {
            question: 'Example of Case Sensitive Variable',
            answer: 'thisIsAVariable',
          },
        ]
      : cards;
  }

  return (
    <>
      <Header setShowAddContainer={setShowAddContainer} />
      <Cards currentActiveCard={currentActiveCard} cards={cards} />
      <Navigation
        currentActiveCard={currentActiveCard}
        setCurrentActiveCard={setCurrentActiveCard}
        cards={cards}
      />
      <AddContainer
        showAddContainer={showAddContainer}
        setShowAddContainer={setShowAddContainer}
        setCards={setCards}
      />
      <ClearCards setCards={setCards} />
    </>
  );
}

export default App;
