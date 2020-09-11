import React from 'react';

function Header({ setShowAddContainer }) {
  return (
    <>
      <h1>
        Memory Cards
        <button
          onClick={() => setShowAddContainer(true)}
          className="btn btn-small"
        >
          <i className="fas fa-plus"></i> Add New Card
        </button>
      </h1>
    </>
  );
}

export default Header;
