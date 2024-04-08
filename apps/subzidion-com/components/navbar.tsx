import Link from "next/link";
import { Card } from "@repo/ui/card";

export default function Sidebar(): JSX.Element {
  return (
    <Card>
      <div className="w-full p-2">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/career">
          <h1>Career</h1>
        </Link>
      </div>
    </Card>
  );
}
