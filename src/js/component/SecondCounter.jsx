import React from "react";

const SecondsCounter = (props) => {
	let counter = 0
	  setInterval(() => {
  
		const today = new Date(counter);
		const segundos = today.getSeconds();
		const minutos = today.getMinutes();
		const horas = today.getHours();
  
		console.log(segundos, minutos, horas)
	  }, 1000);
  
  
	return (
	  <div className="container text-center">
		<div className="d-flex flex-row justify-content-center align-items-center bg-secondary rounded">
		  <div className="text-info bg-dark rounded my-2" id="hours">
			{props.digitalHours}
		  </div>
		  <div className="my-2">:</div>
		  <div className="text-info bg-dark rounded my-2" id="minutes">
			{props.digitalMinutes}
		  </div>
		  <div className="my-2">:</div>
		  <div className="text-info bg-dark rounded my-2" id="seconds">
			{props.digitalSeconds}
		  </div>
		</div>
	  </div>
	);
  };

export default SecondsCounter;