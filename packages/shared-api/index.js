import { getQs, getUrl } from "./utils";
import axios from "axios";

const defaultHeaders = () => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Client-ID 98b4249ba52e826"
  };

  return headers;
};

const successHandler = (response, dispatch, actions) => {
  if (response.data.success) {
    dispatch({ type: actions.success, payload: response.data.data });
  }
};

const api = {
  get: (url, params = {}, actions, dispatch) => {
    dispatch({ type: actions.request });
    return axios({
      url: getUrl(url) + getQs(params),
      headers: defaultHeaders()
    })
      .then(function(response) {
        successHandler(response, dispatch, actions);
      })
      .catch(function(error) {
        <div>Error!!</div>;
      });
  }
};

export default api;
