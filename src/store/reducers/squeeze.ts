import { SQUEEZY_REQUEST, SQUEEZY_SUCCESS, SQUEEZY_ERROR } from "../constants/squeeze";
import { ISqueezeState, TSqueezeUnionActions } from "../types/squeeze";

const initialState: ISqueezeState = {
  squeeze: [],
  loading: false,
  error: false,
  squeeze_error_detail: {
    detail: [
      {
        loc: [],
        msg: "",
        type: "",
      },
    ],
  },
};

export const squeezeReducer = (state = initialState, action: TSqueezeUnionActions) => {
  switch (action.type) {
    case SQUEEZY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SQUEEZY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        squeeze_error_detail: {
          detail: [
            {
              loc: [],
              msg: "",
              type: "",
            },
          ],
        },
        squeeze: [...state.squeeze, action.payload],
      };

    case SQUEEZY_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        squeeze_error_detail: { ...action.payload },
      };

    default:
      return state;
  }
};
