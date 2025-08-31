import React from 'react';
import styles from './dropdown.module.scss';
import useDropdown from '../../hooks/useDropdown';
import { classNameMaker } from '../../utils/classNameFunctions';

export interface DropdownItemProps {
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  shortcut?: string;
  onClick?: () => void;
}

const DropdownItem = ({
  label,
  disabled = false,
  icon,
  shortcut,
  onClick,
}: DropdownItemProps) => {
  const { setShow } = useDropdown();

  const handleClick = () => {
    if (disabled) return;

    onClick?.();
    setShow(false); // Close dropdown after item selection
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const className = classNameMaker([
    styles.dropdownItem,
    disabled && styles.disabled,
  ]);

  return (
    <div
      className={className}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
    </div>
  );
};

export default DropdownItem;
