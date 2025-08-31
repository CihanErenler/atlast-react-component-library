import React, { useState } from 'react';
import { DropdownContext } from './DropdownContext';

export type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'top';

interface DropdownProviderProps {
  children: React.ReactNode;
}

export const DropdownProvider = ({ children }: DropdownProviderProps) => {
  const [show, setShow] = useState(false);
  const [placement, setPlacement] = useState<Placement>('bottomLeft');
  const [trigger, setTrigger] = useState<'click' | 'hover'>('hover');

  return (
    <DropdownContext.Provider
      value={{
        show,
        setShow,
        placement,
        trigger,
        setPlacement,
        setTrigger,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
