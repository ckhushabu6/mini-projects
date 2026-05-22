import { HiOutlineInbox } from 'react-icons/hi';

import styles from './EmptyState.module.css';

function EmptyState({
  title = 'No Data Found',
  description = 'There is nothing to show here yet.',
}) {
  return (
    <div className={styles.emptyState}>
      <div className={styles.iconWrapper}>
        <HiOutlineInbox />
      </div>

      <h3 className={styles.title}>
        {title}
      </h3>

      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
}

export default EmptyState;