import { useState } from "react";

const SearchFilter = () => {
  const items = ["React", "JavaScript", "HTML", "CSS", "Node", "Express"];

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(text.toLowerCase());
  });

//   console.log("component rerendered");

  return (
    <div>
      <input
        type="text"
        placeholder="Search."
        value={text}
        onChange={handleChange}
      />
      <ul>
        {filteredItems.length === 0 ? (
          <p>No results found.</p>
        ) : (
          filteredItems.map((item, idx) => <li key={idx}>{item}</li>)
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
