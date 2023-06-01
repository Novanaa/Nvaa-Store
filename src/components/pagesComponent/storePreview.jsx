import React from "react";

function StorePreview(props) {
  return (
    <div>
      <img src={props.image} style={{ width: "10rem" }} />
      <p>{props.title}</p>
    </div>
  );
}

export default StorePreview;
