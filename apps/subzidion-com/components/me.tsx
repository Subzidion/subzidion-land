import Image from "next/image";

export default function Me(): JSX.Element {
  return (
    <span>
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
    </span>
  );
}
