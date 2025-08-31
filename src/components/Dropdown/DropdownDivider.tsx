import styles from './dropdown.module.scss';

const DropdownDivider = () => {
  return (
    <div
      className={styles.divider}
      role="separator"
      aria-orientation="horizontal"
    />
  );
};

export default DropdownDivider;
