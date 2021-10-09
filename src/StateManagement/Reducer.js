// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD__TO__BASKET":
      return {
        ...state,
        basket: [action.payload, ...state.basket],
      };
    case "CLEAR__BASKET":
      return {
          basket:[]
      }
    case "REMOVE__FROM__BASKET":
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.payload),
      };
      
    default:
      return state;
  }
};
