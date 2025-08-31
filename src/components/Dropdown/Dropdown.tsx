import React from 'react';
import styles from './dropdown.module.scss';
import { DropdownProvider } from '../../context/dropdown/DropdownProvider';
import DropdownContainer from './DropdownContainer';
import { type Placement } from '../../context/dropdown/DropdownProvider';

export interface DropdownProps {
  children: React.ReactNode | React.ReactNode[];
  trigger?: 'click' | 'hover';
  placement?: Placement;
}

const Dropdown = ({
  children,
  trigger = 'hover',
  placement = 'bottomLeft',
}: DropdownProps) => {
  return (
    <div className={styles.dropdown} role="dropdown">
      <DropdownProvider>
        <DropdownContainer placement={placement} trigger={trigger}>
          {children}
        </DropdownContainer>
      </DropdownProvider>
    </div>
  );
};

export default Dropdown;
export type { Placement } from '../../context/dropdown/DropdownProvider';
