import { STATISTICS_REQUEST, STATISTICS_SUCCESS, STATISTICS_ERROR } from "../constants/statistics";
import { ISqueeze } from "../../models";
import {
  IStatisticsRequestAction,
  IStatisticsSuccessAction,
  IStatisticsErrorAction,
  IStatisticsErrorResponse,
} from "../types/statistics";

export const statisticsRequestAction = (): IStatisticsRequestAction => ({
  type: STATISTICS_REQUEST,
});
export const statisticsSuccessAction = (statistics: ISqueeze[]): IStatisticsSuccessAction => ({
  type: STATISTICS_SUCCESS,
  payload: statistics,
});
export const statisticsErrorAction = (
  detail: IStatisticsErrorResponse
): IStatisticsErrorAction => ({ type: STATISTICS_ERROR, payload: detail });
