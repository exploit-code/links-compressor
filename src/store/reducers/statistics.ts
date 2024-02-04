import { v4 as uuidv4 } from "uuid";
import { STATISTICS_REQUEST, STATISTICS_SUCCESS, STATISTICS_ERROR } from "../constants/statistics";
import { IStatisticsState, TStatisticsUnionAction } from "../types/statistics";

const initialState: IStatisticsState = {
  statistics: [],
  loading: false,
  error: false,
  statistics_error_detail: "",
};

export const statisticsReducer = (state = initialState, action: TStatisticsUnionAction) => {
  switch (action.type) {
    case STATISTICS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case STATISTICS_SUCCESS:
      const upgradeStatistics = action.payload.map((item) => ({
        ...item,
        uuid: uuidv4(),
      }));

      return {
        ...state,
        loading: false,
        statistics: [...upgradeStatistics],
        error: false,
        statistics_error_detail: "",
      };

    case STATISTICS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        statistics_error_detail: action.payload.detail,
      };

    default:
      return state;
  }
};
