import { useState } from 'react';

export default function App() {
	const [score, setScore] = useState(0);

	const handleBearer = () => {
		setScore(prevState => prevState + 10);
	}

	return (
        <div className="wrapper">
	        <div className="content">
		        <div className="score">{score}</div>
                <div className="bearer" onClick={handleBearer}>
	                <img src="./bearer.png" alt=""/>
                </div>
	        </div>
        </div>
	);
};