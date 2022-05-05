import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListaComApi } from "../pages/ListaComApi/ListaComApi";
import { ListaComMock } from "../pages/ListaComMock/ListaComMock";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaComMock />} />
        <Route path="/lista-com-api" element={<ListaComApi />} />
      </Routes>
    </BrowserRouter>
  );
};
