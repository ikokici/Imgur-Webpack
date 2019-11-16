import { combineReducers } from "redux";
import imagesReducer from "./feature-gallery/reducer";
// import core from "./core/reducer";

export default combineReducers({
  images: imagesReducer
  // core: core,
  // authentication: authentication
});
