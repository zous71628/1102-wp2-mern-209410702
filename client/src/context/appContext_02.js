import React, { useReducer, useContext } from 'react';
import reducer_02 from './reducer_02';
import { CLEAR_ALERT, DISPLAY_ALERT } from './action_02';
import axios from 'axios';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};
const AppContext_02 = React.createContext();

const AppProvider_02 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_02, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const registerUser = async ({ currentUser, endPoint, alertText }) => {
    console.log(endPoint);
    console.log(currentUser);
    await axios.post(`http://localhost:5000/api/v1/auth_02/register_02`, currentUser);
  };
  return (
    <AppContext_02.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser }}
    >
      {children}
    </AppContext_02.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_02);
};

export { AppProvider_02, initialState, useAppContext };
