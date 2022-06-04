import React, { useContext } from "react";
import UserStore from "./UserStore";

interface StoreContextType {
    store: UserStore;
  }
  export const StoreContext = React.createContext<null | StoreContextType>(null);
  
  export const useStoreContext = () => {
    const context = useContext(StoreContext);
    return context as StoreContextType;
  }