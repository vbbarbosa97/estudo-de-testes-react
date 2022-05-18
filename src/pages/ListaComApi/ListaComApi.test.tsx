import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { url_marvel_api } from "../../utils/constants";
import { listaFake } from "../../utils/mock";
import { ListaComApi } from "./ListaComApi";

describe("<ListaComApi />", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("deve listar 5 elementos dentro da lista", async () => {
    const url = `${url_marvel_api}/api/user/`;

    mock.onGet(url).reply(200, listaFake);

    render(<ListaComApi />);
    
    //todo: pesquisar como realizar testes
    const nomesDaLista = screen.getAllByTestId("listitem");

    expect(nomesDaLista).toHaveLength(5);
  });
});
