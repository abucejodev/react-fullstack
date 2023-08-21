type Props = {
  children: Children;
  className?: string;
};

const Area: Component<Props> = ({ children, className = "" }) => {
  return (
    <div className={`${className} max-w-7xl w-full mx-auto p-4`}>
      {children}
    </div>
  );
};

export default Area;
