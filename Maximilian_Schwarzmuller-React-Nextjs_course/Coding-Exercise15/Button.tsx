type ButtonProps = {
  mode?: "filled" | "outline" | "text" | "default";
  Icon?: React.ComponentType<any>;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  mode = "filled",
  Icon,
  children,
  ...props
}: ButtonProps) {
  const classes = `button ${mode}-button${Icon ? " icon-button" : ""}`;

  return (
    <button className={classes} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
