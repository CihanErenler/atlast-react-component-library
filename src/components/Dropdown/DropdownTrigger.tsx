import React from 'react';
import useDropdown from '../../hooks/useDropdown';

interface DropdownTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const DropdownTrigger = ({
  children,
  asChild = false,
}: DropdownTriggerProps) => {
  const { show, setShow, trigger } = useDropdown();

  const handleClick = () => {
    if (trigger === 'click') {
      setShow(!show);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setShow(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (trigger === 'click' && !show) {
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          setShow(true);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setShow(true);
          break;
      }
    }
  };

  const triggerProps = {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onKeyDown: handleKeyDown,
    'aria-expanded': show,
    'aria-haspopup': 'menu' as const,
    tabIndex: 0,
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...triggerProps,
      ...(children.props as object),
    });
  }

  return <div {...triggerProps}>{children}</div>;
};

export default DropdownTrigger;
