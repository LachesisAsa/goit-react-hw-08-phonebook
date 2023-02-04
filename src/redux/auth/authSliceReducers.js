export const reducerPending = state => {
    return { ...state, isLoading: true };
  };
  
  export const reducerRejected = (state, action) => {
    return { ...state, isLoading: false, error: action.payload };
  };
  
  export const registerFulfilledReducer = (state, action) => {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      isLoggedIn: true,
    };
  };
  
  export const logInFulfilledReducer = (state, action) => {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      isLoggedIn: true,
    };
  };
  
  export const logOutFulfilledReducer = state => {
    return {
      ...state,
      user: { name: null, email: null },
      token: null,
      isLoading: false,
      isLoggedIn: false,
    };
  };
  
  export const refreshUserPendingReducer = state => {
    return { ...state, isRefreshing: true };
  };
  
  export const refreshUserFulfilledReducer = (state, action) => {
    return {
      ...state,
      user: action.payload,
      isLoggedIn: true,
      isRefreshing: false,
    };
  };
  
  export const refreshUserRejectedReducer = state => {
    return { ...state, isRefreshing: false };
  };