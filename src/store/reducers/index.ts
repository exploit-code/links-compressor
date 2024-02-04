import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { squeezeReducer } from "./squeeze";
import { statisticsReducer } from "./statistics";

export const rootReducer = combineReducers({
  auth: authReducer,
  squeeze: squeezeReducer,
  statistics: statisticsReducer,
});
