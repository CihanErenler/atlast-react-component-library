import styles from './styles.module.scss';
import clsx from 'clsx';

interface ComponentProps extends React.ComponentProps<'button'> {
  // core props
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  formId?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string;
  // variants
  variant?: 'solid' | 'outline' | 'ghost';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  borderRadius?: 'none' | 'small' | 'medium' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

const Button = ({
  variant = 'solid',
  size = 'md',
  title,
  onClick,
  disabled,
  borderRadius,
  color = 'primary',
}: ComponentProps) => {
  const style = clsx(styles.button, {
    [styles[`${variant}`]]: variant,
    [styles[`size-${size}`]]: size,
    [styles[`disabled`]]: disabled,
    [styles[`radius-${borderRadius}`]]: borderRadius,
    [styles[`color-${color}`]]: color,
  });

  return (
    <button type="button" className={style} onClick={onClick} disabled>
      {title}
    </button>
  );
};

export default Button;
