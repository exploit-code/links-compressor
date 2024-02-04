import { request } from "../../utils/api";
import { getCookie } from "../../utils/cookies";
import {
  statisticsErrorAction,
  statisticsRequestAction,
  statisticsSuccessAction,
} from "../actions/statistics";
import { AppThunk } from "../types";
import { ISqueeze } from "../types/squeeze";

export const statisticsThunk = (): AppThunk<Promise<ISqueeze[] | void>> => (dispatch) => {
  dispatch(statisticsRequestAction());

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${getCookie("access_token")}`,
    },
  };

  return request(
    `/api/statistics?order=asc_short&order=asc_target&order=asc_counter&offset=0&limit=5`,
    options
  )
    .then((res) => {
      dispatch(statisticsSuccessAction(res));
    })
    .catch((err) => {
      dispatch(statisticsErrorAction(err));
    });
};
