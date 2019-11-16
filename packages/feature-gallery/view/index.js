import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../api";
import { totalImages } from "../selectors";
import { Page } from "shared-components";
import { GridGallery, ImageDiv } from "./styles";

const { getImgurGallery } = api;

// const mapToDispatch = (api, dispatch) => {
//   let result = {};
//   Object.keys(api).map(methodName => {
//     result[methodName] = data => {
//       api[methodName](data, dispatch);
//     };
//   });
//   return result;
// };

const ImgurGallery = props => {
  const { getImgurGallery, images } = props;
  useEffect(() => {
    getImgurGallery();
  }, []);
  return (
    <Page>
      <Page.Content>
        <Page.Title>Imgur Gallery</Page.Title>
        <GridGallery>
          {images.map(image => (
            <div>
              <ImageDiv key={image.id} src={image.link} />
              <div>{image.title}</div>
            </div>
          ))}
        </GridGallery>
      </Page.Content>
    </Page>
  );
};

const mapStateToProps = state => {
  return {
    images: totalImages(state.images)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getImgurGallery: () => getImgurGallery({}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgurGallery);
