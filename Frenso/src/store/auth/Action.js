import axios from "axios";
import { API_BASE_URL } from "../../config/api";

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    dispatch({
      type: "LOGIN_USER_SUCCESS",
      payload: data.jwt,
    });
  } catch (error) {
    console.error("Login failed:", error);

    dispatch({
      type: "LOGIN_USER_FAILURE",
      payload: error.response ? error.response.data : "Login failed",
    });
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    dispatch({
      type: "REGISTER_USER_SUCCESS",
      payload: data.jwt,
    });
  } catch (error) {
    console.error("Registration failed:", error);

    dispatch({
      type: "REGISTER_USER_FAILURE",
      payload: error.response ? error.response.data : "Registration failed",
    });
  }
};

export const getUser = (jwt) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.error("Failed to fetch user profile:", error);

    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response ? error.response.data : "Failed to fetch user profile",
    });
  }
};

