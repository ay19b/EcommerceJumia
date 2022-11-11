const MenuReducer = (state, action) => {
    switch (action.type) {
      case "open": {
        return {
          menu: false,
        };
      }
      case "close": {
        return {
          menu: true,
        };
      }
      case "TOGGLE": {
        return {
          menu: !state.menu,
        };
      }
      default:
        return state;
    }
  };
  
  export default MenuReducer;