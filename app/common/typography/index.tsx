export interface TypographyCommonProps extends React.HTMLAttributes<HTMLHeadingElement> {
  dummy?: unknown;
}

export const Jumbotron = ({ children, className, ...props }: TypographyCommonProps) => (
  <h1 className={`${className} text-5xl lg:text-6xl`} {...props}>
    {children}
  </h1>
);

export const H1 = ({ children, className, ...props }: TypographyCommonProps) => (
  <h1 className={`${className} text-2xl lg:text-3xl`} {...props}>
    {children}
  </h1>
);
