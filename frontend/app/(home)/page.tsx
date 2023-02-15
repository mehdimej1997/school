import { Inter } from "@next/font/google";
import { Button } from "@ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Button intent={"warning"}></Button>
    </main>
  );
}
