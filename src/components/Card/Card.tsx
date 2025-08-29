import React from 'react';
import { mergeClassNames } from '../../utils/classNameFunctions';
import styles from './card.module.scss';
import clsx from 'clsx';

interface CardProps
  extends Omit<React.ComponentProps<'div'>, 'onClick' | 'title'> {
  // Core props
  children: React.ReactNode;
  title?: string | React.ReactNode;
  footer?: React.ReactNode;

  // Variants
  variant?: 'elevated' | 'outlined' | 'filled';

  // Styling
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg';

  // Interactive states
  hoverable?: boolean;
  clickable?: boolean;

  // Override onClick to be simpler
  onClick?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      title,
      footer,
      variant = 'elevated',
      padding = 'md',
      radius = 'md',
      hoverable = false,
      clickable = false,
      className = '',
      onClick,
      role,
      tabIndex,
      ...props
    },
    ref
  ) => {
    const isInteractive = clickable || Boolean(onClick);
    const hasStructuredContent = Boolean(title || footer);

    const cardClasses = clsx(styles.card, {
      [styles[`variant-${variant}`]]: variant,
      [styles[`padding-${padding}`]]: padding && !hasStructuredContent,
      [styles[`radius-${radius}`]]: radius,
      [styles.hoverable]: hoverable || isInteractive,
      [styles.clickable]: isInteractive,
      [styles.structured]: hasStructuredContent,
    });

    const handleClick = () => {
      if (isInteractive && onClick) {
        onClick();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick?.();
      }
    };

    const renderTitle = () => {
      if (!title) return null;

      if (typeof title === 'string') {
        return <h4 className={styles.title}>{title}</h4>;
      }

      return <div className={styles.titleContainer}>{title}</div>;
    };

    const renderContent = () => {
      if (!hasStructuredContent) {
        return children;
      }

      return (
        <>
          {title && <div className={styles.header}>{renderTitle()}</div>}

          <div
            className={clsx(styles.body, {
              [styles[`padding-${padding}`]]: padding,
            })}
          >
            {children}
          </div>

          {footer && <div className={styles.footer}>{footer}</div>}
        </>
      );
    };

    return (
      <div
        ref={ref}
        className={mergeClassNames(
          cardClasses,
          className ? className.split(' ') : []
        )}
        onClick={isInteractive ? handleClick : undefined}
        onKeyDown={isInteractive ? handleKeyDown : undefined}
        role={role || (isInteractive ? 'button' : undefined)}
        tabIndex={isInteractive ? (tabIndex ?? 0) : tabIndex}
        {...props}
      >
        {renderContent()}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
