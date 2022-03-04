import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../Services/Reducers/Index";
import SimpleModal from "../../shared/Modal/modal";
import "./Champion.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { RemoveChampionsWatchList } from "../../Services/Actions/ChampionsActions";

const ChampionWatchList = () => {
  const watchList = useSelector((store: RootState) => store.watchListChampions);
  var result = Object.entries(watchList);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <>
      <Stack flex-direction="vertical" gap={2} className="mb-4">
        <h4 className="ps-2 mb-0 fw-bold pt-1">Watch List</h4>
      </Stack>
      {result.length != 0
        ? result.map((res: any) => {
            return (
              <>
           
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <img src={res[1].watchList.big_image_url}></img>
                      </Avatar>
                    </ListItemAvatar>
                 
                    <ListItemText
                      className="hand"
                      primary={res[1].watchList.name}
                      secondary={
                        "VideoGame-Version :" +
                        res[1].watchList.videogame_versions
                      }
                      onClick={() =>
                        navigate("/SimpleModal", {
                          state: JSON.stringify(res[1].watchList),
                        })
                      }
                    />
                       <IconButton edge="end" aria-label="delete" onClick={() => dispatch(RemoveChampionsWatchList(res[1].watchList))}>
                      <DeleteIcon />
                    </IconButton>
                    
                  </ListItem>
                  
                </List>
              </>
            );
          })
        : "Nothing Is Selected Yet !!!!!!!"}
    </>
  );
};

export default ChampionWatchList;
