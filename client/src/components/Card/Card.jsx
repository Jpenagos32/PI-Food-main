import styles from './Card.module.css';

const Card = (props) => {
	const { name, img, diets } = props;
	return (
		<div className={styles.container}>
			<div className={styles.description}>
				<h1>{name}</h1>
				<img src={img} alt='' />
				<div className={styles.diets}>
					{diets.map((diet) => {
						return <h2>{diet.name}</h2>;
					})}
				</div>
			</div>
		</div>
	);
};
export default Card;
