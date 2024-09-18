
const initialTheme = {
    theme: 'light',
  };
  
  export const themeReducer = (state = initialTheme, action) => {
    switch (action.type) {
      case 'SET_THEME':
        return {
          ...state,
          theme: action.theme,
        };
      default:
        return state;
    }
  };
  