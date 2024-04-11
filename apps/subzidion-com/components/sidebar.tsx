import { Card } from "@repo/ui/card";
import Me from "@/components/me";
import Socials from "@/components/socials";

export default function Sidebar({
  className,
}: {
  className: string;
}): JSX.Element {
  return (
    <Card className={className}>
      <Me />
      <Socials />
      <div className="p-2 text-xs text-center">
        Design and graphics courtesy of my sister,{" "}
        <a href="https://hiltbrunnerangela.com/">Angela</a>.
      </div>
    </Card>
  );
}
