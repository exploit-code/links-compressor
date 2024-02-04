import { request } from "../../utils/api";
import { getCookie } from "../../utils/cookies";
import { squeezeErrorAction, squeezeRequestAction, squeezeSuccessAction } from "../actions/squeeze";
import { AppThunk } from "../types";
import { ISqueeze, ISqueezeRequestPayload } from "../types/squeeze";

export const squeezeThunk =
  ({ target }: ISqueezeRequestPayload): AppThunk<Promise<ISqueeze | void>> =>
  (dispatch) => {
    dispatch(squeezeRequestAction());

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
      body: JSON.stringify(""),
    };

    return request(`/api/squeeze?link=${target}`, options)
      .then((res) => {
        dispatch(squeezeSuccessAction(res));
      })
      .catch((err) => {
        dispatch(squeezeErrorAction(err));
      });
  };
