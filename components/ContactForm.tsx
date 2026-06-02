"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0].title,
    location: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Halo ${site.name}, saya ingin memesan layanan.%0A%0A` +
      `*Nama:* ${form.name}%0A` +
      `*No. HP:* ${form.phone}%0A` +
      `*Layanan:* ${form.service}%0A` +
      `*Lokasi:* ${form.location}%0A` +
      `*Keluhan:* ${form.message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-line bg-sand px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-ink-soft/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-xl font-extrabold tracking-tight text-ink">Kirim Permintaan</h3>
      <p className="mt-1 text-sm text-ink-soft">
        Isi form di bawah, pesan Anda akan diteruskan langsung ke WhatsApp kami.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold text-ink">Nama Lengkap</label>
          <input required value={form.name} onChange={update("name")} placeholder="Nama Anda" className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold text-ink">No. WhatsApp / HP</label>
          <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="08xx xxxx xxxx" className={field} />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold text-ink">Layanan</label>
          <select value={form.service} onChange={update("service")} className={field}>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold text-ink">Lokasi / Area</label>
          <input required value={form.location} onChange={update("location")} placeholder="Mis. Denpasar, Canggu" className={field} />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-bold text-ink">Keluhan / Pesan</label>
        <textarea
          required
          value={form.message}
          onChange={update("message")}
          rows={4}
          placeholder="Ceritakan masalah yang Anda alami…"
          className={field}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-105"
      >
        <IconWhatsApp className="h-5 w-5" />
        Kirim via WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        Dengan mengirim, Anda akan diarahkan ke WhatsApp untuk konfirmasi.
      </p>
    </form>
  );
}
