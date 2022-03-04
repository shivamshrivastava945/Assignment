import { ActionTypes } from "../../constants/constant";

// const initialdata ={
//      watchList: []
// };

export const WatchListReducer = (state = [], action: any) => {
  switch (action.type) {
    case ActionTypes.Add_ChampionsData:
      //   return{ ...state, watchList: [...state , {...action.payload}]};
      // Second way to return
      return [...state, { watchList: action.payload }];
    case ActionTypes.Remove_ChampionsData:
      state.pop();
      return [...state];

    default:
      return state;
  }
};
