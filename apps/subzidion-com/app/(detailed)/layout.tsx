import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DetailedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
      <div className="col-span-2">
        <Navbar />
        <Sidebar />
      </div>
      <div className="col-span-4 lg:overflow-auto">{children}</div>
    </main>
  );
}
