const Search = ({ text, setText }) => {
  const inputHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        className="w-full bg-black border border-[#333] text-white p-3 rounded-lg focus:outline-none focus:border-indigo-500"
        type="text"
        placeholder="Search"
        value={text}
        onChange={inputHandler}
      />
    </div>
  );
};

export default Search;
