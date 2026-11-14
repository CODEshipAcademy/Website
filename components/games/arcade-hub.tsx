"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BADGES, rankFor, setCoderName, useProgress, type GameId, type Progress } from "@/lib/games/progress";
import { ROVER_LEVELS } from "@/lib/games/rover";
import { PY_ROUNDS, RULE_CHALLENGES, TRAIN_ROUNDS } from "@/lib/games/bot";
import { MISSIONS } from "@/lib/games/studio";
import { Pill, RewardLayer, XpMeter, useDevFact } from "./arcade-kit";

interface SemesterGame {
  game: GameId;
  semester: string;
  focus: string;
  title: string;
  emoji: string;
  href: string;
  pitch: string;
  levels: string[];
  gradient: string;
  glow: string;
  lessons: { unit: string; where: string }[];
}

const GAMES: SemesterGame[] = [
  {
    game: "rover",
    semester: "Semester 1",
    focus: "JavaScript Foundations",
    title: "Rover Rescue",
    emoji: "🛰️",
    href: "/play/rover-rescue",
    pitch: "Write real JavaScript to guide a stranded moon rover home. Every mission unlocks a new coding superpower.",
    levels: ROVER_LEVELS.map((l) => l.id),
    gradient: "from-[#2b3a8f] via-[#25306b] to-[#1b1e33]",
    glow: "shadow-[0_30px_80px_-30px_rgba(96,165,250,0.7)]",
    lessons: [
      { unit: "Sequencing & commands", where: "Missions 1–3" },
      { unit: "For loops & patterns", where: "Missions 4–5" },
      { unit: "Functions", where: "Mission 6" },
      { unit: "Conditionals (if)", where: "Mission 7" },
      { unit: "While loops & sensors", where: "Mission 8" },
      { unit: "Variables", where: "Mission 9" },
      { unit: "Debugging", where: "Mission 10" },
    ],
  },
  {
    game: "bot",
    semester: "Semester 2",
    focus: "Python, Data & AI",
    title: "Bot Trainer",
    emoji: "🤖",
    href: "/play/bot-trainer",
    pitch: "Warm up with Python, then train Sortie the sorting bot with data — and discover how AI really learns.",
    levels: [...PY_ROUNDS.map((r) => r.id), ...TRAIN_ROUNDS.map((r) => r.id), ...RULE_CHALLENGES.map((r) => r.id)],
    gradient: "from-[#4b2b8f] via-[#33276b] to-[#1b1e33]",
    glow: "shadow-[0_30px_80px_-30px_rgba(167,139,250,0.7)]",
    lessons: [
      { unit: "Python basics: print, variables, strings", where: "Warm-up 1" },
      { unit: "Lists, loops & range", where: "Warm-up 2" },
      { unit: "if / elif, dictionaries, functions", where: "Warm-up 3" },
      { unit: "Training data, labels & testing", where: "Teach the Bot" },
      { unit: "Bias & diverse datasets", where: "Smart Data" },
      { unit: "Rule-based logic", where: "Sorting Rules" },
      { unit: "Comparison operators", where: "Ride Checker" },
    ],
  },
  {
    game: "studio",
    semester: "Semester 3",
    focus: "App Development",
    title: "App Studio",
    emoji: "📱",
    href: "/play/app-studio",
    pitch: "Build your own app! Design screens, wire up buttons, store data — then download your app and share it.",
    levels: MISSIONS.map((m) => m.id),
    gradient: "from-[#8f2b6b] via-[#5e2757] to-[#1b1e33]",
    glow: "shadow-[0_30px_80px_-30px_rgba(244,114,182,0.7)]",
    lessons: [
      { unit: "Events & variables", where: "Clicker Champ" },
      { unit: "Random numbers & state", where: "Dice Roller" },
      { unit: "User input, lists & arrays", where: "Mood Journal" },
      { unit: "State, meters & conditions", where: "Virtual Pet" },
      { unit: "Product design & shipping", where: "Free build + download" },
    ],
  },
];

function starsIn(p: Progress, g: SemesterGame) {
  return g.levels.reduce((s, id) => s + (p.stars[`${g.game}:${id}`] ?? 0), 0);
}

function NameTag() {
  const p = useProgress();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  useEffect(() => setDraft(p.coderName), [p.coderName]);

  if (editing || !p.coderName) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCoderName(draft.trim());
          setEditing(false);
        }}
        className="flex flex-wrap items-center gap-2"
      >
        <label htmlFor="coder-name" className="text-sm font-semibold text-white/70">
          Pick a coder name:
        </label>
        <input
          id="coder-name"
          value={draft}
          maxLength={24}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="e.g. PixelNinja"
          className="w-44 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-white/35 focus:border-yellow"
        />
        <button type="submit" className="focus-ring rounded-xl bg-yellow px-3 py-2 text-sm font-bold text-navy">
          Save
        </button>
        <span className="w-full text-[11px] text-white/40">Use a fun nickname — not your real name.</span>
      </form>
    );
  }
  return (
    <p className="text-lg text-white/80">
      Welcome back, <strong className="text-yellow">{p.coderName}</strong>!{" "}
      <button type="button" onClick={() => setEditing(true)} className="focus-ring rounded text-xs text-white/40 underline hover:text-white">
        change
      </button>
    </p>
  );
}

export function ArcadeHub() {
  const p = useProgress();
  const { current, index } = rankFor(p.xp);
  const fact = useDevFact();

  return (
    <div className="relative overflow-hidden">
      <RewardLayer />
      {/* starfield */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden style={{ backgroundImage: "radial-gradient(1px 1px at 20% 30%, #fff8 50%, transparent 51%), radial-gradient(1px 1px at 70% 20%, #fff6 50%, transparent 51%), radial-gradient(1.5px 1.5px at 40% 70%, #fff5 50%, transparent 51%), radial-gradient(1px 1px at 85% 60%, #fff7 50%, transparent 51%), radial-gradient(1px 1px at 10% 85%, #fff5 50%, transparent 51%)", backgroundSize: "380px 380px" }} />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-supportBlue/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-pink-500/15 blur-3xl" aria-hidden />

      <header className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/en" className="focus-ring rounded-md font-display text-2xl tracking-wide text-white">
            CODEship <span className="text-yellow">Academy</span>
          </Link>
          <Link href="/en/programs" className="focus-ring rounded-lg px-3 py-1.5 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white">
            Programs →
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-4 pb-6 pt-12 md:px-6 md:pt-16">
        <div className="grid items-end gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Pill tone="yellow">Developers program · Ages 9–11</Pill>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 font-display text-6xl leading-[0.9] tracking-wide text-white md:text-8xl">
              Developers <span className="bg-gradient-to-r from-yellow via-amber-300 to-pink-400 bg-clip-text text-transparent">Arcade</span>
            </motion.h1>
            <p className="mt-4 max-w-xl text-lg text-white/75">
              One game for every semester. Write real code, train real AI, build real apps — and level up from Rookie Coder to Lead Developer.
            </p>
            <div className="mt-6">
              <NameTag />
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow/40 to-pink-400/30 text-4xl" aria-hidden>
                {current.emoji}
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Rank {index + 1}</p>
                <p className="font-display text-3xl tracking-wide text-white">{current.title}</p>
              </div>
            </div>
            <div className="mt-4">
              <XpMeter />
            </div>
            <p className="mt-3 text-xs text-white/45">🔒 Progress saves on this device only — no account, no personal info.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-8 md:px-6" aria-labelledby="games-heading">
        <h2 id="games-heading" className="sr-only">
          Semester games
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {GAMES.map((g, i) => {
            const stars = starsIn(p, g);
            const max = g.levels.length * 3;
            return (
              <motion.div key={g.game} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }} whileHover={{ y: -6 }}>
                <Link href={g.href} className={`focus-ring group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b ${g.gradient} p-6 ${g.glow}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow">{g.semester}</p>
                      <p className="text-sm font-semibold text-white/70">{g.focus}</p>
                    </div>
                    <motion.span className="text-6xl drop-shadow-lg" aria-hidden whileHover={{ rotate: [0, -12, 12, 0] }}>
                      {g.emoji}
                    </motion.span>
                  </div>
                  <h3 className="mt-4 font-display text-5xl leading-none tracking-wide text-white">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{g.pitch}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {g.lessons.slice(0, 5).map((l) => (
                      <li key={l.unit}>
                        <Pill>{l.unit.split(":")[0].split(",")[0]}</Pill>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between text-xs font-semibold text-white/60">
                      <span>
                        ★ {stars} / {max}
                      </span>
                      <span>{Math.round((stars / max) * 100)}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-black/30">
                      <div className="h-full rounded-full bg-gradient-to-r from-yellow to-emerald-300 transition-all" style={{ width: `${(stars / max) * 100}%` }} />
                    </div>
                    <span className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-yellow py-3 font-display text-2xl tracking-wider text-navy transition group-hover:brightness-110">
                      {stars ? "Continue" : "Play"} <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-10 md:px-6" aria-labelledby="badges-heading">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 id="badges-heading" className="font-display text-4xl tracking-wide text-white">
            Badge wall
          </h2>
          <p className="text-sm text-white/55">
            {p.badges.length} / {BADGES.length} unlocked · each badge is worth +100 XP
          </p>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {BADGES.map((b) => {
            const has = p.badges.includes(b.id);
            return (
              <li key={b.id} className={`rounded-2xl border p-4 text-center transition ${has ? "border-yellow/40 bg-gradient-to-b from-yellow/15 to-transparent" : "border-white/10 bg-white/[0.03]"}`}>
                <span className={`text-4xl ${has ? "" : "opacity-25 grayscale"}`} aria-hidden>
                  {b.emoji}
                </span>
                <p className={`mt-2 text-sm font-bold ${has ? "text-white" : "text-white/45"}`}>{b.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-white/45">{b.description}</p>
                <span className="sr-only">{has ? "Unlocked" : "Locked"}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center text-white/70">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Did you know?</p>
          <p className="mt-1 text-lg">{fact}</p>
        </div>

        <details className="group mt-6 rounded-3xl border border-white/10 bg-[#1b1e33] p-5">
          <summary className="cursor-pointer list-none font-display text-2xl tracking-wide text-white">
            <span className="mr-2 inline-block text-yellow transition group-open:rotate-90">▸</span>
            For instructors & families: how each game lines up with lessons
          </summary>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {GAMES.map((g) => (
              <div key={g.game}>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow">
                  {g.semester} · {g.focus}
                </p>
                <p className="font-bold text-white">
                  {g.emoji} {g.title}
                </p>
                <table className="mt-2 w-full text-left text-sm">
                  <thead className="sr-only">
                    <tr>
                      <th>Lesson unit</th>
                      <th>Where it's practised</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.lessons.map((l) => (
                      <tr key={l.unit} className="border-t border-white/5">
                        <td className="py-1.5 pr-2 text-white/80">{l.unit}</td>
                        <td className="py-1.5 text-right text-xs text-white/50">{l.where}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/45">
            Rover Rescue has an “Instructor mode” toggle that unlocks every mission for live demos. Progress and apps are stored only in this browser.
          </p>
        </details>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-r from-supportBlue/40 to-pink-500/20 p-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-3xl tracking-wide text-white">Want to build this with a real instructor?</p>
            <p className="text-sm text-white/70">The Developers program (ages 9–11) runs in small, inclusive live classes.</p>
          </div>
          <Link href="/register/developers" className="focus-ring shrink-0 rounded-2xl bg-yellow px-6 py-3 font-bold text-navy">
            Explore the Developers program
          </Link>
        </div>
      </section>
    </div>
  );
}
