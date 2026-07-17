import React from "react";

const NewServiceBasic = ({ thisService }) => {
  return (
    <>
      <div className="basic-details-section">
        <div className="content">
          <h6>FH GROUP</h6>
          <h1>{thisService.title}</h1>
          <div className="paragraph-content">
            <p>{thisService.desc}</p>
          </div>
        </div>
        <div className="main-image">
          <img src={thisService.img} alt={thisService.title} />
        </div>
      </div>
    </>
  );
};

export default NewServiceBasic;
