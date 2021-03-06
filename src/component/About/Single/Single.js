import React from "react";

const Single = (props) => {
  const { name, image, degisnation } = props.doc;
  return (
    <div className="card col-lg-12 col-md-12 mb-lg-0 mb-5">
      <div className="avatar mx-auto">
        <img
          src={image}
          className="rounded-circle z-depth-1"
          alt="Sample avatar"
        />
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">{name}</h5>
      <p className="text-uppercase blue-text">
        <strong>{degisnation}</strong>
      </p>
    </div>
  );
};

export default Single;
