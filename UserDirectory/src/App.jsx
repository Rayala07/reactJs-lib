import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/details" element={<UserDetails />} />
    </Routes>
  )
}

export default App;