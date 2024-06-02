import React, { useState } from 'react';
import styles from './bear.module.scss';
import { FloatingNumber } from './floating-number.tsx';

const energyPoint = 4;

interface FloatingNumberData {
	id: number;
	x: number;
	y: number;
	value: number;
}

export const Bear = ({ setScore, energy, setEnergy }: any) => {
	const [floatingNumbers, setFloatingNumbers] = useState<FloatingNumberData[]>([]);

	const handleBear = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const isNull = energy - energyPoint;
		if (isNull > 0) {
			setScore((prevState: number) => prevState + 1);
			setEnergy((prevState: number) => prevState - energyPoint);

			// Получаем координаты клика относительно окна
			const { clientX, clientY } = event;

			// Получаем bounding rectangle медведя
			const bearRect = event.currentTarget.getBoundingClientRect();

			// Вычисляем координаты клика относительно медведя
			const x = clientX - bearRect.left + 10; // Смещение вправо на 10 пикселей
			const y = clientY - bearRect.top - 20; // Смещение вверх на 20 пикселей

			const id = new Date().getTime();
			setFloatingNumbers((prevNumbers) => [
				...prevNumbers,
				{ id, x, y, value: 1 }
			]);
		}
	};

	const handleAnimationEnd = (id: number) => {
		setFloatingNumbers((prevNumbers) => prevNumbers.filter(number => number.id !== id));
	};

	return (
		<div className={styles.bear} onClick={handleBear}>
			<img src="./bear.png" alt="click me" />
			{floatingNumbers.map(({ id, x, y, value }) => (
				<FloatingNumber
					key={id}
					x={x}
					y={y}
					number={value}
					onAnimationEnd={() => handleAnimationEnd(id)}
				/>
			))}
		</div>
	);
};
