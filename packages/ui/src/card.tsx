export function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="bg-seasalt border-solid border-black border-8 p-2 m-5 lg:m-10">
      {children}
    </div>
  );
}
