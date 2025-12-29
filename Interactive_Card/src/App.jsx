import Card from "./components/Card";
import Inputs from "./components/Inputs";
import { useState } from "react";

const App = () => {
  const [userData, setData] = useState([]);

  console.log(userData);

  const deleteHandler = (idx) => {
    setData((oldData) => oldData.filter((_, i) => i !== idx));
  };

  return (
    <div
      className="bg-[#151515] 
      h-screen 
      w-screen
      p-4"
    >
      <Inputs setUserData={setData} />
      <Card userData={userData} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
