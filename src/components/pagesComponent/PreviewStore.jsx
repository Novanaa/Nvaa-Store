import React from "react";

function PreviewStore(props) {
  return (
    <>
      <div style={{ paddingTop: "10rem" }}>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
}

export default PreviewStore;
