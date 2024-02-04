import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../index";
import { TAuthUnionActions } from "./auth";
import { TSqueezeUnionActions } from "./squeeze";
import { TStatisticsUnionAction } from "./statistics";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TAuthUnionActions | TSqueezeUnionActions | TStatisticsUnionAction;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
