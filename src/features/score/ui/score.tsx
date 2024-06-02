import styles from './score.module.scss';

type Props = {
	score: number
}

export const Score = ({score}: Props) => {
	return <div className={styles.score}>{score}</div>
};