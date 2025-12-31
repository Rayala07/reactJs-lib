import { useState } from "react";
import AddUser from "./components/AddUser";
import Card from "./components/Card";
import Search from "./components/Search";

const App = () => {
  const localData = JSON.parse(localStorage.getItem("user-data")) || [];

  const [userData, setData] = useState(localData);

  const [searchText, setSearchText] = useState("");

  const filteredUser = userData.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.userRole.toLowerCase().includes(searchText.toLowerCase())
  );

  const deleteHandler = (idx) => {
    setData((oldData) => {
      const updatedData = oldData.filter((_, i) => i !== idx);
      localStorage.setItem("user-data", JSON.stringify(updatedData));
      return updatedData;
    });
  };
  return (
    <div className="min-h-screen bg-[#0e0e0e] p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <AddUser setData={setData} />
        </div>
        <div className="md:col-span-2">
          <Search text={searchText} setText={setSearchText} />
          <Card userData={filteredUser} runDelete={deleteHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
