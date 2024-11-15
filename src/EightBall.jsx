import { useState } from "react";
import "./Eightball.css";
import answers from "./answers.json";

const EightBall = () => {
	const [response, setResponse] = useState("Think of a question");
	const [color, setColor] = useState("black");

	const handleClick = () => {
		const randAnswer = Math.floor(Math.random() * answers.length);
		const { msg, color: ballColor } = answers[randAnswer];

		setResponse(response === "Think of a question" ? msg : "Think of a question");
		setColor(color === "black" ? ballColor : "black");
	};

	return (
		<>
			<button className="EightBall" style={{ backgroundColor: color }} onClick={handleClick}>
				{response}
			</button>
		</>
	);
};

export default EightBall;
