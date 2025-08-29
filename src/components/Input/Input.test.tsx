import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Input from './Input';
import styles from './input.module.scss';

describe('Input Component', () => {
  it('renders input element', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Email" />);
    const label = screen.getByText('Email');
    expect(label).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Input helperText="Enter your email address" />);
    const helperText = screen.getByText('Enter your email address');
    expect(helperText).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Input error="Email is required" />);
    const errorMessage = screen.getByText('Email is required');
    expect(errorMessage).toBeInTheDocument();
  });

  it('shows required asterisk when required', () => {
    render(<Input label="Email" required />);
    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
  });

  it('applies disabled state correctly', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies variant classes', () => {
    const { container } = render(<Input variant="filled" />);
    expect(container.firstChild).toHaveClass(styles['variant-filled']);
  });

  it('applies size classes', () => {
    const { container } = render(<Input size="lg" />);
    expect(container.firstChild).toHaveClass(styles['size-lg']);
  });

  it('prioritizes error message over helper text', () => {
    render(<Input helperText="Helper text" error="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
  });
});
