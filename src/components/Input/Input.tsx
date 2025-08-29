import React from 'react';
import { mergeClassNames } from '../../utils/classNameFunctions';
import { Eye, EyeOff } from 'lucide-react';
import styles from './input.module.scss';
import clsx from 'clsx';

interface InputProps {
  // Core props
  label?: string;
  helperText?: string;
  error?: string;

  // Variants
  id?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  variant?: 'outline' | 'filled' | 'underline';
  size?: 'sm' | 'md' | 'lg';

  // States
  disabled?: boolean;
  required?: boolean;

  // Icons and text
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  startText?: string;
  endText?: string;
  startButton?: React.ReactNode;
  endButton?: React.ReactNode;
  endButtonTitle?: string;
  startButtonTitle?: string;
  // Addons (for buttons or custom components)
  startAddon?: React.ReactNode;
  endAddon?: React.ReactNode;

  // Character counter
  maxLength?: number;
  showCharacterCount?: boolean;

  // Password functionality
  showPasswordToggle?: boolean;

  // Styling
  fullWidth?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      variant = 'outline',
      size = 'md',
      disabled = false,
      required = false,
      startIcon,
      endIcon,
      startText,
      endText,
      startAddon,
      endAddon,
      maxLength,
      showCharacterCount = false,
      showPasswordToggle = false,
      fullWidth = false,
      className = '',
      id,
      value,
      defaultValue,
      onChange,
      startButton = null,
      endButton = null,
      startButtonTitle = null,
      endButtonTitle = null,
      type,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);
    const isPasswordType = type === 'password';
    const shouldShowPasswordToggle = showPasswordToggle && isPasswordType;

    // Update logic to include new button props
    const hasStartContent = Boolean(
      startIcon || startText || startAddon || startButton || startButtonTitle
    );
    const hasEndContent = Boolean(
      endIcon ||
        endText ||
        endAddon ||
        endButton ||
        endButtonTitle ||
        shouldShowPasswordToggle
    );

    // Use the actual value for character counting
    const currentValue = (value as string) || '';
    const shouldShowCounter =
      showCharacterCount && (maxLength || currentValue.length > 0);

    // Determine actual input type (for password toggle)
    const inputType = isPasswordType && showPassword ? 'text' : type;

    const containerClasses = clsx(styles.container, {
      [styles[`variant-${variant}`]]: variant,
      [styles[`size-${size}`]]: size,
      [styles.disabled]: disabled,
      [styles.error]: hasError,
      [styles.fullWidth]: fullWidth,
    });

    const inputWrapperClasses = clsx(styles.inputWrapper, {
      [styles.hasStartContent]: hasStartContent,
      [styles.hasEndContent]: hasEndContent,
      [styles.hasError]: hasError,
    });

    const inputClasses = clsx(styles.input, {
      [styles.hasError]: hasError,
      [styles.withStartContent]: hasStartContent,
      [styles.withEndContent]: hasEndContent,
    });

    const characterCount = currentValue.length;
    const isOverLimit = maxLength ? characterCount > maxLength : false;

    return (
      <div
        className={mergeClassNames(
          containerClasses,
          className ? className.split(' ') : []
        )}
      >
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={inputWrapperClasses}>
          {/* Start Content */}
          {startAddon && <div className={styles.startAddon}>{startAddon}</div>}
          {startText && <div className={styles.startText}>{startText}</div>}
          {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
          {startButton && (
            <div className={styles.startButton}>
              {startButtonTitle && (
                <span className={styles.startButtonTitle}>
                  {startButtonTitle}
                </span>
              )}
            </div>
          )}
          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            type={inputType}
            placeholder={placeholder}
            {...props}
          />

          {/* End Content */}
          {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
          {endText && <div className={styles.endText}>{endText}</div>}
          {endAddon && <div className={styles.endAddon}>{endAddon}</div>}
          {endButton && (
            <div className={styles.endButton}>
              {endButtonTitle && (
                <span className={styles.endButtonTitle}>{endButtonTitle}</span>
              )}
            </div>
          )}

          {/* Password Toggle */}
          {shouldShowPasswordToggle && (
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
              disabled={disabled}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>

        {/* Helper Text and Character Counter */}
        <div className={styles.bottomRow}>
          {(helperText || error) && (
            <div
              className={clsx(styles.helperText, {
                [styles.errorText]: hasError,
              })}
            >
              {error || helperText}
            </div>
          )}

          {shouldShowCounter && (
            <div
              className={clsx(styles.characterCount, {
                [styles.overLimit]: isOverLimit,
              })}
            >
              {characterCount}
              {maxLength && `/${maxLength}`}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
