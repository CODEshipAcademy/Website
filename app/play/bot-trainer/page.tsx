import type { Metadata } from "next";
import { BotTrainer } from "@/components/games/bot-trainer";

export const metadata: Metadata = {
  title: "Bot Trainer — Python, Data & AI",
  description: "Semester 2 game: warm up with Python, train an AI sorting bot with data, and program it with if/elif rules.",
  alternates: { canonical: "/play/bot-trainer" },
};

export default function BotTrainerPage() {
  return <BotTrainer />;
}
