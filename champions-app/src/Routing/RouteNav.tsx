import Login from "../components/login/Login";
import { Route, Routes } from "react-router-dom";
import ChampionGridList from "../components/championGrid/ChampionGridList";
import ChampionWatchList from "../components/championGrid/ChampionWatchList";
import SimpleModal from "../shared/Modal/modal";

const RouteNav = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/ChampionGridList" element={<ChampionGridList />} />
        <Route path="/watchlistPage" element={<ChampionWatchList />} />
        <Route path="/SimpleModal" element={<SimpleModal />} />
      </Routes>
    </>
  );
};

export default RouteNav;
