"use client";

import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

export const timelineData: TimelineEntry[] = [
  {
    title: "2026",
    content: (
      <div className="flex flex-col gap-y-6">
        {/* PT Data Integrasi Inovasi */}
        <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[rgba(89,65,169,0.22)] shadow-lg shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent shrink-0" />
              Frontend Developer
            </h4>
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-medium">
              Apr 2026 - Okt 2026
            </span>
          </div>
          <div className="text-sm text-white/60 mb-3 flex items-center gap-2">
            <span className="font-medium text-white/80">PT. Data Integrasi Inovasi</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-xs">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Tangerang, Banten
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-4">
            Berkontribusi di bidang Frontend Developer dalam membuat tampilan antarmuka modern dan responsif menggunakan React, Next.js, dan TypeScript.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
              <span key={tech} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-white/80 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* PT Buana Centra Swakarsa */}
        <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[rgba(89,65,169,0.22)] shadow-lg shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent shrink-0" />
              IT Programmer
            </h4>
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-medium">
              Okt 2025 - Apr 2026
            </span>
          </div>
          <div className="text-sm text-white/60 mb-3 flex items-center gap-2">
            <span className="font-medium text-white/80">PT. Buana Centra Swakarsa</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-xs">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Cilegon, Banten
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-4">
            Berkontribusi di bidang IT Programmer meliputi perbaikan dan pengembangan sistem absensi, QC aplikasi mobile, penanganan masalah hardware dan sosialisasi penggunaan aplikasi kepada user.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Web Systems", "Mobile App QC", "Troubleshooting", "Hardware Maintenance"].map((tech) => (
              <span key={tech} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-white/80 font-medium">
                {tech}
              </span>
            ))}
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
        <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[rgba(89,65,169,0.22)] shadow-lg shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent shrink-0" />
              S1 - Teknik Informatika (IPK 3.71)
            </h4>
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-medium">
              2021 - 2025
            </span>
          </div>
          <div className="text-sm text-white/60 mb-3 flex items-center gap-2">
            <span className="font-medium text-white/80">STTIKOM Insan Unggul</span>
            <span>•</span>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded">
              IPK 3.71 / Sangat Memuaskan
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Lulus dengan predikat sangat memuaskan (IPK 3.71 / 4.00). Fokus pada pengembangan sistem berbasis web, jaringan komputer, dan rekayasa perangkat lunak.
          </p>
        </div>

        {/* Diskominfo Kota Serang (E-Government) */}
        <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[rgba(89,65,169,0.22)] shadow-lg shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent shrink-0" />
              E-Government Frontend Developer
            </h4>
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-medium">
              Jul 2024 - Agu 2024
            </span>
          </div>
          <div className="text-sm text-white/60 mb-3 flex items-center gap-2">
            <span className="font-medium text-white/80">Diskominfo Kota Serang</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-xs">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Kota Serang, Banten
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-4">
            Merancang dan mengimplementasikan frontend website pemantauan CCTV Kota Serang guna meningkatkan aksesibilitas dan layanan publik pemantauan kota secara real-time.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Real-time Video CCTV", "Frontend Portal", "e-Government", "Public Service"].map((tech) => (
              <span key={tech} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-white/80 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BNSP Credentials & Achievements */}
        <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[rgba(89,65,169,0.22)] shadow-lg shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-accent shrink-0" />
              Sertifikasi BNSP &amp; Litbang HAMKA
            </h4>
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-medium">
              2024 - 2028
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Sertifikasi kompetensi resmi bidang Software Development berstandar BNSP untuk pengembangan perangkat lunak berbasis web, serta aktif sebagai pengurus Departemen Penelitian dan Pengembangan HAMKA STTIKOM Insan Unggul.
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
        <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[rgba(89,65,169,0.22)] shadow-lg shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent shrink-0" />
              Teknisi Jaringan
            </h4>
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-medium">
              Jan 2020 - Apr 2020
            </span>
          </div>
          <div className="text-sm text-white/60 mb-3 flex items-center gap-2">
            <span className="font-medium text-white/80">Diskominfo Kota Serang</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-xs">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Kota Serang, Banten
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-4">
            Mengonfigurasi dan memelihara perangkat jaringan (router, switch, access point), merancang topologi, serta mendiagnosis permasalahan hardware &amp; software.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Router & Switch", "MikroTik", "Topologi Jaringan", "Diagnostic & Maintenance"].map((tech) => (
              <span key={tech} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-white/80 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* SMKN 1 Kota Serang */}
        <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[rgba(89,65,169,0.22)] shadow-lg shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent shrink-0" />
              SMK - Teknik Komputer dan Jaringan
            </h4>
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-medium">
              2018 - 2021
            </span>
          </div>
          <div className="text-sm text-white/60 mb-3 flex items-center gap-2">
            <span className="font-medium text-white/80">SMK Negeri 1 Kota Serang</span>
            <span>•</span>
            <span className="text-xs text-accent font-semibold bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
              Nilai Akhir: 86
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Mempelajari infrastruktur jaringan komputer, instalasi sistem operasi, routing &amp; switching, dan perakitan perangkat keras komputer.
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
