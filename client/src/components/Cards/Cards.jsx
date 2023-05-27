import Card from '../Card/Card';
import style from './Cards.module.css';
// import Banner from '../../images/landing/LandingBg.jpg';

const Cards = (props) => {
	return (
		<div>
			<div className={style.invisible}></div>
			<div className={style.container}>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
export default Cards;
