import { useContext } from 'react';
import { DropdownContext } from '../context/dropdown/DropdownContext';

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};

export default useDropdown;
