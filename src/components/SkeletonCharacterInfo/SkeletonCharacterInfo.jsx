import cn from 'classnames';

import styles from './SkeletonCharacterInfo.module.scss';

const SkeletonCharacterInfo = () => {
	return (
		<div className={styles["character-skeleton"]}>
			<div className={styles["character-skeleton__heading"]}>
				Please select a character to see information
			</div>
			<div className={styles["character-skeleton__header"]}>
				<div className={cn(styles["character-skeleton__circle"], styles["character-skeleton__pulse"])}></div>
				<div className={cn(styles["character-skeleton__small-line"], styles["character-skeleton__pulse"])}></div>
			</div>
			<div className={cn(styles["character-skeleton__big-line"], styles["character-skeleton__pulse"])}></div>
			<div className={cn(styles["character-skeleton__big-line"], styles["character-skeleton__pulse"])}></div>
			<div className={cn(styles["character-skeleton__big-line"], styles["character-skeleton__pulse"])}></div>
		</div>
	);
};

export default SkeletonCharacterInfo;
