import { createContext } from 'react';
import { type Placement } from './DropdownProvider';

export type DropdownContextType = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  placement: Placement;
  setPlacement: React.Dispatch<React.SetStateAction<Placement>>;
  trigger: 'click' | 'hover';
  setTrigger: React.Dispatch<React.SetStateAction<'click' | 'hover'>>;
};

export const DropdownContext = createContext<DropdownContextType>({
  show: false,
  setShow: () => {},
  placement: 'bottomLeft',
  trigger: 'hover',
  setPlacement: () => {},
  setTrigger: () => {},
});
