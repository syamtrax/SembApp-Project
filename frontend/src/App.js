import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Daftar from "./pages/daftar";
import Dashboard from "./pages/dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
