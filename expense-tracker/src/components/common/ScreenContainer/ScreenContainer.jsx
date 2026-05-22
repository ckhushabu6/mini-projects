import styles from './ScreenContainer.module.css';

function ScreenContainer({
  children,
  className = '',
}) {
  return (
    <section
      className={`
        ${styles.container}
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default ScreenContainer;