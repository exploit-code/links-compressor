import { SQUEEZY_REQUEST, SQUEEZY_SUCCESS, SQUEEZY_ERROR } from "../constants/squeeze";

export interface ISqueeze {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export interface ISqueezeState {
  squeeze: ISqueeze[];
  loading: boolean;
  error: boolean;
  squeeze_error_detail: string;
}

export interface ISqueezeRequestPayload {
  target: string;
}

export interface ISqueezeErrorResponse {
  detail: string;
}

export interface ISqueezeRequestAction {
  readonly type: typeof SQUEEZY_REQUEST;
}

export interface ISqueezeSuccessAction {
  readonly type: typeof SQUEEZY_SUCCESS;
  readonly payload: ISqueezeRequestPayload;
}

export interface ISqueezeErrorAction {
  readonly type: typeof SQUEEZY_ERROR;
  readonly payload: ISqueezeErrorResponse;
}

export type TSqueezeUnionActions =
  | ISqueezeRequestAction
  | ISqueezeSuccessAction
  | ISqueezeErrorAction;
