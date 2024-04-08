import Link from "next/link";
import { Card } from "@repo/ui/card";

export default function Sidebar(): JSX.Element {
  return (
    <Card>
      <div className="w-full p-2">
        <Link href="/about">About Me</Link>
      </div>
    </Card>
  );
}
