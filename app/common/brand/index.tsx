export const Logo = ({
  className,
  upperClassName,
  lowerClassName,
  ...props
}: React.HTMLAttributes<HTMLHeadElement> & { upperClassName?: string; lowerClassName?: string }) => (
  <h1 className={`flex flex-col items-center gap-y-1 ${className ?? ""}`} {...props}>
    <span className={`text-3xl m-0 leading-none transition-all ${upperClassName ?? ""}`}>Luna Café</span>
    <span className={`text-xl m-0 leading-none transition-all ${lowerClassName ?? ""}`}>ROASTERY</span>
  </h1>
);
