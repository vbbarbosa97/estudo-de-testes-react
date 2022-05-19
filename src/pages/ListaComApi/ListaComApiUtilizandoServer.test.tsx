/* eslint-disable testing-library/prefer-query-by-disappearance */
/* eslint-disable testing-library/no-render-in-setup */
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { url_marvel_api } from "../../utils/constants";
import { listaFake } from "../../utils/mock";
import { ListaComApi } from "./ListaComApi";

const url = `${url_marvel_api}/api/user/`;

const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("<ListaComApi /> {Utilizando Server do msw}", () => {
  beforeEach(() => {
    server.use(
      rest.get(url, (req, res, ctx) => {
        return res(
          ctx.json({
            data: listaFake,
            message: "",
            success: true,
          })
        );
      })
    );
  });

  describe("deve listar 5 elementos dentro da lista", () => {
    beforeEach(async () => {
      render(<ListaComApi />);
      await waitForElementToBeRemoved(() => screen.getByText("Carregando..."));
    });

    it("espera os 5 elementos na tela", () => {
      const nomesDaLista = screen.getAllByTestId("listitem");

      const primeiroNomeDaLista = nomesDaLista[0];

      expect(nomesDaLista).toHaveLength(5);
      expect(primeiroNomeDaLista).toHaveTextContent("Vinicius");
    });
  });
});
