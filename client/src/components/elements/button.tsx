type Props = {
  children: Children;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  intent?: "primary" | "secondary" | "danger";
};

const Button: Component<Props> = ({
  children,
  onClick,
  intent = "primary",
}) => {
  const variants: { [key in typeof intent]: string } = {
    primary: "bg-sky-500 text-slate-200",
    secondary: "bg-slate-200 text-slate-500",
    danger: "bg-red-500 text-slate-200",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${variants[intent]} px-4 py-2 rounded font-bold text-sm`}>
      {children}
    </button>
  );
};

export default Button;
