"use client";

import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

export const timelineData: TimelineEntry[] = [
  {
    title: "2026",
    content: (
      <div className="flex flex-col gap-y-6">
        {/* PT Data Integrasi Inovasi */}
        <div className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] group">
          {/* Bottom glowing beam line & inner gradient */}
          <div className="hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
          <div className="hidden dark:block absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/10 via-white/2 to-transparent pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent-darker dark:text-accent shrink-0" />
              Frontend Developer
            </h4>
            <span className="text-sm sm:text-sm text-black dark:text-accent bg-accent/25 dark:bg-accent/15 border border-accent/40 px-3 py-1 rounded-full font-bold">
              Apr 2026 - Okt 2026
            </span>
          </div>
          <div className="text-sm text-zinc-500 dark:text-white/60 mb-3 flex items-center gap-2 relative z-10">
            <span className="font-semibold text-zinc-800 dark:text-white/90">
              PT. Data Integrasi Inovasi
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-sm">
              <MapPin className="w-3.5 h-3.5 text-accent-darker dark:text-accent" /> Tangerang,
              Banten
            </span>
          </div>
          <p className="text-sm text-justify text-zinc-600 dark:text-white/70 leading-relaxed mb-4 relative z-10">
            Mengembangkan antarmuka aplikasi enterprise dan health-tech pada empat proyek utama:
            CRM, HRIS, SIM Klinik V2 dan Nuha.care berbasis React, Next.js dan TypeScript.
            Bertanggung jawab membangun komponen UI reusable, integrasi API backend, migrasi modul
            laporan operasional SIM Klinik, penambahan modul proposal SPH, tiket helpdesk dan log
            Open API pada CRM serta perbaikan bug tampilan dan fungsionalitas sistem.
          </p>
          <div className="flex flex-wrap gap-2 text-sm relative z-10">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API", "Clean Code"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2.5 py-1 rounded-md text-zinc-800 dark:text-white/80 font-medium text-sm sm:text-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        {/* PT Buana Centra Swakarsa */}
        <div className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] group">
          {/* Bottom glowing beam line & inner gradient */}
          <div className="hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
          <div className="hidden dark:block absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/10 via-white/2 to-transparent pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent-darker dark:text-accent shrink-0" />
              IT Programmer
            </h4>
            <span className="text-sm sm:text-sm text-black dark:text-accent bg-accent/25 dark:bg-accent/15 border border-accent/40 px-3 py-1 rounded-full font-bold">
              Okt 2025 - Apr 2026
            </span>
          </div>
          <div className="text-sm text-zinc-500 dark:text-white/60 mb-3 flex items-center gap-2 relative z-10">
            <span className="font-semibold text-zinc-800 dark:text-white/90">
              PT. Buana Centra Swakarsa
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-sm">
              <MapPin className="w-3.5 h-3.5 text-accent-darker dark:text-accent" /> Cilegon, Banten
            </span>
          </div>
          <p className="text-sm text-justify text-zinc-600 dark:text-white/70 leading-relaxed mb-4 relative z-10">
            Berkontribusi di bidang IT Programmer meliputi perbaikan dan pengembangan sistem
            absensi, QC aplikasi mobile, penanganan masalah hardware dan sosialisasi penggunaan
            aplikasi kepada user.
          </p>
          <div className="flex flex-wrap gap-2 text-sm relative z-10">
            {["Web Systems", "Mobile App QC", "Troubleshooting", "Hardware Maintenance"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2.5 py-1 rounded-md text-zinc-800 dark:text-white/80 font-medium text-sm sm:text-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024 - 2025",
    content: (
      <div className="flex flex-col gap-y-6">
        {/* S1 STTIKOM */}
        <div className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] group">
          {/* Bottom glowing beam line & inner gradient */}
          <div className="hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
          <div className="hidden dark:block absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/10 via-white/2 to-transparent pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent-darker dark:text-accent shrink-0" />
              S1 - Teknik Informatika (IPK 3.71)
            </h4>
            <span className="text-sm sm:text-sm text-black dark:text-accent bg-accent/25 dark:bg-accent/15 border border-accent/40 px-3 py-1 rounded-full font-bold">
              2021 - 2025
            </span>
          </div>
          <div className="text-sm text-zinc-500 dark:text-white/60 mb-3 flex items-center gap-2 relative z-10">
            <span className="font-semibold text-zinc-800 dark:text-white/90">
              STTIKOM Insan Unggul
            </span>
            <span>•</span>
            <span className="text-sm sm:text-sm text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded">
              IPK 3.71 / Sangat Memuaskan
            </span>
          </div>
          <p className="text-sm text-justify text-zinc-600 dark:text-white/70 leading-relaxed relative z-10">
            Lulus dengan predikat sangat memuaskan (IPK 3.71 / 4.00). Fokus pada pengembangan sistem
            berbasis web, jaringan komputer dan rekayasa perangkat lunak.
          </p>
        </div>

        {/* Diskominfo Kota Serang (E-Government) */}
        <div className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] group">
          {/* Bottom glowing beam line & inner gradient */}
          <div className="hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
          <div className="hidden dark:block absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/10 via-white/2 to-transparent pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent-darker dark:text-accent shrink-0" />
              E-Government Frontend Developer
            </h4>
            <span className="text-sm sm:text-sm text-black dark:text-accent bg-accent/25 dark:bg-accent/15 border border-accent/40 px-3 py-1 rounded-full font-bold">
              Jul 2024 - Agu 2024
            </span>
          </div>
          <div className="text-sm text-zinc-500 dark:text-white/60 mb-3 flex items-center gap-2 relative z-10">
            <span className="font-semibold text-zinc-800 dark:text-white/90">
              Diskominfo Kota Serang
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-sm">
              <MapPin className="w-3.5 h-3.5 text-accent-darker dark:text-accent" /> Kota Serang,
              Banten
            </span>
          </div>
          <p className="text-sm text-justify text-zinc-600 dark:text-white/70 leading-relaxed mb-4 relative z-10">
            Merancang dan mengimplementasikan frontend website pemantauan CCTV Kota Serang guna
            meningkatkan aksesibilitas dan layanan publik pemantauan kota secara real-time.
          </p>
          <div className="flex flex-wrap gap-2 text-sm relative z-10">
            {["Real-time Video CCTV", "Frontend Portal", "e-Government", "Public Service"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2.5 py-1 rounded-md text-zinc-800 dark:text-white/80 font-medium text-sm sm:text-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        {/* BNSP Credentials & Achievements */}
        <div className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] group">
          {/* Bottom glowing beam line & inner gradient */}
          <div className="hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
          <div className="hidden dark:block absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/10 via-white/2 to-transparent pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-accent-darker dark:text-accent shrink-0" />
              Sertifikasi BNSP &amp; Litbang HAMKA
            </h4>
            <span className="text-sm sm:text-sm text-black dark:text-accent bg-accent/25 dark:bg-accent/15 border border-accent/40 px-3 py-1 rounded-full font-bold">
              2024 - 2028
            </span>
          </div>
          <p className="text-sm text-justify text-zinc-600 dark:text-white/70 leading-relaxed relative z-10">
            Sertifikasi kompetensi resmi bidang Software Development berstandar BNSP untuk
            pengembangan perangkat lunak berbasis web, serta aktif sebagai pengurus Departemen
            Penelitian dan Pengembangan HAMKA STTIKOM Insan Unggul.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2018 - 2021",
    content: (
      <div className="flex flex-col gap-y-6">
        {/* Diskominfo Teknisi */}
        <div className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] group">
          {/* Bottom glowing beam line & inner gradient */}
          <div className="hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
          <div className="hidden dark:block absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/10 via-white/2 to-transparent pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent-darker dark:text-accent shrink-0" />
              Teknisi Jaringan
            </h4>
            <span className="text-sm sm:text-sm text-black dark:text-accent bg-accent/25 dark:bg-accent/15 border border-accent/40 px-3 py-1 rounded-full font-bold">
              Jan 2020 - Apr 2020
            </span>
          </div>
          <div className="text-sm text-zinc-500 dark:text-white/60 mb-3 flex items-center gap-2 relative z-10">
            <span className="font-semibold text-zinc-800 dark:text-white/90">
              Diskominfo Kota Serang
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-sm">
              <MapPin className="w-3.5 h-3.5 text-accent-darker dark:text-accent" /> Kota Serang,
              Banten
            </span>
          </div>
          <p className="text-sm text-justify text-zinc-600 dark:text-white/70 leading-relaxed mb-4 relative z-10">
            Mengonfigurasi dan memelihara perangkat jaringan (router, switch, access point),
            merancang topologi, serta mendiagnosis permasalahan hardware &amp; software.
          </p>
          <div className="flex flex-wrap gap-2 text-sm relative z-10">
            {["Router & Switch", "MikroTik", "Topologi Jaringan", "Diagnostic & Maintenance"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2.5 py-1 rounded-md text-zinc-800 dark:text-white/80 font-medium text-sm sm:text-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        {/* SMKN 1 Kota Serang */}
        <div className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] group">
          {/* Bottom glowing beam line & inner gradient */}
          <div className="hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
          <div className="hidden dark:block absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/10 via-white/2 to-transparent pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent-darker dark:text-accent shrink-0" />
              SMK - Teknik Komputer dan Jaringan
            </h4>
            <span className="text-sm sm:text-sm text-black dark:text-accent bg-accent/25 dark:bg-accent/15 border border-accent/40 px-3 py-1 rounded-full font-bold">
              2018 - 2021
            </span>
          </div>
          <div className="text-sm text-zinc-500 dark:text-white/60 mb-3 flex items-center gap-2 relative z-10">
            <span className="font-semibold text-zinc-800 dark:text-white/90">
              SMK Negeri 1 Kota Serang
            </span>
            <span>•</span>
            <span className="text-sm sm:text-sm text-black dark:text-accent font-bold bg-accent/20 dark:bg-accent/15 border border-accent/40 px-2 py-0.5 rounded">
              Nilai Akhir: 86
            </span>
          </div>
          <p className="text-sm text-justify text-zinc-600 dark:text-white/70 leading-relaxed relative z-10">
            Mempelajari infrastruktur jaringan komputer, instalasi sistem operasi, routing &amp;
            switching dan perakitan perangkat keras komputer.
          </p>
        </div>
      </div>
    ),
  },
];

export default function AboutTimeline() {
  return (
    <div className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
}
