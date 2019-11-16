import base from "shared-api";
import { GET_IMGUR_GALLERIES } from "../actionTypes";

const api = {
  getImgurGallery: (params, dispatch) =>
    base.get("gallery/user", params, GET_IMGUR_GALLERIES, dispatch)
};

export default api;
