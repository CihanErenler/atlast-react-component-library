import React, { useEffect, useRef } from 'react';
import styles from './dropdown.module.scss';
import useDropdown from '../../hooks/useDropdown';
import { type Placement } from '../../context/dropdown/DropdownProvider';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  placement?: Placement;
  trigger?: 'click' | 'hover';
}

const DropdownContainer = ({
  children,
  placement = 'bottomLeft',
  trigger = 'hover',
}: IProps) => {
  const { setPlacement, setTrigger, show, setShow } = useDropdown();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('placement', placement);
    setPlacement(placement);
    setTrigger(trigger);
  }, [placement, trigger, setPlacement, setTrigger]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [show, setShow]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && show) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [show, setShow]);

  return (
    <div
      ref={containerRef}
      className={styles.dropdownContainer}
      onMouseLeave={() => trigger === 'hover' && setShow(false)}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default DropdownContainer;
