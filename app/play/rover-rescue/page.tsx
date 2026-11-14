import type { Metadata } from "next";
import { RoverRescue } from "@/components/games/rover-rescue";

export const metadata: Metadata = {
  title: "Rover Rescue — Learn JavaScript",
  description: "Semester 1 game: write real JavaScript — loops, functions, conditionals and variables — to guide a moon rover home.",
  alternates: { canonical: "/play/rover-rescue" },
};

export default function RoverRescuePage() {
  return <RoverRescue />;
}
