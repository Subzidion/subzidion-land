import { Card } from "@repo/ui/card";
import { Highlight } from "@repo/ui/highlight";
import Me from "@/components/me";
import Navbar from "@/components/navbar";
import Socials from "@/components/socials";

export default function Home(): JSX.Element {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-6 col-start-4">
        <Navbar />
        <Card>
          <Me />
          <div className="px-2 lg:p-2">
            <p>
              I'm a Software Engineer specializing in building enterprise-scale,
              resilient <b>distributed systems</b> and leading software teams
              through technical projects, <u>from design to launch</u>.
            </p>
          </div>
          <div className="px-2 lg:p-2">
            <p>
              I've developed this expertise from over 6 years of working in my
              role as a Software Development Engineer at{" "}
              <b>Amazon Web Services</b>, especially as a technical lead on both{" "}
              <b>AWS Hyperplane</b> and <b>AWS VPC's NAT Gateway</b>.
            </p>
          </div>
          <div className="px-2 lg:p-2">
            <p>
              Outside of software, you can typically find me meandering Seattle
              sidewalks, watching the Seahawks, or discussing broadband.
            </p>
          </div>
          <div className="p-2 leading-9">
            <span className="text-center">
              <h5>Technology Skills</h5>
            </span>
            <div>
              <p>
                <b>Proficient</b>: <Highlight mode="proficient">AWS</Highlight>{" "}
                <Highlight mode="proficient">Java</Highlight>{" "}
                <Highlight mode="proficient">Distributed Systems</Highlight>
              </p>
            </div>
            <div>
              <p>
                <b>Familiar</b>: <Highlight mode="familiar">React</Highlight>{" "}
                <Highlight mode="familiar">NextJS</Highlight>{" "}
                <Highlight mode="familiar">Python</Highlight>{" "}
                <Highlight mode="familiar">Django</Highlight>
              </p>
            </div>
            <div>
              <p>
                <b>Learning</b>: <Highlight mode="learning">Rust</Highlight>
              </p>
            </div>
          </div>
          <Socials />
          <div className="p-2 text-xs text-center">
            Design and graphics courtesy of my sister,{" "}
            <a href="https://hiltbrunnerangela.com/">Angela</a>.
          </div>
        </Card>
      </div>
    </main>
  );
}
