import Features from "@component/Features";
import Hero from "@component/Hero";
import { Inter } from "@next/font/google";
import { Button } from "@ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <Features />
    </main>
  );
}
