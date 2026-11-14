import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Developers Arcade — Coding Games for Kids | CODEship Academy",
    template: "%s | Developers Arcade · CODEship Academy",
  },
  description:
    "Free coding games for kids ages 9–11: write JavaScript to rescue a moon rover, train an AI bot with Python, and build your own app.",
};

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#161827] font-body text-white antialiased">{children}</div>;
}
