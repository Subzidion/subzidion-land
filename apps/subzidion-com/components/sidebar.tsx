import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Highlight } from "@repo/ui/highlight";

export default function Sidebar(): JSX.Element {
  return (
    <Card>
      <Image
        alt="Flattering portrait of me"
        className="rounded-full mx-auto"
        height={192}
        src="/me_popart_small.png"
        width={192}
      />
      <div className="p-2">
        <h1>Carl Hiltbrunner</h1>
        <h2>Senior Software Engineer</h2>
        <h3>Seattle, Washington</h3>
      </div>
      <div className="px-2 lg:p-2">
        <p>
          I'm a Software Engineer specializing in building enterprise-scale,
          resilient <b>distributed systems</b> and leading software teams
          through technical projects, <u>from design to launch</u>.
        </p>
      </div>
      <div className="px-2 lg:p-2">
        <p>
          I've developed this expertise from over 6 years of working in my role
          as a Software Development Engineer at <b>Amazon Web Services</b>,
          especially as a technical lead on both <b>AWS Hyperplane</b> and{" "}
          <b>AWS VPC's NAT Gateway</b>.
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
      <div className="flex justify-evenly p-2">
        <div>
          <a href="https://twitter.com/Subzidion" title="Link to my Twitter">
            <svg
              height="30"
              role="img"
              viewBox="0 0 24 24"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" />
            </svg>
          </a>
        </div>
        <div>
          <a href="https://github.com/Subzidion" title="Link to my GitHub">
            <svg
              height="30"
              role="img"
              viewBox="0 0 24 24"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/carlhiltbrunner/"
            title="Link to my LinkedIn"
          >
            <svg
              height="30"
              role="img"
              viewBox="0 0 24 24"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-2 text-xs text-center">
        Design and graphics courtesy of my sister,{" "}
        <a href="https://hiltbrunnerangela.com/">Angela</a>.
      </div>
    </Card>
  );
}
