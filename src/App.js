import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState('');
  const [view, setView] = useState(false);

  const handleKeyDown = (e) => {
    const enterKey = 13;

    if (e.keyCode === enterKey) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srlimit=6&srsearch=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPages(data.query.search);
        setView(true);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setSearch(value);

    setTimeout(() => {
      if (value === '') {
        setView(false);
      }
    }, 100);
  };

  const renderItem = (i) => {
    const wikiBaseUrl = 'https://en.wikipedia.org/?curid=';

    return (
      <div>
        <a
          className="links"
          href={`${wikiBaseUrl} + ${pages[i].pageid}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="results">{pages[i].title}</div>
        </a>
      </div>
    );
  };

  return (
    <div id="container">
      <p className="heading">
        <a
          id="RandomLink"
          href="https://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Click here for a random Wikipedia article
        </a>
      </p>
      <div id="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="search..."
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {view && (
        <div id="result-container">
          {renderItem(0)}
          {renderItem(1)}
          {renderItem(2)}
          {renderItem(3)}
          {renderItem(4)}
          {renderItem(5)}
        </div>
      )}
    </div>
  );
};

export default App;
