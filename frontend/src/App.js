import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import Dashboard from "./pages/dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
