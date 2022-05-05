import { render as rtlRender, screen } from "@testing-library/react";
import { AppRoutes } from "../app.routes";

const render = (element: JSX.Element, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return rtlRender(element);
};

describe("<AppRoutes />", () => {
  it("Deve renderizar a rota principal", () => {
    render(<AppRoutes />, { route: "/" });

    const titulo = screen.getByTestId("titulo-pagina");

    expect(titulo).toHaveTextContent("ListaComMock");
  });

  it("Deve renderizar a rota do componente lista com api", () => {
    render(<AppRoutes />, { route: "/lista-com-api" });

    const titulo = screen.getByTestId("titulo-pagina");

    expect(titulo).toHaveTextContent("ListaComApi");
  });
});
