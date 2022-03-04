import { ActionTypes } from "../../constants/constant";

const initialdata: any = [];

export const ChampionsReducer = (state = initialdata, action: any) => {
  switch (action.type) {
    case ActionTypes.Get_ChampionsGridList:
      return { ...state, champions: action.payload };
    case ActionTypes.Delete_ChampionsListData:
      return {
        ...state,
        champions: state.champions.filter(
          (row: any) => row.id !== action.payload
        ),
      };
    case ActionTypes.Search_ChampionsListData:
      return { ...state, champions: action.payload };
 
    default:
      return state;
  }
};
