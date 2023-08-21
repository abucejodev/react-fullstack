type Children = React.ReactNode;

type Component<TProps = {}> = React.FC<TProps>;

type Asynchronous<TData> = NonNullable<Awaited<ReturnType<TData>>>;
