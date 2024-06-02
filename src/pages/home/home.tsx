import styles from './home.module.scss';

import { useState, useEffect } from 'react';

import { Bear } from '../../features/bear';
import { Score } from '../../features/score';
import { Energy } from '../../features/energy';

const MAX_ENERGY = 1000;
const ENERGY_RESTORE_RATE = 10;
const RESTORE_INTERVAL = 1000;

export default function Home() {
	const [score, setScore] = useState(0);
	const [energy, setEnergy] = useState(1000);

	useEffect(() => {
		const interval = setInterval(() => {
			setEnergy(prevEnergy => {
				const newEnergy = prevEnergy + ENERGY_RESTORE_RATE;
				return newEnergy > MAX_ENERGY ? MAX_ENERGY : newEnergy;
			});
		}, RESTORE_INTERVAL);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.content}>
			<Score score={score}/>
			<Bear setScore={setScore} energy={energy} setEnergy={setEnergy}/>
			<div className={styles.energyWrapper}>
				<Energy energy={energy}/>
			</div>
		</div>
	);
};
