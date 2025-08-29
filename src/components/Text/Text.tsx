import React from 'react';
import { mergeClassNames } from '../../utils/classNameFunctions';
import styles from './text.module.scss';
import clsx from 'clsx';

interface TextProps extends Omit<React.ComponentProps<'span'>, 'color'> {
  // Core props
  children: React.ReactNode;

  // Color variants
  color?:
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'disabled'
    | 'link';

  // Text styles
  mark?: boolean;
  code?: boolean;
  keyboard?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  italic?: boolean;

  // HTML element to render
  as?:
    | 'span'
    | 'p'
    | 'div'
    | 'small'
    | 'em'
    | 'strong'
    | 'code'
    | 'kbd'
    | 'mark'
    | 'del'
    | 'ins'
    | 'sub'
    | 'sup'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';

  // Typography
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';

  // Additional styling
  className?: string;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      color = 'default',
      mark = false,
      code = false,
      keyboard = false,
      underline = false,
      delete: deleteText = false,
      strong = false,
      italic = false,
      as,
      size = 'md',
      weight = 'normal',
      className = '',
      ...props
    },
    ref
  ) => {
    // Determine the element to render based on props and styles
    let Element: keyof React.JSX.IntrinsicElements = as || 'span';

    // Auto-select appropriate element based on style props
    if (!as) {
      if (mark) Element = 'mark';
      else if (code) Element = 'code';
      else if (keyboard) Element = 'kbd';
      else if (deleteText) Element = 'del';
      else if (strong) Element = 'strong';
      else if (italic) Element = 'em';
      else if (size && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(size)) {
        Element = size as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      }
    }

    const textClasses = clsx(styles.text, {
      [styles[`color-${color}`]]: color,
      [styles[`size-${size}`]]: size,
      [styles[`weight-${weight}`]]: weight,
      [styles.mark]: mark,
      [styles.code]: code,
      [styles.keyboard]: keyboard,
      [styles.underline]: underline,
      [styles.delete]: deleteText,
      [styles.strong]: strong,
      [styles.italic]: italic,
    });

    return React.createElement(
      Element,
      {
        ref: ref,
        className: mergeClassNames(
          textClasses,
          className ? className.split(' ') : []
        ),
        ...props,
      },
      children
    );
  }
);

Text.displayName = 'Text';

export default Text;
