import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Testing from "./components/testing";
import { HomePage } from "./pages/homepage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop/hats" element={<Testing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
