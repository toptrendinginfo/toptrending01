import React from "react";

const Card03 = (props) => {
  return (
    <>
      <div className="col-md-2  mt-4">
        <iframe
          height="240"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="1"
          src={props.url}
        />

        <button href="#" className="btn btn-primary p-1">
          Review & Rating
        </button>
      </div>
    </>
  );
};

export default Card03;
