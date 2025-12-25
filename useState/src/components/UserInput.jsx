import { useState } from "react";

const UserInput = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    console.log(event.target);
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type here."
        value={text}
        onChange={handleChange}
      />
      <p>{text === "" ? "Nothing typed yet." : text}</p>
    </div>
  );
};

export default UserInput;