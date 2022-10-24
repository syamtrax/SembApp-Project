import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Daftar from "./pages/daftar";
import Dashboard from "./pages/dashboard.js";
import Login from "./pages/login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/daftar" element={<Daftar />} />
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
