import { combineReducers } from "redux";
import { ChampionsReducer } from "./ChampionsReducer";
import { WatchListReducer } from "./WatchListReducer";

const rootReducer = combineReducers({
  allChampions: ChampionsReducer,
  watchListChampions: WatchListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
