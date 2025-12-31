import { useState } from "react";

const AddUser = ({ setData }) => {
  const [uName, setName] = useState("");
  const [uRole, setRole] = useState("");
  const [uCompany, setCompany] = useState("");
  const [uCity, setCity] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const roleHandler = (e) => {
    setRole(e.target.value);
  };
  const companyHandler = (e) => {
    setCompany(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      userName: uName,
      userRole: uRole,
      userCompany: uCompany,
      userCity: uCity,
    };
    setData((prevData) => {
      const updatedData = [...prevData, newUser];
      localStorage.setItem("user-data", JSON.stringify(updatedData));
      return updatedData;
    });

    setName("");
    setRole("");
    setCompany("");
    setCity("");
  };
  return (
    <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-6">
      <h2 className="text-white text-xl font-semibold mb-6">Add User</h2>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-3">
          <input
            className="w-full bg-black border border-[#333] text-white p-3 rounded-lg focus:outline-none focus:border-indigo-500"
            type="text"
            placeholder="Name"
            value={uName}
            onChange={nameHandler}
          />
          <input
            className="w-full bg-black border border-[#333] text-white p-3 rounded-lg focus:outline-none focus:border-indigo-500"
            type="text"
            placeholder="Role"
            value={uRole}
            onChange={roleHandler}
          />
          <input
            className="w-full bg-black border border-[#333] text-white p-3 rounded-lg focus:outline-none focus:border-indigo-500"
            type="text"
            placeholder="Company"
            value={uCompany}
            onChange={companyHandler}
          />
          <input
            className="w-full bg-black border border-[#333] text-white p-3 rounded-lg focus:outline-none focus:border-indigo-500"
            type="text"
            placeholder="City"
            value={uCity}
            onChange={cityHandler}
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-500 transition text-white p-2
          px-5 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
