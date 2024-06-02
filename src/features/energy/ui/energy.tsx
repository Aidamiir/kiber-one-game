import styles from './energy.module.scss';

export const Energy = ({energy}: any) => {
	return <div className={styles.energy}>{energy}</div>
};