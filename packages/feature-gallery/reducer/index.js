import { GET_IMGUR_GALLERIES } from "../actionTypes";

const initialState = {
  images: [],
  busy: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMGUR_GALLERIES.request:
      return { ...state, busy: true };
    case GET_IMGUR_GALLERIES.success:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};
