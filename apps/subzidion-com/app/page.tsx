import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home(): JSX.Element {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-4 col-start-5">
        <Navbar />
        <Sidebar />
      </div>
    </main>
  );
}
