import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListCep from "./pages/ListCep";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cep" element={<ListCep />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
