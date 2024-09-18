
const initialState = {
    counter: 0,
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          counter: state.counter + action.payload,
        };
      case 'REDUCE':
        return {
          ...state,
          counter: state.counter - action.payload,
        };
      default:
        return state;
    }
  };
  
  