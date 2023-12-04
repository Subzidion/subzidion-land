import Head from 'next/head';
import Card from '../components/card';
import Highlight from '../components/highlight';

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <Head>
        <title>Carl Hiltbrunner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
        <div className="col-span-2">
          <Card>
            <img className="w-48 h-48 rounded-full mx-auto object-scale-down" src="/me_popart_small.png" alt="Flattering photo of me"/>
            <div className="p-2">
              <h1>Carl Hiltbrunner</h1>
              <h2>Senior Software Engineer</h2>
              <h3>Seattle, Washington</h3>
            </div>
            <div className="px-2 lg:p-2">
              <p>I'm a Software Engineer specializing in building enterprise-scale, resilient <b>distributed systems</b> and leading software teams through technical projects, <u>from design to launch</u>.</p>
            </div>
            <div className="px-2 lg:p-2">
              <p>I've developed this expertise from over 6 years of working in my role as a Software Development Engineer at <b>Amazon Web Services</b>, especially as a technical lead on both <b>AWS Hyperplane</b> and <b>AWS VPC's NAT Gateway</b>.</p>
            </div>
            <div className="px-2 lg:p-2">
              <p>Outside of software, you can typically find me meandering Seattle sidewalks, watching the Seahawks, or discussing broadband.</p>
            </div>
            <div className="p-2 leading-9">
              <span className="text-center"><h5>Technology Skills</h5></span>
              <div>
                <p><b>Proficient</b>: <Highlight mode="proficient">AWS</Highlight> <Highlight mode="proficient">Java</Highlight> <Highlight mode="proficient">Distributed Systems</Highlight></p>
              </div>
              <div>
                <p><b>Familiar</b>: <Highlight mode="familiar">React</Highlight> <Highlight mode="familiar">NextJS</Highlight> <Highlight mode="familiar">Python</Highlight> <Highlight mode="familiar">Django</Highlight></p>
              </div>
              <div>
                <p><b>Learning</b>: <Highlight mode="learning">Rust</Highlight></p>
              </div>
            </div>
            <div className="flex justify-evenly p-2">
              <div>
              <a href="https://twitter.com/Subzidion" title="Link to my Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" role="img"><title>Twitter</title><path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z"/></svg></a>
              </div>
              <div>
              <a href="https://github.com/Subzidion" title="Link to my GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" role="img"><title>GitHub</title><path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg></a>
              </div>
              <div>
              <a href="https://www.linkedin.com/in/carlhiltbrunner/" title="Link to my LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" role="img"><title>LinkedIn</title><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              </div>
            </div>
            <div className="p-2 text-xs text-center">
              Design and graphics courtesy of my sister, <a href="https://hiltbrunnerangela.com/">Angela</a>.
            </div>
          </Card>
        </div>
        <div className="col-span-4 lg:overflow-auto">
          <Card>
            <div className="p-2">
              <div className="pb-2">
                <h1>Amazon Web Services</h1>
                <h2>Software Development Engineer</h2>
                <h3>Seattle, Washington</h3>
                <h4>2017-Present</h4>
              </div>
              <p>I started my full-time software engineering career at Amazon Web Services out of college. At Amazon Web Services, I've learned what it means to run critical systems at the scale of the largest cloud provider. The scale of systems at Amazon has given me a unique perspective and knowledge that informs every design I work on. Amazon has also given me significant experience in high-pressure operational events, driving resolutions, and effectively communicating status. This experience has taught a valuable lesson as well: always build resillient systems.</p>
            </div>
            <div className="p-2">
              <h5>Serverless Compute</h5>
              <h6>2022-Present</h6>
              <p>In 2022, I switched organizations in AWS to work on a greenfield project in AWS Severless Compute. This project has given me exposure to technologies like Linux container internals, container orchestrators like Kubernetes and ECS, and container runtimes like Docker and containerd. As a greenfield project, my work has consisted of engaging leadership across multiple organizations to understand business problems and collaborating with the team to define functional requirements and create design proposals for the system architecture. The highly ambiguous nature of the project has honed my experience de-risking and disambiguating portions of the project with a high-level of unknowns while still contributing to regular progress and delivery.</p>
            </div>
            <div className="p-2">
              <h5>VPC NAT Gateway</h5>
              <h6>2019-2022</h6>
              <p>I served as the technical lead on the AWS VPC's NAT Gateway team. This included delivering multiple public feature launches, including <a href="https://aws.amazon.com/about-aws/whats-new/2023/02/amazon-nat-gateways-capacity-concurrent-connections-unique-destination/">Multiple IPs on NAT Gateway</a>, <a href="https://aws.amazon.com/about-aws/whats-new/2020/03/amazon-vpc-nat-gateway-now-supports-tag-on-create/">NAT Gateway Tag-on-Create</a>, and <a href="https://aws.amazon.com/about-aws/whats-new/2021/11/aws-nat64-dns64-communication-ipv6-ipv4-services/">NAT64</a>, and mentoring interns through projects including <a href="https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-nat-gateway-allows-select-private-ip-address-network-address-translation/">Choose your Private IP on NAT Gateway</a> and <a href="https://aws.amazon.com/about-aws/whats-new/2021/06/aws-removes-nat-gateways-dependence-on-internet-gateway-for-private-communications/">Private NAT Gateway</a>. Through these multiple projects, I defined a new feature launch process to standardize our release cycle and make delivery timelines more predictable, which continues to be the standard for the team feature launches.</p>
              <p>I also drove significant operational improvements and revamps across our entire technical stack. This included significant automation in our region build processes, modernization of our EC2 Control Plane integration, and expansion of our integration test suites. These projects were mostly self-started. I identified pain points across the platform, bother customer and business needs, and implemented solutions to resolve them. These improvements set the standard by which the team still holds itself to in terms of operational posture.</p>
            </div>
            <div className="p-2">
              <h5>AWS Hyperplane</h5>
              <h6>2017-2022</h6>
              <p>AWS Hyperplane is the Distributed Network Functions Virtualization Platform that powers NAT Gateway, NLB, and EFS. I started my career on the Hyperplane Control Plane, growing from a junior engineer out of college to technical lead, becoming a subject matter expert on critical components for the platform.</p>
              <p>As a technical lead, I was responsible for creating or evaluating system designs to be incorporated within our existing components, performing implementation work, and delegating portions of the project to coworkers for completion. Publicly, this included the Hyperplane work to support the launch of <a href="https://aws.amazon.com/blogs/aws/new-udp-load-balancing-for-network-load-balancer/">UDP on NLB</a>.</p>
              <p>I also led the work on multiple internal features and optimizations for Hyperplane. I designed and implemented workflows to improve our utilization of EC2 capacity offerings. I created a system to maintain appropriate isolation between parts of our fleet to improve customer experience and reduce blast radius of potential customer impact. I also updated the internal processing system to improve health check propagations for AWS's Network Load Balancers. All of this work involved cross-organizational coordination and collaboration, requiring effective requirements and status communication.</p>
              <p>I also briefly served in a management position as well, leading a team of 5 engineers. This work included task prioritization, sprint planning, status communication, career development (successfully promoting two engineers), and leading the team's annual planning process.</p>
            </div>
          </Card>
          <Card>
            <div className="p-2">
              <div className="pb-2">
                <h1>The Boeing Company</h1>
                <h2>IT Intern</h2>
                <h3>Bellevue, Washington</h3>
                <h4>Summer 2016</h4>
              </div>
              <p>In the summer of 2016, I completed a 3 month internship at Boeing as part of their IT organization.</p>
            </div>
            <div className="p-2">
              <h5>Systems Integration</h5>
              <p>I worked in the Systems Integration department of Boeing's IT. While there, I reduced operating costs by creating a Powershell and C# application to automate the management of Windows servers. I advised and mentored fellow interns on their projects, helping them work through technical issues and identify design improvements. I also led a hackathon team that helped identify solutions for improvements to Boeing Factory processes.</p>
            </div>
          </Card>
          <Card>
            <div className="p-2">
              <h1>North Carolina State University</h1>
              <h2>B.S. Computer Science, B.A. Psychology, Minor in Cognitive Science</h2>
              <h3>Raleigh, North Carolina</h3>
              <h4>2013-2017</h4>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
