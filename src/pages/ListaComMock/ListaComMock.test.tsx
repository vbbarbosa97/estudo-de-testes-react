import { fireEvent, render, screen } from "@testing-library/react";
import { ListaComMock } from "./ListaComMock";

describe("<ListaComMock />", () => {
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

  it("deve adicionar texto ao input", () => {
    render(<ListaComMock />);

    const inputAnterior = screen.getByPlaceholderText(/nome/i);

    const valorDoInputAntesDaAlteracao = inputAnterior.getAttribute("value");

    expect(valorDoInputAntesDaAlteracao).toHaveLength(0);

    fireEvent.change(inputAnterior, { target: { value: "teste" } });

    const valorDoInputAtualizado = screen
      .getByPlaceholderText(/nome/i)
      .getAttribute("value");

    expect(valorDoInputAtualizado).toBe("teste");
  });

  it("deve aplicar estilos", () => {
    render(<ListaComMock />);

    const container = screen.getByTestId("container");
    const inputNome = screen.getByPlaceholderText(/nome/i);

    expect(container).toHaveStyle({ margin: 16 });
    expect(inputNome).toHaveStyle({ margin: 16 });
  });
});
