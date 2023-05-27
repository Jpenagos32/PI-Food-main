import styles from './Card.module.css';

const Card = (props) => {
	return (
		<div className={styles.container}>
			<h1>Soy una card</h1>
			<h2>No soy una card</h2>
		</div>
	);
};
export default Card;
