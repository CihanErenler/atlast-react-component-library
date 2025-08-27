import styles from "./styles.module.scss";
import clsx from "clsx";

const BUTTON_VARIANTS = {
  primaty: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  ghost: "ghost",
  outline: "outline",
  destructive: "destructive"
}

interface ComponentProps extends React.ComponentProps<"button"> {
  // core props
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  formId?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string;
// variants
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "outline" | "destructive";
  borderRadius?: "none" | "small" | "medium" | "full";
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  title,
  onClick
  ...props
}: ComponentProps) {
  const classNames = ["button"];

  if(variant) {
    BUTTON_VARIANTS.includes(variant) ? classNames.push(`button--${variant}`) : "pri";
  }

  const style = clsx(styles.button, {
    [styles[`button--${variant}`]]: variant,
    [styles[`button--${size}`]]: size,
  });

  return (
    <button type="button" className={style} {...props} onClick={(e) => onclick}>
      {title}
    </button>
  );
}
