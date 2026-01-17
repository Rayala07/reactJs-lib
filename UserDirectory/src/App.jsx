import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;