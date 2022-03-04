import { Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddChampionsWatchList,
  DeleteChampionsListData,
  GetChampionsList,
  GetSearchChampionsList,
  RemoveChampionsWatchList,
} from "../../Services/Actions/ChampionsActions";
import championsServices from "../../Services/ChampionsServices/ChampionsServices";
import { RootState } from "../../Services/Reducers/Index";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Stack } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "./Champion.scss";
import { height } from "@mui/system";
const ChampionGridList = () => {
  //current state value
  const championsList = useSelector((state: RootState) => {
    return state.allChampions.champions;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    championsServices.getchampionsgridList().then((result) => {
      dispatch(GetChampionsList(result));
    });
  }, []);

  // const deleteRow = React.useCallback(
  //   (id) => () => {
  //     setTimeout(() => {
  //       dispatch(DeleteChampionsListData(id));
  //     });
  //   },
  //   []
  // );

  // const RemoveToWatchList =
  // React.useCallback(
  //   (param) => () => {
  //     setTimeout(() => {
  //       dispatch(RemoveChampionsWatchList(param));
  //     });
  //   },
  //   []
  // );
  //   const RemoveToWatchList = (param:any) => {
  //     return(
  //         dispatch(RemoveChampionsWatchList(param))
  //     )
  //   }
  //   const AddToWatchList = (param:any) => {
  //     return(
  //     dispatch(AddChampionsWatchList(param))
  //     )
  // }

  // const AddToWatchList = React.useCallback(
  //   (param) => () => {
  //     setTimeout(() => {
  //       dispatch(AddChampionsWatchList(param));
  //     });
  //   },
  //   []
  // );

  const handleSearch = (e: any) => {
    console.log(e.target.value);
    let value = e.target.value;
    championsServices.getChampionsGridSearch(value).then((result) => {
      dispatch(GetSearchChampionsList(result));
    });
  };

  const columns = React.useMemo(
    () => [
      { field: "name", headerName: "Name", width: 150 },
      { field: "armor", headerName: "Armor", width: 150 },
      { field: "armorperlevel", headerName: "Armorperlevel", width: 150 },
      { field: "attackdamage", headerName: "Attackdamage", width: 150 },
      {
        field: "attackdamageperlevel",
        headerName: "Attackdamageperlevel",
        width: 150,
      },
      { field: "attackrange", headerName: "Attackrange", width: 150 },
      {
        field: "attackspeedoffset",
        headerName: "Attackspeedoffset",
        width: 150,
      },
      {
        field: "attackspeedperlevel",
        headerName: "Attackspeedperlevel",
        width: 150,
      },
      { field: "crit", headerName: "Crit", width: 150 },
      { field: "critperlevel", headerName: "Critperlevel", width: 150 },
      { field: "hp", headerName: "HP", width: 150 },
      { field: "hpperlevel", headerName: "HPperlevel", width: 150 },
      { field: "hpregen", headerName: "HPregen", width: 150 },
      { field: "hpregenperlevel", headerName: "HPregenperlevel", width: 150 },
      { field: "movespeed", headerName: "Movespeed", width: 150 },
      { field: "mp", headerName: "MP", width: 150 },
      { field: "mpperlevel", headerName: "MPperlevel", width: 150 },
      { field: "mpregen", headerName: "MPregen", width: 150 },
      { field: "mpregenperlevel", headerName: "MPregenperlevel", width: 150 },
      { field: "spellblock", headerName: "Spellblock", width: 150 },
      {
        field: "spellblockperlevel",
        headerName: "Spellblockperlevel",
        width: 150,
      },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params: any) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => dispatch(RemoveChampionsWatchList(params.row))}
          />,
          <GridActionsCellItem
            icon={<AddIcon />}
            label="Add"
            onClick={() => dispatch(AddChampionsWatchList(params.row))}
          />,
        ],
      },
    ],
    []
  );

  return (
    <>
      <Box sx={{ width: "100%"}}>
        <Stack direction="vertical" gap={2} className="mb-4">
          <h4 className="ps-2 mb-0 fw-bold pt-1">Champions List</h4>
        </Stack>
      
        <TextField
          hiddenLabel
          className="mb-2"
          id="filled-hidden-label-normal"
          placeholder="Search..."
          variant="outlined"
          onChange={handleSearch}
          fullWidth
        />
        &nbsp;
       
        <div style={{ height: 500, width: "150%" }}>
          <DataGrid
            rows={championsList}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </Box>
    </>
  );
};

export default ChampionGridList;
