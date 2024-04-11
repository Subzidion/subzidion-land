export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`${className} bg-seasalt border-solid border-black border-8 p-2 m-5 lg:m-10`}
    >
      {children}
    </div>
  );
}
