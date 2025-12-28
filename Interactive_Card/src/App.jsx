import Card from "./components/Card";
import Inputs from "./components/Inputs";
import { useState } from "react";

const App = () => {
  const [userData, setData] = useState([]);

  console.log(userData);
  
  return (
    <div
      className="bg-[#151515] 
      h-screen 
      w-screen
      p-4"
    >
      <Inputs setUserData={setData} />
      <Card userData={userData} />
    </div>
  );
};

export default App;
