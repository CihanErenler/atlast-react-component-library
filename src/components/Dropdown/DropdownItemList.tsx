import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.scss';
import useDropdown from '../../hooks/useDropdown';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'motion/react';
import { classNameMaker } from '../../utils/classNameFunctions';

interface DropdownItemListProps {
  children: React.ReactNode | React.ReactNode[];
}

const DropdownItemList = ({ children }: DropdownItemListProps) => {
  const { show, placement } = useDropdown();
  const listRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!show || !listRef.current) return;

      const items = listRef.current.querySelectorAll('[role="menuitem"]');
      const totalItems = items.length;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % totalItems);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + totalItems) % totalItems);
          break;
        case 'Enter':
          event.preventDefault();
          if (focusedIndex >= 0 && items[focusedIndex]) {
            (items[focusedIndex] as HTMLElement).click();
          }
          break;
        case 'Home':
          event.preventDefault();
          setFocusedIndex(0);
          break;
        case 'End':
          event.preventDefault();
          setFocusedIndex(totalItems - 1);
          break;
      }
    };

    if (show) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [show, focusedIndex]);

  // Focus management
  useEffect(() => {
    if (show && listRef.current) {
      const items = listRef.current.querySelectorAll('[role="menuitem"]');
      if (focusedIndex >= 0 && items[focusedIndex]) {
        (items[focusedIndex] as HTMLElement).focus();
      }
    }
  }, [focusedIndex, show]);

  // Reset focus when dropdown opens
  useEffect(() => {
    if (show) {
      setFocusedIndex(-1);
    }
  }, [show]);

  const getPlacementClass = () => {
    return classNameMaker([
      styles.dropdownItemList,
      styles[`placement-${placement}`],
    ]);
  };

  const getAnimationProps = () => {
    const isTop = placement.includes('top');
    const yDirection = isTop ? -10 : 10;

    return {
      exit: { opacity: 0, y: yDirection, scale: 0.95 },
      initial: { opacity: 0, y: yDirection, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: {
        duration: 0.15,
        ease: 'easeOut' as const,
      },
    };
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <div ref={listRef} className={getPlacementClass()}>
          <motion.div
            key="dropdownContent"
            className={styles.dropdownContent}
            role="menu"
            aria-orientation="vertical"
            tabIndex={-1}
            {...getAnimationProps()}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DropdownItemList;
