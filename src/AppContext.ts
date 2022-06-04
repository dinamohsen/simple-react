import React, { useContext } from "react";

import AppStore from "./stores/AppStore";
import TestStore from "./stores/UserStore";

 interface StoreContextType {
     store:AppStore;
 }
const AppContext = React.createContext<null | StoreContextType>(null);

export const useStoreContext = () =>{
    const context  = useContext(AppContext);
    return context as StoreContextType;
}
export default AppContext; 