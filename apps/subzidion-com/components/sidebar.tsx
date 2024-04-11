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
        Commit{" "}
        <a
          className="underline"
          href={`https://github.com/Subzidion/subzidion.com/tree/${process.env.COMMIT_HASH}`}
        >
          {process.env.COMMIT_HASH}
        </a>
        . Design and graphics courtesy of my sister,{" "}
        <a href="https://hiltbrunnerangela.com/">Angela</a>.
      </div>
    </Card>
  );
}
