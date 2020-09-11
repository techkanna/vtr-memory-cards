import React, { useState } from 'react';

function AddContainer({ showAddContainer, setShowAddContainer, setCards }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const addCard = () => {
    if (question.trim() && answer.trim()) {
      const newCard = { question, answer };

      setCards((c) => [...c, newCard]);
      setQuestion('');
      setAnswer('');
      setShowAddContainer(false);
    }
  };
  return (
    <div className={`add-container ${showAddContainer ? 'show' : ''}`}>
      <h1>
        Add New Card
        <button
          onClick={() => setShowAddContainer(false)}
          className="btn btn-small btn-ghost"
        >
          <i className="fas fa-times"></i>
        </button>
      </h1>

      <div className="form-group">
        <label htmlFor="question">Question</label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question..."
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="answer">Answer</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter Answer..."
        ></textarea>
      </div>

      <button onClick={addCard} className="btn">
        <i className="fas fa-plus"></i> Add Card
      </button>
    </div>
  );
}

export default AddContainer;
