import styles from './Header.module.css';

function Header({
  title,
  subtitle,
  rightContent,
}) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>
          {title}
        </h1>

        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}
      </div>

      {rightContent && (
        <div className={styles.rightContent}>
          {rightContent}
        </div>
      )}
    </header>
  );
}

export default Header;