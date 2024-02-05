import { request } from "../../utils/api";
import { getCookie } from "../../utils/cookies";
import {
  statisticsErrorAction,
  statisticsRequestAction,
  statisticsSuccessAction,
} from "../actions/statistics";
import { AppThunk } from "../types";
import { ISortStatisticsProps, ISqueeze } from "../../models";

export const statisticsThunk =
  (
    page: number = 1,
    limit: number = 5,
    order: ISortStatisticsProps
  ): AppThunk<Promise<ISqueeze[] | void>> =>
  (dispatch) => {
    dispatch(statisticsRequestAction());

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
    };

    const queryString = `?order=${order.short}_short&order=${order.target}_target&order=${
      order.counter
    }_counter&offset=${(page - 1) * limit}&limit=${limit}`;

    return request(`/api/statistics${queryString}`, options)
      .then((res) => {
        dispatch(statisticsSuccessAction(res));
      })
      .catch((err) => {
        dispatch(statisticsErrorAction(err));
      });
  };
