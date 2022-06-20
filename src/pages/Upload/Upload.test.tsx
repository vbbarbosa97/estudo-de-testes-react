import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Upload } from "./Upload";

describe("<Upload />", () => {
  it("deve inserir arquivo no input", () => {
    render(<Upload />);
    const input = screen.getByTestId("input-upload");

    const file = new File(["(⌐□_□)"], "chucknorris.png", {
      type: "image/png",
    });

    userEvent.upload(input, file);

    const nome = screen.getByTestId("nome-arquivo");

    expect(nome).toHaveTextContent("chucknorris.png");
  });
});
