import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const ProductContext = createContext();
const UserContext = createContext();

export function useDataContext() {
  return useContext(ProductContext);
}

export default function DataContext({ children }) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts, users, setUsers }}>
      {children}
    </ProductContext.Provider>
  );
}
