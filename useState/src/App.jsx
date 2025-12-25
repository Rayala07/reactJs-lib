import Counter from "./components/Counter";
import SearchFilter from "./components/SearchFilter";
import UserInput from "./components/UserInput";

const App = () => {
  return (
    <div className="app-container">
      <Counter />
      <UserInput />
      <SearchFilter />
    </div>
  );
};

export default App;
