/* eslint-disable testing-library/prefer-query-by-disappearance */
/* eslint-disable testing-library/no-render-in-setup */
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import axios from "axios";
import { listaFake } from "../../utils/mock";
import { ListaComApi } from "./ListaComApi";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);
const mockedAxiosGet = jest.mocked(mockedAxios.get);

describe("<ListaComApi /> {Utilizando mock do jest}", () => {
  beforeEach(() => {
    mockedAxiosGet.mockResolvedValue({
      data: {
        data: listaFake,
        message: "",
        success: true,
      },
    });
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
