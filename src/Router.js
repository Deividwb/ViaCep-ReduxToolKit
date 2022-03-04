import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ListCep from "./pages/ListCep";

const Router = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListCep />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
