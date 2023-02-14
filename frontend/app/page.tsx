import { Inter } from "@next/font/google";
import { Button } from "@ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main>
      <Button intent={"primary"}></Button>
    </main>
  );
}
