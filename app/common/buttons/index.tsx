import Link, { type LinkProps } from "next/link";

export interface ButtonProps extends LinkProps {
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined";
}

const colorClasses = {
  primary: "bg-coffee hover:bg-charcoal text-gray-light",
  secondary: "bg-moon hover:bg-beige text-gray-dark",
};

const sizeClasses = {
  small: "text-sm py-1 px-2 rounded-full",
  medium: "text-base py-2 px-4 rounded-full",
  large: "text-lg py-3 px-6 rounded-xl",
};

const variantClasses = {
  filled: "rounded-full",
  outlined: "border-2 border-coffee",
};

export const Button = ({
  children,
  color = "primary",
  size = "medium",
  variant = "filled",
  className,
  ...props
}: ButtonProps & React.HTMLAttributes<unknown>) => (
  <Link className={`${colorClasses[color]} ${sizeClasses[size]} ${variantClasses[variant]} inline-block transition-colors ${className ?? ""}`} {...props}>
    {children}
  </Link>
);
