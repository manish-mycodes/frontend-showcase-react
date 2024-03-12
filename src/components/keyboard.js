import React, { useState } from 'react';

const T9Keyboard = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const dictionary = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  const handleKeyPress = (key) => {
    setInput((prevInput) => prevInput + key);
    setSuggestions(dictionary[key]);
  };

  const handleClear = () => {
    setInput('');
    setSuggestions([]);
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <button onClick={handleClear}>Clear</button>
      <div>
        {Object.keys(dictionary).map((key) => (
          <button key={key} onClick={() => handleKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
      <div>
        {suggestions.map((char) => (
          <button key={char} onClick={() => setInput((prevInput) => prevInput + char)}>
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default T9Keyboard;