import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/auth";
import {
  ILoginRequestAction,
  ILoginSuccessAction,
  ILoginErrorAction,
  ILoginResponse,
  ISignupErrorAction,
  ISignupRequestAction,
  ISignupSuccessAction,
  ILoginErrorResponse,
} from "../types/auth";

export const loginRequestAction = (): ILoginRequestAction => ({
  type: LOGIN_REQUEST,
});

export const loginSuccessAction = (user: ILoginResponse): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginErrorAction = (detail: ILoginErrorResponse): ILoginErrorAction => ({
  type: LOGIN_ERROR,
  payload: detail,
});

export const signupRequestAction = (): ISignupRequestAction => ({
  type: SIGNUP_REQUEST,
});

export const signupSuccessAction = (user: string): ISignupSuccessAction => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupErrorAction = (detail: ILoginErrorResponse): ISignupErrorAction => ({
  type: SIGNUP_ERROR,
  payload: detail,
});
