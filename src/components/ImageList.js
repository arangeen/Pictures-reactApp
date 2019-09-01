import React from "react";

const ImageList = props => {
  //console.log(props.images);
  //urls & regular comes from each photo property shown in the console
  const images = props.images.map(image => {
    return <img src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
