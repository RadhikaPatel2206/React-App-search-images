import React from "react";
import "./ImageList.css";

const ImageList = ({ images }) => {
    const imageList = images.map((image) => {
        return (
            <img key={image.id} src={image.urls.regular} alt="Could not load" />
        );
    });

    return <div className="image-list">{imageList}</div>;
};

export default ImageList;
