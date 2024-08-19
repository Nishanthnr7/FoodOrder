import {
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOGIN_REQUEST,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL,
} from "../constants/userConstant";
import axios from "axios";
//LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST }); //we are trying to send data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/v1/users/login`,
      { email, password },
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: "Login Failed",
    });
  }
};

//REGISTER
export const register = (userData) => async (dispatch) => {
  //we are going to post data in api
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const { data } = await axios.post(`/api/v1/users/signup`, userData, config);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.data.user,
    });
    return data.data.user; //useful if the calling function needs this data
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//LOAD USER
export const loadUser = () => async (dispatch) => {
  //here we are not sending any parameters because we dont need to send any data to api
  //we just need to load the db of the user whose given data matches in out db
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(`/api/v1/users/me`);
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Update user
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.put(
      "/api/v1/users/me/update",
      userData,
      config
    );
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//LOGOUT
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/users/logout`);
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//CLEAR ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

//UPDATE PASSWORD
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/v1/users/password/update",
      passwords,
      config
    );

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

//FORGOT PASSWORD
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/users/forgetPassword",
      email,
      config
    );
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

//RESET PASSWORD

export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.patch(
      `/api/v1/users/resetPassword/${token}`,
      passwords,
      config
    );
    dispatch({
      type: NEW_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
