import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  let options = [
    "Atom",
    "Atoni",
    "Bill",
    "Charlie",
    "David",
    "Emily",
    "Ford",
    "Garry",
    "Henry",
    "Ivy",
    "Jill",
    "Kevin",
    "Kyle",
    "Liz",
    "Manny",
    "Nick",
    "Patrick",
    "Owen",
    "Quayle",
    "Rob",
    "Sam",
    "Tom",
    "Urvi",
    "Venesa",
    "Walker",
    "Xman",
    "Yoo",
    "Zebra",
    "Fred",
  ];
  const onChangeHandle = (e) => {
    setValue(e.target.value);
    setSuggestion([]);
    e.target.value &&
      options.forEach((s) => {
        if (
          s.substring(0, e.target.value.length).toUpperCase() ===
          e.target.value.toUpperCase()
        ) {
          setSuggestion((suggestion) => suggestion.concat(s));
          //console.log(suggestion)
        }
      });
  };

  return (
    <div className="container">
      <h2>Autocomplete Name Input</h2>
      <input
        className="autocomplete"
        onChange={(e) => onChangeHandle(e)}
        value={inputValue}
        placeholder="Type Name"
      />
      <div className="suggestions">
        {suggestion.map((s, id) => {
          return (
            <li
              key={id}
              onClick={(e) => {
                setValue(s);
                setSuggestion([]);
              }}
            >
              {s}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default App;
