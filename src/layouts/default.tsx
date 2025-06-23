import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen mx-auto" id="home">
      <Navbar />
      <main className="container mx-auto px-6 flex-grow py-16">{children}</main>
      <footer className="w-full flex items-center justify-center py-3 gap-1">
        <span className="text-default-600">Powered by</span>
        <p className="text-secondary">Richard Martin</p>
      </footer>
    </div>
  );
}
