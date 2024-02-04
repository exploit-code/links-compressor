import { SQUEEZY_REQUEST, SQUEEZY_SUCCESS, SQUEEZY_ERROR } from "../constants/squeeze";
import {
  ISqueezeRequestAction,
  ISqueezeSuccessAction,
  ISqueezeErrorAction,
  ISqueezeRequestPayload,
  ISqueezeErrorResponse,
} from "../types/squeeze";

export const squeezeRequestAction = (): ISqueezeRequestAction => ({ type: SQUEEZY_REQUEST });
export const squeezeSuccessAction = (target: ISqueezeRequestPayload): ISqueezeSuccessAction => ({
  type: SQUEEZY_SUCCESS,
  payload: target,
});
export const squeezeErrorAction = (detail: ISqueezeErrorResponse): ISqueezeErrorAction => ({
  type: SQUEEZY_ERROR,
  payload: detail,
});
