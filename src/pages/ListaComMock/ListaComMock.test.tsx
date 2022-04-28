import { fireEvent, render, screen } from "@testing-library/react";
import { ListaComMock } from "./ListaComMock";

describe("<App />", () => {
  it("deve listar 5 elementos dentro da lista", () => {
    render(<ListaComMock />);

    const nomesDaLista = screen.getAllByRole("listitem");
    const inputNome = screen
      .getByPlaceholderText(/nome/i)
      .getAttribute("value");

    expect(nomesDaLista).toHaveLength(5);
    expect(inputNome).toHaveLength(0);
  });

  it("deve listar 6 elementos dentro da lista após click no botão", () => {
    render(<ListaComMock />);

    const botao = screen.getByText(/adicionar/i);

    fireEvent.click(botao);

    const nomesDaLista = screen.getAllByRole("listitem");
    const inputNome = screen
      .getByPlaceholderText(/nome/i)
      .getAttribute("value");

    expect(nomesDaLista).toHaveLength(6);
    expect(inputNome).toHaveLength(0);
  });

  // TODO: testar se o input recebeu o texto
});
