import { Card } from "@repo/ui/card";

export default function Blogroll(): JSX.Element {
  return (
    <span>
      <Card>
        <div className="p-4">
          <h1>Technical Blogs</h1>
          <ul className="list-disc">
            <li>
              <a href="https://iximiuz.com/en/">Ivan Velichko's Blog</a> -
              Containers, Kubernetes, and Backend Development
            </li>
            <li>
              <a href="https://jvns.ca/">Julia Evan's Blog</a>
            </li>
            <li>
              <a href="https://mchap.io/">Matt Champan's Blog</a> - FOIA and
              Civic Hacking
            </li>
            <li>
              <a href="https://computer.rip/">J. B. Crawford's Blog</a> -
              Computers Are Bad
            </li>
          </ul>
        </div>
      </Card>
      <Card>
        <div className="p-4">
          <h1>Seattle Blogs/News</h1>
          <ul className="list-disc">
            <li>
              <a href="https://www.capitolhillseattle.com/">
                Capitol Hill Seattle
              </a>
            </li>
            <li>
              <a href="https://crosscut.com/">Crosscut</a>
            </li>
            <li>
              <a href="https://publicola.com/">PubliCola</a>
            </li>
            <li>
              <a href="https://www.seattletimes.com/">Seattle Times</a>
            </li>
            <li>
              <a href="https://southseattleemerald.com/">
                South Seattle Emerald
              </a>
            </li>
            <li>
              <a href="https://www.theurbanist.org/">The Urbanist</a>
            </li>
          </ul>
        </div>
      </Card>
    </span>
  );
}
