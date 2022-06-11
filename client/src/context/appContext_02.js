import React, { useReducer, useContext } from 'react';
import reducer_02 from './reducer_02';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './action_02';
import axios from 'axios';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: '',
  token: '',
  location: '',
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
  const axiosRegister = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth_02/register_02",
        currentUser
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const axiosLogin = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth_02/login_02",
        currentUser
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const registerUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const data = await axiosRegister({
        currentUser,
        endPoint,
        alertText,
      });

      console.log("register data", data);
      const { user, token, location } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
    } catch (error) {
      console.log(error.response);

      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const loginUser = async ({ currentUser, endPoint, alertText }) => {
    // dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const data = await axiosLogin({
        currentUser,
        endPoint,
        alertText,
      });

      console.log("login data", data);
      const { user, token, location } = data;
      console.log(user, token, location);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  return (
    <AppContext_02.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext_02.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_02);
};

export { AppProvider_02, initialState, useAppContext };
