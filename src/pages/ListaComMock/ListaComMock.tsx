import { cloneDeep } from "lodash";
import { useCallback, useState } from "react";
import { IUsuario } from "../../models/usuario";
import { listaFake } from "../../utils/mock";
import "./ListaComMock.css";

export const ListaComMock = () => {
  const [texto, setTexto] = useState<string>("");
  const [lista, setLista] = useState<IUsuario[]>(listaFake);

  const adicionarElemento = useCallback(() => {
    const listaCopy = cloneDeep(lista);

    const novoElemento: IUsuario = {
      id: "teste123",
      email: "teste@teste",
      name: "teste",
    };

    listaCopy.push(novoElemento);

    setLista(listaCopy);
  }, [lista]);

  return (
    <>
      <input
        placeholder="nome"
        className="CampoDeTexto"
        type="text"
        value={texto}
        onChange={(event) => setTexto(event.currentTarget.value)}
      />
      <div className="Container">
        {lista.map((item) => (
          <div key={item.id} className="ContainerUsuario">
            <span role="listitem">{item.name}</span>
            <span>{item.email}</span>
          </div>
        ))}
        <button onClick={adicionarElemento}>Adicionar</button>
      </div>
    </>
  );
};
