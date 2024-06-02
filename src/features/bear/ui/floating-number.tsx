import React, { useEffect } from 'react';
import styles from './floating-number.module.scss';

interface FloatingNumberProps {
	x: number;
	y: number;
	number: number;
	onAnimationEnd: () => void;
}

export const FloatingNumber: React.FC<FloatingNumberProps> = ({ x, y, number, onAnimationEnd }) => {
	useEffect(() => {
		const timer = setTimeout(onAnimationEnd, 1000); // Длительность анимации
		return () => clearTimeout(timer);
	}, [onAnimationEnd]);

	const style = {
		left: `${x}px`,
		top: `${y}px`
	};

	return (
		<div className={styles.floatingNumber} style={style}>
			{number}
		</div>
	);
};
