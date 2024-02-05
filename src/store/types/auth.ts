import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/auth";

export interface IAuthState {
  readonly authorized: boolean;
  readonly signup: boolean;
  readonly loading: boolean;
  readonly error: boolean;
  readonly login_error_detail: string;
  readonly signup_error_detail: string;
  readonly access_token: string;
}

export interface IAuthRequestPayload {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  token_type: string;
}

export interface ILoginErrorResponse {
  detail: string;
}

export interface ISignupResponse {
  username: string;
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: ILoginResponse;
}

export interface ILoginErrorAction {
  readonly type: typeof LOGIN_ERROR;
  readonly payload: ILoginErrorResponse;
}

export interface ISignupRequestAction {
  readonly type: typeof SIGNUP_REQUEST;
}

export interface ISignupSuccessAction {
  readonly type: typeof SIGNUP_SUCCESS;
  readonly payload: string;
}

export interface ISignupErrorAction {
  readonly type: typeof SIGNUP_ERROR;
  readonly payload: ILoginErrorResponse;
}

export type TAuthUnionActions =
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginErrorAction
  | ISignupRequestAction
  | ISignupSuccessAction
  | ISignupErrorAction;
