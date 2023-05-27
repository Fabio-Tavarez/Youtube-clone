import axios from "axios";

async function handleFetchData(data) {
  try {
    let resource = data.resource ? data.resource : "";

    let configObj = {
      url: process.env.REACT_APP_API_URL + resource + REACT_APP_API_KEY,
      ...data,
    };
    let result = await axios(configObj);

    return result;
  } catch (error) {
    console.log(error);
  }
}

export default handleFetchData;
