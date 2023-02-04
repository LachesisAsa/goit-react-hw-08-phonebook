export const handlePending = state => {
    return {
      ...state,
      isLoading: true,
    };
  };
  
  export const handleRejected = (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  };
  
  export const handleFulfilled = state => {
    return {
      ...state,
      isLoading: false,
      error: null,
    };
  };
  
  export const fetchContactsFulfilledReducer = (state, action) => {
    return {
      ...state,
      items: action.payload,
    };
  };
  
  export const addContactFulfilledReducer = (state, action) => {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  };
  
  export const deleteContactFulfilledReducer = (state, action) => {
    return {
      ...state,
      items: state.items.filter(({ id }) => id !== action.payload.id),
    };
  };
  
  export const logOutFulfilledReducer = state => {
    return { ...state, items: [], error: null, isLoading: false };
  };