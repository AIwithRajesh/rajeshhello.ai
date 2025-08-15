import Hero from "@/components/Hero";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <MaxWithWrapper>
      <main className="flex gap-10">
        <Sidebar />
        <Hero />
      </main>
    </MaxWithWrapper>
  );
}
