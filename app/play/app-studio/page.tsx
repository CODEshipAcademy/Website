import type { Metadata } from "next";
import { AppStudio } from "@/components/games/app-studio";

export const metadata: Metadata = {
  title: "App Studio — Build Your Own App",
  description: "Semester 3 game: design screens, wire up buttons and variables, see the real JavaScript, and download your own app.",
  alternates: { canonical: "/play/app-studio" },
};

export default function AppStudioPage() {
  return <AppStudio />;
}
