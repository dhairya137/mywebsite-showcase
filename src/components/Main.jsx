import React from "react";
import Card from "./Card";
import Data from "./Data";

const Main = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Websites Showcase</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto ">
            <div className="row gy-4">
              {Data.map((val, ind) => {
                return (
                  <Card
                    number={ind + 1}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    siteLink={val.siteLink}
                    sourceCode={val.sourceCode}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
