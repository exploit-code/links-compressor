import { request } from "../../utils/api";
import { setCookie } from "../../utils/cookies";
import {
  loginErrorAction,
  loginRequestAction,
  loginSuccessAction,
  signupErrorAction,
  signupRequestAction,
  signupSuccessAction,
} from "../actions/auth";
import { AppThunk } from "../types";
import { IAuthRequestPayload, ILoginResponse, ISignupResponse } from "../types/auth";

export const loginThunk =
  ({ username, password }: IAuthRequestPayload): AppThunk<Promise<ILoginResponse | void>> =>
  (dispatch) => {
    dispatch(loginRequestAction());

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    return request("/api/login", options)
      .then((res) => {
        setCookie("access_token", res.access_token, { expires: 24 * 60 * 60 });
        dispatch(loginSuccessAction(res));
      })
      .catch((err) => {
        dispatch(loginErrorAction(err));
      });
  };

export const signupThunk =
  ({ username, password }: IAuthRequestPayload): AppThunk<Promise<ISignupResponse | void>> =>
  (dispatch) => {
    dispatch(signupRequestAction());

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        accept: "application/json",
      },
    };

    return request(`/api/register?username=${username}&password=${password}`, options)
      .then((res) => {
        dispatch(signupSuccessAction(res));
      })
      .catch((err) => {
        dispatch(signupErrorAction(err));
      });
  };
