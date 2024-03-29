import { deleteCookie } from "../../utils/cookies";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/auth";
import { IAuthState, TAuthUnionActions } from "../types/auth";

const initialState: IAuthState = {
  authorized: false,
  loading: false,
  error: false,
  signup: false,
  signup_error_detail: "",
  login_error_detail: "",
  access_token: "",
};

export const authReducer = (state = initialState, action: TAuthUnionActions) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authorized: true,
        error: false,
        login_error_detail: "",
        signup_error_detail: "",
        access_token: action.payload.access_token,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        login_error_detail: action.payload.detail,
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: false,
        login_error_detail: "",
        signup_error_detail: "",
        loading: false,
        signup: true,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        signup_error_detail: action.payload.detail,
      };

    case LOGOUT:
      deleteCookie("access_token");
      return {
        ...state,
        authorized: false,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};
