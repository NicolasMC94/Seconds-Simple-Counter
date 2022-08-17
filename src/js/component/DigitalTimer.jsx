import React from "react";

const DigitalTimer = ({
    secondOne,
    secondsTwo,
    minuteOne,
    minuteTwo,
    hourOne,
    hourTwo,
  }) => {
    return (
      <div className="container my-5">
        <div className="d-flex justify-content-center align-items-center bg-secondary  borderRadius  container-size">
          <div className="text-info bg-dark d-flex flex-wrap justify-content-center borderRadius bgSize">
            <p className="size">{hourTwo}</p>
            <p className="size">{hourOne}</p>
          </div>
          <p className="size">:</p>
          <div className="text-info bg-dark d-flex flex-wrap justify-content-center borderRadius bgSize">
            <p className="size">{minuteTwo}</p>
            <p className="size">{minuteOne}</p>
          </div>
          <p className="size">:</p>
          <div className="text-info bg-dark d-flex flex-wrap justify-content-center borderRadius bgSize">
            <p className="size">{secondsTwo}</p>
            <p className="size">{secondOne}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DigitalTimer;