import { PROGRAM_LINKS, ProgramLevel } from "@/lib/payment-links";

interface EnrollButtonProps {
  program: ProgramLevel;
  label?: string;
}

export function EnrollButton({ program, label = "Register Now" }: EnrollButtonProps) {
  const config = PROGRAM_LINKS[program];

  return (
    <a
      href={config.url}
      style={{
        display: "inline-block",
        padding: "16px 28px",
        borderRadius: "10px",
        background: "#F5C518",
        color: "#0D1B2A",
        fontWeight: 700,
        fontSize: "16px",
        textDecoration: "none",
        textAlign: "center",
      }}
    >
      {label}
    </a>
  );
}
