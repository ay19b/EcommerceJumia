import { createContext, useReducer } from "react";
import MenuReducer from "./menuReducer";
import { useContext } from "react";

const INITIAL_STATE = {
  menu: false,
};

export const MenuContext = createContext(INITIAL_STATE);

export const MenuContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MenuReducer, INITIAL_STATE);

  return (
    <MenuContext.Provider value={{ menu: state.menu, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};


