import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from './Card';
import styles from './card.module.scss';

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default variant and padding', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass(styles['variant-elevated']);
    expect(card).toHaveClass(styles['padding-md']);
  });

  it('applies variant classes', () => {
    const { container } = render(<Card variant="outlined">Content</Card>);
    expect(container.firstChild).toHaveClass(styles['variant-outlined']);
  });

  it('applies padding classes', () => {
    const { container } = render(<Card padding="lg">Content</Card>);
    expect(container.firstChild).toHaveClass(styles['padding-lg']);
  });

  it('applies radius classes', () => {
    const { container } = render(<Card radius="sm">Content</Card>);
    expect(container.firstChild).toHaveClass(styles['radius-sm']);
  });

  it('applies hoverable class when hoverable is true', () => {
    const { container } = render(<Card hoverable>Content</Card>);
    expect(container.firstChild).toHaveClass(styles.hoverable);
  });

  it('applies clickable class when clickable is true', () => {
    const { container } = render(<Card clickable>Content</Card>);
    expect(container.firstChild).toHaveClass(styles.clickable);
  });

  it('applies clickable class when onClick is provided', () => {
    const { container } = render(<Card onClick={() => {}}>Content</Card>);
    expect(container.firstChild).toHaveClass(styles.clickable);
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Content</Card>);

    const card = screen.getByRole('button');
    fireEvent.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Enter key is pressed', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Content</Card>);

    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter' });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Space key is pressed', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Content</Card>);

    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: ' ' });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick for other keys', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Content</Card>);

    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Escape' });

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Card ref={ref}>Content</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('sets role to button when interactive', () => {
    render(<Card onClick={() => {}}>Content</Card>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('allows custom role override', () => {
    render(
      <Card onClick={() => {}} role="article">
        Content
      </Card>
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('sets tabIndex to 0 for interactive cards', () => {
    render(<Card onClick={() => {}}>Content</Card>);
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  it('allows custom tabIndex override', () => {
    render(
      <Card onClick={() => {}} tabIndex={-1}>
        Content
      </Card>
    );
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '-1');
  });

  it('renders with string title', () => {
    render(<Card title="Card Title">Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  });

  it('renders with React node title', () => {
    render(
      <Card title={<span data-testid="custom-title">Custom Title</span>}>
        Content
      </Card>
    );
    expect(screen.getByTestId('custom-title')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(<Card footer={<button>Action</button>}>Content</Card>);
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('renders with both title and footer', () => {
    render(
      <Card
        title="Card Title"
        footer={<span data-testid="footer">Footer content</span>}
      >
        Body content
      </Card>
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Body content')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('applies structured class when title or footer is present', () => {
    const { container, rerender } = render(<Card title="Title">Content</Card>);
    expect(container.firstChild).toHaveClass(styles.structured);

    rerender(<Card footer={<span>Footer</span>}>Content</Card>);
    expect(container.firstChild).toHaveClass(styles.structured);

    rerender(<Card>Content</Card>);
    expect(container.firstChild).not.toHaveClass(styles.structured);
  });

  it('does not apply padding class to card when structured', () => {
    const { container } = render(
      <Card title="Title" padding="lg">
        Content
      </Card>
    );
    expect(container.firstChild).not.toHaveClass(styles['padding-lg']);
    expect(container.firstChild).toHaveClass(styles.structured);
  });
});
