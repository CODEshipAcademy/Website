"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale; type: "general" | "parent" | "school" | "franchise" | "media" | "newsletter" };

export function InquiryForm({ locale, type }: Props) {
  const fr = locale === "fr";
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus("");
    const payload = {
      type,
      locale,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      cityProvince: String(formData.get("cityProvince") || ""),
      organization: String(formData.get("organization") || ""),
      message: String(formData.get("message") || ""),
      investmentRange: String(formData.get("investmentRange") || ""),
      timeline: String(formData.get("timeline") || ""),
      consentPrivacy: formData.get("consentPrivacy") === "on",
      consentCasl: formData.get("consentCasl") === "on",
      consentBackground: formData.get("consentBackground") === "on",
      retentionTag: String(formData.get("retentionTag") || "p2y")
    };

    const res = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const json = await res.json();
    setLoading(false);
    if (!json.ok) setStatus((json.errors || []).join(" "));
    else setStatus(fr ? "Merci. Votre demande a été envoyée." : "Thank you. Your inquiry has been submitted.");
  }

  return (
    <motion.form action={onSubmit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-3">
        {[
          ["name", fr ? "Nom" : "Name"],
          ["email", "Email"],
          ["phone", fr ? "Téléphone" : "Phone"],
          ["cityProvince", fr ? "Ville / Province" : "City / Province"],
          ["organization", fr ? "École / Organisation" : "School / Organization"]
        ].map(([id, label]) => (
          <label key={id} className="text-sm font-semibold text-navy">
            {label}
            <input name={id} className="focus-ring mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
        ))}
        {type === "franchise" && (
          <>
            <label className="text-sm font-semibold text-navy">{fr ? "Fourchette d'investissement" : "Available investment range"}<input name="investmentRange" className="focus-ring mt-1 w-full rounded-md border border-slate-300 px-3 py-2" /></label>
            <label className="text-sm font-semibold text-navy">{fr ? "Échéancier de lancement" : "Timeline to launch"}<input name="timeline" className="focus-ring mt-1 w-full rounded-md border border-slate-300 px-3 py-2" /></label>
          </>
        )}
        <label className="text-sm font-semibold text-navy">{fr ? "Message" : "Message"}<textarea name="message" rows={4} className="focus-ring mt-1 w-full rounded-md border border-slate-300 px-3 py-2" /></label>
        <label className="text-sm font-semibold text-navy">{fr ? "Étiquette de conservation" : "Retention tag"}
          <select name="retentionTag" className="focus-ring mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
            <option value="p1y">{fr ? "1 an" : "1 year"}</option>
            <option value="p2y">{fr ? "2 ans" : "2 years"}</option>
            <option value="p5y">{fr ? "5 ans" : "5 years"}</option>
          </select>
        </label>
        <label className="flex items-start gap-2 text-sm text-slate-700"><input type="checkbox" name="consentPrivacy" className="mt-1" />{fr ? "Je consens à la Politique de confidentialité et au traitement des données." : "I consent to the Privacy Policy and data processing."}</label>
        <label className="flex items-start gap-2 text-sm text-slate-700"><input type="checkbox" name="consentCasl" className="mt-1" />{fr ? "Je consens à recevoir des communications selon la LCAP (CASL)." : "I consent to receive communications under CASL."}</label>
        {type === "franchise" && <label className="flex items-start gap-2 text-sm text-slate-700"><input type="checkbox" name="consentBackground" className="mt-1" />{fr ? "J'accepte la vérification d'antécédents requise." : "I acknowledge required background check screening."}</label>}
        <button disabled={loading} className="focus-ring rounded-md bg-navy px-4 py-3 font-semibold text-white">{loading ? (fr ? "Envoi..." : "Submitting...") : (fr ? "Envoyer" : "Submit")}</button>
        {status && <p className="text-sm text-supportBlue">{status}</p>}
      </div>
    </motion.form>
  );
}
