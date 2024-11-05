import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState(null)
	return (
		<div className="traffic-signal">
			<div className={"red light " +(color == 0 ? "glow" : "")} onClick={() => setColor(0)}></div>
			<div className={"yellow light " +(color == 1 ? "glow" : "")} onClick={() => setColor(1)}></div>
			<div className={"green light " +(color == 2 ? "glow" : "")} onClick={() => setColor(2)}></div>
		</div>
	);
};

export default Home;
