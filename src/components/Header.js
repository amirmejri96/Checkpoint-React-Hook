import React from 'react';

const Header = ({ setNameSearch }) => {
  return (
    <div>
      <header>
        <h1>Should I watch it?</h1>
        <form id="form">
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="search"
            onChange={(e) => setNameSearch(e.target.value)}
          />
        </form>
      </header>
    </div>
  );
};

export default Header;
