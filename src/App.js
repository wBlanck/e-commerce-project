import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { HomePage } from "./pages/homepage/HomePage";
import Shop from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
