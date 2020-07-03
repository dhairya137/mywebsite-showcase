import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">
              {props.number}. {props.title}
            </h5>
            <a
              href={props.siteLink}
              // target="_blank"
              className="btn btn-danger mx-3"
            >
              Visit Site
            </a>
            <div class="inline-block my-4 mx-3">
              <a
                href={props.sourceCode}
                // target="_blank"
                className="btn btn-primary"
              >
                Source Code
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-up-right-square-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm4.5 5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6.707l-4.146 4.147a.5.5 0 0 1-.708-.708L9.293 6H6.5a.5.5 0 0 1 0-1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
