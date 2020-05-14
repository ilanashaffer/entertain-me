import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const Favorites = (props) => {
  const getDetails = () => {
    console.log("FAVORITE SELECTED");
  };

  return (
    <>
      <h6>{props.heading}</h6>
      <Collection>
        <CollectionItem onClick={getDetails}>
          FAVORITE 1<span className="material-icons remove">remove_circle</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>FAVORITE 2<span className="material-icons remove">remove_circle</span></CollectionItem>
        <CollectionItem onClick={getDetails}>FAVORITE 3<span className="material-icons remove">remove_circle</span></CollectionItem>
        <CollectionItem onClick={getDetails}>FAVORITE 4<span className="material-icons remove">remove_circle</span></CollectionItem>
        <CollectionItem onClick={getDetails}>FAVORITE 5<span className="material-icons remove">remove_circle</span></CollectionItem>
      </Collection>
    </>
  );
};

export default Favorites;
