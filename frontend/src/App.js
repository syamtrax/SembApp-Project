import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Daftar from "./pages/daftar";
import Dashboard from "./pages/dashboard.js";
import Login from "./pages/login.js";
import Produk from "./pages/produk.js";
import Dokumen from "./pages/dokumen.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/dokumen" element={<Dokumen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
