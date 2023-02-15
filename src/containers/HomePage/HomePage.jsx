import styles from './HomePage.module.css';

import RandomCharacter from "../../components/RandomCharacter/RandomCharacter";
import Characters from "../../components/Characters/Characters";

const HomePage = () => {
	return (
		<main className="page-bottom-decor">
			<RandomCharacter />
			<Characters />
		</main>
	);
};

export default HomePage;
