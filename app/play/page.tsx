import type { Metadata } from "next";
import { ArcadeHub } from "@/components/games/arcade-hub";

export const metadata: Metadata = {
  alternates: { canonical: "/play" },
};

export default function PlayPage() {
  return <ArcadeHub />;
}
