import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Login_Signup from "./pages/Login_Signup";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Login_Signup" element={<Login_Signup />} />
      </Routes>
    </>
  );
}
