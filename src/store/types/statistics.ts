import { STATISTICS_REQUEST, STATISTICS_SUCCESS, STATISTICS_ERROR } from "../constants/statistics";
import { ISqueeze } from "../../models";

export interface IStatisticsState {
  statistics: IUpgradeSqueeze[];
  loading: boolean;
  error: boolean;
  statistics_error_detail: string;
}

export interface IUpgradeSqueeze extends ISqueeze {
  uuid: string;
}

export interface IStatisticsErrorResponse {
  detail: string;
}

export interface IStatisticsRequestAction {
  readonly type: typeof STATISTICS_REQUEST;
}

export interface IStatisticsSuccessAction {
  readonly type: typeof STATISTICS_SUCCESS;
  readonly payload: ISqueeze[];
}

export interface IStatisticsErrorAction {
  readonly type: typeof STATISTICS_ERROR;
  readonly payload: IStatisticsErrorResponse;
}

export type TStatisticsUnionAction =
  | IStatisticsRequestAction
  | IStatisticsSuccessAction
  | IStatisticsErrorAction;
