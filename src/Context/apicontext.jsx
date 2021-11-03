import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Api from "../Service/Api";

export const ApiContext = createContext({});

export function ApiContextProvider({ children }) {
  const [produtos, setProdutos] = useState([]);
  const [name, setname] = useState("");
  const [produtoAleatorio, setProdutoAleatorio] = useState();
  useEffect(() => {
    Api.get(`products/category/${name}`).then((res) => {
      setProdutos(res.data);
      console.log(res.data);
    });
  }, [name]);

  useEffect(() => {
    Api.get(`https://fakestoreapi.com/products?limit=2`).then((res) => {
      setProdutoAleatorio(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <ApiContext.Provider
      value={{
        produtos,
        setProdutos,
        setname,
        produtoAleatorio,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
