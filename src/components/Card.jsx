import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <a
              href={props.siteLink}
              target="_blank"
              className="btn btn-danger mx-3"
            >
              Visit Site
            </a>
            <a
              href={props.sourceCode}
              target="_blank"
              className="btn btn-primary"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
