import React, { createContext, useReducer} from "react";
import Reducer from "./Reducer.js";

let initialState = {
  basket: [],
};

export const Context = createContext(initialState);

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addtoBasket = (product) => {
    dispatch({ type: "ADD__TO__BASKET", payload: product });
  };
  const clearBasket = (product) => {
    dispatch({ type: "CLEAR__BASKET", payload: product });
  };
  const removefromBasket = (id) => {
    dispatch({ type: "REMOVE__FROM__BASKET", payload: id });
  };

 

  return (
    <Context.Provider
      value={{
        basket: state.basket,
        addtoBasket: addtoBasket,
        clearBasket: clearBasket,
        removefromBasket: removefromBasket,
        
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
