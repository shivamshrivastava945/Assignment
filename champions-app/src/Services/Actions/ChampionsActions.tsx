import { ActionTypes } from "../../constants/constant"

export const GetChampionsList = (data:any) => {
  
  return (
    {
        type : ActionTypes.Get_ChampionsGridList,
        payload: data
    }
  )
}

export const DeleteChampionsListData = (id:any) => {
  
  return (
    {
        type : ActionTypes.Delete_ChampionsListData,
        payload: id
    }
  )
}
export const GetSearchChampionsList = (data:any) => {
  
  return (
    {
        type : ActionTypes.Search_ChampionsListData,
        payload: data
    }
  )
}
export const AddChampionsWatchList = (Rowdata:any) => {
  
  return (
    {
        type : ActionTypes.Add_ChampionsData,
        payload: Rowdata
    }
  )
}
export const RemoveChampionsWatchList = (Rowdata:any) => {
  debugger;
  return (
    {
        type : ActionTypes.Remove_ChampionsData,
        payload: Rowdata
    }
  )
}




