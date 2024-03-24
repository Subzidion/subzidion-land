export function Highlight({
  mode,
  children,
}: {
  mode: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <span className={`rounded-full p-1 px-4 whitespace-nowrap polka-${mode}`}>
      {children}
    </span>
  );
}
