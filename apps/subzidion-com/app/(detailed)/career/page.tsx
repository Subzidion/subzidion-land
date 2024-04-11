import { Card } from "@repo/ui/card";

export default function Career(): JSX.Element {
  return (
    <span>
      <Card>
        <div className="p-2">
          <div className="pb-2">
            <h1>Amazon Web Services</h1>
            <h2>Software Development Engineer</h2>
            <h3>Seattle, Washington</h3>
            <h4>2017-Present</h4>
          </div>
          <p>
            I started my full-time software engineering career at Amazon Web
            Services out of college. At Amazon Web Services, I've learned what
            it means to run critical systems at the scale of the largest cloud
            provider. The scale of systems at Amazon has given me a unique
            perspective and knowledge that informs every design I work on.
            Amazon has also given me significant experience in high-pressure
            operational events, driving resolutions, and effectively
            communicating status. This experience has taught a valuable lesson
            as well: always build resillient systems.
          </p>
        </div>
        <div className="p-2">
          <h5>Serverless Compute</h5>
          <h6>2022-Present</h6>
          <p>
            In 2022, I switched organizations in AWS to work on a greenfield
            project in AWS Severless Compute. This project has given me exposure
            to technologies like Linux container internals, container
            orchestrators like Kubernetes and ECS, and container runtimes like
            Docker and containerd. As a greenfield project, my work has
            consisted of engaging leadership across multiple organizations to
            understand business problems and collaborating with the team to
            define functional requirements and create design proposals for the
            system architecture. The highly ambiguous nature of the project has
            honed my experience de-risking and disambiguating portions of the
            project with a high-level of unknowns while still contributing to
            regular progress and delivery.
          </p>
        </div>
        <div className="p-2">
          <h5>VPC NAT Gateway</h5>
          <h6>2019-2022</h6>
          <p>
            I served as the technical lead on the AWS VPC's NAT Gateway team.
            This included delivering multiple public feature launches, including{" "}
            <a href="https://aws.amazon.com/about-aws/whats-new/2023/02/amazon-nat-gateways-capacity-concurrent-connections-unique-destination/">
              Multiple IPs on NAT Gateway
            </a>
            ,{" "}
            <a href="https://aws.amazon.com/about-aws/whats-new/2020/03/amazon-vpc-nat-gateway-now-supports-tag-on-create/">
              NAT Gateway Tag-on-Create
            </a>
            , and{" "}
            <a href="https://aws.amazon.com/about-aws/whats-new/2021/11/aws-nat64-dns64-communication-ipv6-ipv4-services/">
              NAT64
            </a>
            , and mentoring interns through projects including{" "}
            <a href="https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-nat-gateway-allows-select-private-ip-address-network-address-translation/">
              Choose your Private IP on NAT Gateway
            </a>{" "}
            and{" "}
            <a href="https://aws.amazon.com/about-aws/whats-new/2021/06/aws-removes-nat-gateways-dependence-on-internet-gateway-for-private-communications/">
              Private NAT Gateway
            </a>
            . Through these multiple projects, I defined a new feature launch
            process to standardize our release cycle and make delivery timelines
            more predictable, which continues to be the standard for the team
            feature launches.
          </p>
          <p>
            I also drove significant operational improvements and revamps across
            our entire technical stack. This included significant automation in
            our region build processes, modernization of our EC2 Control Plane
            integration, and expansion of our integration test suites. These
            projects were mostly self-started. I identified pain points across
            the platform, bother customer and business needs, and implemented
            solutions to resolve them. These improvements set the standard by
            which the team still holds itself to in terms of operational
            posture.
          </p>
        </div>
        <div className="p-2">
          <h5>AWS Hyperplane</h5>
          <h6>2017-2022</h6>
          <p>
            AWS Hyperplane is the Distributed Network Functions Virtualization
            Platform that powers NAT Gateway, NLB, and EFS. I started my career
            on the Hyperplane Control Plane, growing from a junior engineer out
            of college to technical lead, becoming a subject matter expert on
            critical components for the platform.
          </p>
          <p>
            As a technical lead, I was responsible for creating or evaluating
            system designs to be incorporated within our existing components,
            performing implementation work, and delegating portions of the
            project to coworkers for completion. Publicly, this included the
            Hyperplane work to support the launch of{" "}
            <a href="https://aws.amazon.com/blogs/aws/new-udp-load-balancing-for-network-load-balancer/">
              UDP on NLB
            </a>
            .
          </p>
          <p>
            I also led the work on multiple internal features and optimizations
            for Hyperplane. I designed and implemented workflows to improve our
            utilization of EC2 capacity offerings. I created a system to
            maintain appropriate isolation between parts of our fleet to improve
            customer experience and reduce blast radius of potential customer
            impact. I also updated the internal processing system to improve
            health check propagations for AWS's Network Load Balancers. All of
            this work involved cross-organizational coordination and
            collaboration, requiring effective requirements and status
            communication.
          </p>
          <p>
            I also briefly served in a management position as well, leading a
            team of 5 engineers. This work included task prioritization, sprint
            planning, status communication, career development (successfully
            promoting two engineers), and leading the team's annual planning
            process.
          </p>
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
          <p>
            In the summer of 2016, I completed a 3 month internship at Boeing as
            part of their IT organization.
          </p>
        </div>
        <div className="p-2">
          <h5>Systems Integration</h5>
          <p>
            I worked in the Systems Integration department of Boeing's IT. While
            there, I reduced operating costs by creating a Powershell and C#
            application to automate the management of Windows servers. I advised
            and mentored fellow interns on their projects, helping them work
            through technical issues and identify design improvements. I also
            led a hackathon team that helped identify solutions for improvements
            to Boeing Factory processes.
          </p>
        </div>
      </Card>
      <Card>
        <div className="p-2">
          <h1>North Carolina State University</h1>
          <h2>
            B.S. Computer Science, B.A. Psychology, Minor in Cognitive Science
          </h2>
          <h3>Raleigh, North Carolina</h3>
          <h4>2013-2017</h4>
        </div>
      </Card>
    </span>
  );
}
