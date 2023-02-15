import cn from 'classnames';
import {Link} from "react-router-dom";

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
	return (
		<section className={cn(styles["error"], 'error__container')}>
			<p>ErrorPage</p>
			<Link to='/'>to Home Page</Link>
		</section>
	);
};

export default ErrorPage;
