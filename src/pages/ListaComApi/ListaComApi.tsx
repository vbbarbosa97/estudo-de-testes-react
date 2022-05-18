import { useLayoutEffect, useState } from "react";
import { IUsuario } from "../../models/usuario";
import "./ListaComApi.css";
import * as usuarioService from "../../services/usuario.service";

export const ListaComApi = () => {
  const [carregando, setCarregando] = useState<boolean>(false);
  const [lista, setLista] = useState<IUsuario[]>([]);

  const buscarTodosUsuarios = async () => {
    try {
      setCarregando(true);

      const usuarios = await usuarioService.buscarTodosUsuarios();

      setLista(usuarios);
    } catch (error) {
      console.error(error);
    } finally {
      setCarregando(false);
    }
  };

  useLayoutEffect(() => {
    buscarTodosUsuarios();
  }, []);

  return (
    <>
      <h1 data-testid="titulo-pagina">ListaComApi</h1>

      {carregando ? (
        <h1 data-testid="loading">Carregando...</h1>
      ) : (
        <div className="Container" data-testid="container">
          {lista.map((item) => (
            <div key={item.id} className="ContainerUsuario">
              <span data-testid="listitem">{item.name}</span>
              <span>{item.email}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
