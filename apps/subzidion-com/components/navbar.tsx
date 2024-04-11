import Link from "next/link";
import { Card } from "@repo/ui/card";

export default function Navbar(): JSX.Element {
  return (
    <Card>
      <div className="flex flex-wrap justify-evenly w-full p-2">
        <Link className="font-bold p-2" href="/">
          Home
        </Link>
        <Link className="font-bold p-2" href="/career">
          Career
        </Link>
        <Link className="font-bold p-2" href="/blogroll">
          Blogroll
        </Link>
      </div>
    </Card>
  );
}
