import axios from "axios";
import { IResult } from "../models/result";
import { IUsuario } from "../models/usuario";
import { url_marvel_api } from "../utils/constants";

export const buscarTodosUsuarios = async () => {
  try {
    const url = `${url_marvel_api}/api/user/`;

    const { data: respostaAxios } = await axios.get<IResult<IUsuario[]>>(url);

    return respostaAxios.data;
  } catch (error) {
    throw error;
  }
};
