// action.js
export const handleAdd = (payload) => {
    return {
      type: 'ADD',
      payload,
    };
  };
  
  export const handleReduce = (payload) => {
    return {
      type: 'REDUCE',
      payload,
    };
  };
  
  export const handleTheme = (theme) => {
    return {
      type: 'SET_THEME',
      theme,
    };
  };
  