function Service() {
  //get getchampionsgridList
  const getchampionsgridList = () => {
    return fetch(
      "https://api.pandascore.co/lol/champions?page[number]=2&page[size]=10&token=" +
        process.env.REACT_APP_TOKEN
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
      });
  };
  const getChampionsGridSearch = (searchValue: any) => {
    return fetch(
      "https://api.pandascore.co/lol/champions?search[name]=" +
        searchValue +
        "&token=" +
        process.env.REACT_APP_TOKEN
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
      });
  };
  return { getchampionsgridList, getChampionsGridSearch };
}

const championsServices = Service();
export default championsServices;
