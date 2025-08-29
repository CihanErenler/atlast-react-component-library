import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Text from './Text';
import styles from './text.module.scss';

describe('Text Component', () => {
  it('renders children correctly', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders as span by default', () => {
    render(<Text>Text content</Text>);
    const text = screen.getByText('Text content');
    expect(text.tagName).toBe('SPAN');
  });

  it('renders with custom element', () => {
    render(<Text as="p">Paragraph text</Text>);
    const text = screen.getByText('Paragraph text');
    expect(text.tagName).toBe('P');
  });

  it('auto-selects element based on style props', () => {
    const { rerender } = render(<Text mark>Marked text</Text>);
    expect(screen.getByText('Marked text').tagName).toBe('MARK');

    rerender(<Text code>Code text</Text>);
    expect(screen.getByText('Code text').tagName).toBe('CODE');

    rerender(<Text keyboard>Keyboard text</Text>);
    expect(screen.getByText('Keyboard text').tagName).toBe('KBD');

    rerender(<Text delete>Deleted text</Text>);
    expect(screen.getByText('Deleted text').tagName).toBe('DEL');

    rerender(<Text strong>Strong text</Text>);
    expect(screen.getByText('Strong text').tagName).toBe('STRONG');

    rerender(<Text italic>Italic text</Text>);
    expect(screen.getByText('Italic text').tagName).toBe('EM');
  });

  it('applies color classes', () => {
    const { container, rerender } = render(
      <Text color="success">Success text</Text>
    );
    expect(container.firstChild).toHaveClass(styles['color-success']);

    rerender(<Text color="danger">Danger text</Text>);
    expect(container.firstChild).toHaveClass(styles['color-danger']);

    rerender(<Text color="warning">Warning text</Text>);
    expect(container.firstChild).toHaveClass(styles['color-warning']);
  });

  it('applies size classes', () => {
    const { container, rerender } = render(<Text size="lg">Large text</Text>);
    expect(container.firstChild).toHaveClass(styles['size-lg']);

    rerender(<Text size="sm">Small text</Text>);
    expect(container.firstChild).toHaveClass(styles['size-sm']);
  });

  it('applies weight classes', () => {
    const { container, rerender } = render(
      <Text weight="bold">Bold text</Text>
    );
    expect(container.firstChild).toHaveClass(styles['weight-bold']);

    rerender(<Text weight="medium">Medium text</Text>);
    expect(container.firstChild).toHaveClass(styles['weight-medium']);
  });

  it('applies style classes', () => {
    const { container, rerender } = render(<Text mark>Marked text</Text>);
    expect(container.firstChild).toHaveClass(styles.mark);

    rerender(<Text code>Code text</Text>);
    expect(container.firstChild).toHaveClass(styles.code);

    rerender(<Text keyboard>Keyboard text</Text>);
    expect(container.firstChild).toHaveClass(styles.keyboard);

    rerender(<Text underline>Underlined text</Text>);
    expect(container.firstChild).toHaveClass(styles.underline);

    rerender(<Text delete>Deleted text</Text>);
    expect(container.firstChild).toHaveClass(styles.delete);

    rerender(<Text strong>Strong text</Text>);
    expect(container.firstChild).toHaveClass(styles.strong);

    rerender(<Text italic>Italic text</Text>);
    expect(container.firstChild).toHaveClass(styles.italic);
  });

  it('applies multiple style classes', () => {
    const { container } = render(
      <Text color="success" size="lg" weight="bold" underline strong>
        Multi-styled text
      </Text>
    );

    expect(container.firstChild).toHaveClass(styles['color-success']);
    expect(container.firstChild).toHaveClass(styles['size-lg']);
    expect(container.firstChild).toHaveClass(styles['weight-bold']);
    expect(container.firstChild).toHaveClass(styles.underline);
    expect(container.firstChild).toHaveClass(styles.strong);
  });

  it('prefers explicit element over auto-selection', () => {
    render(
      <Text as="div" mark>
        Marked div
      </Text>
    );
    const text = screen.getByText('Marked div');
    expect(text.tagName).toBe('DIV');
    expect(text).toHaveClass(styles.mark);
  });

  it('applies custom className', () => {
    const { container } = render(<Text className="custom-class">Text</Text>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Text ref={ref}>Text content</Text>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('spreads additional props', () => {
    render(
      <Text data-testid="text-element" title="Test title">
        Text
      </Text>
    );
    const text = screen.getByTestId('text-element');
    expect(text).toHaveAttribute('title', 'Test title');
  });

  it('handles link color with proper styling', () => {
    const { container } = render(<Text color="link">Link text</Text>);
    expect(container.firstChild).toHaveClass(styles['color-link']);
  });
});
