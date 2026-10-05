import React from "react";
import {
  Globe,
  Atom,
  Code2,
  Braces,
  Palette,
  FileCode2,
  Layers,
  Server,
  Database,
  Network,
} from "lucide-react";
import { AboutCategory } from "../@types/type";

export const aboutData: AboutCategory[] = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Developer",
        subtitle: "Next.js, React, TypeScript, JavaScript, Tailwind CSS",
        icons: [
          <span key="next" title="Next.js" className="inline-flex"><Globe size={24} /></span>,
          <span key="react" title="React" className="inline-flex"><Atom size={24} /></span>,
          <span key="ts" title="TypeScript" className="inline-flex"><Code2 size={24} /></span>,
          <span key="js" title="JavaScript" className="inline-flex"><Braces size={24} /></span>,
          <span key="tailwind" title="Tailwind CSS" className="inline-flex"><Palette size={24} /></span>,
          <span key="html" title="HTML5" className="inline-flex"><FileCode2 size={24} /></span>,
          <span key="css" title="CSS3" className="inline-flex"><Layers size={24} /></span>,
        ],
      },
      {
        title: "Backend & Web Systems",
        subtitle: "Laravel, PHP, RESTful APIs",
        icons: [
          <span key="laravel" title="Laravel" className="inline-flex"><Server size={24} /></span>,
          <span key="php" title="PHP" className="inline-flex"><Database size={24} /></span>,
        ],
      },
      {
        title: "Network & Infrastructure",
        subtitle: "Router, Switch, Access Point, Topology & Hardware Troubleshooting",
        icons: [
          <span key="network" title="Computer Networking" className="inline-flex"><Network size={24} /></span>,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer",
        subtitle: "PT. Data Integrasi Inovasi - Kota Tangerang, Banten",
        stage: "Apr 2026 - Okt 2026",
        description:
          "Berkontribusi di bidang Frontend Developer dalam membuat tampilan antarmuka modern dan responsif menggunakan React, Next.js, dan TypeScript.",
      },
      {
        title: "IT Programmer",
        subtitle: "PT. Buana Centra Swakarsa - Kota Cilegon, Banten",
        stage: "Okt 2026 - Apr 2026",
        description:
          "Berkontribusi di bidang IT Programmer meliputi perbaikan dan pengembangan sistem absensi, QC aplikasi mobile, pananganan masalah hardware dan sosialisasi penggunaan aplikasi kepada user.",
      },
      {
        title: "E-Government Frontend Developer",
        subtitle: "Diskominfo Kota Serang - Kota Serang, Banten",
        stage: "Jul 2024 - Agu 2024",
        description:
          "Merancang dan mengimplementasikan frontend website pemantauan CCTV Kota Serang guna meningkatkan aksesibilitas dan layanan publik pemantauan kota secara real-time.",
      },
      {
        title: "Teknisi Jaringan",
        subtitle: "Diskominfo Kota Serang - Kota Serang, Banten",
        stage: "Jan 2020 - Apr 2020",
        description:
          "Mengonfigurasi dan memelihara perangkat jaringan (router, switch, access point), merancang topologi, serta mendiagnosis permasalahan hardware & software.",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "S1 - Teknik Informatika (IPK 3.71)",
        subtitle: "STTIKOM INSAN UNGGUL CILEGON - Kota Cilegon, Banten",
        stage: "2021 - 2025",
        description:
          "Lulus dengan predikat sangat memuaskan (IPK 3.71 / 4.00). Fokus pada pengembangan sistem berbasis web, jaringan komputer, dan rekayasa perangkat lunak.",
      },
      {
        title: "SMK - Teknik Komputer dan Jaringan (Nilai 86)",
        subtitle: "SMK Negeri 1 Kota Serang - Kota Serang, Banten",
        stage: "2018 - 2021",
        description:
          "Mempelajari infrastruktur jaringan komputer, instalasi sistem operasi, routing & switching, dan perakitan perangkat keras komputer.",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Pengembangan Perangkat Lunak",
        subtitle: "Lembaga Sertifikasi Profesi (LSP) Telekomunikasi Informatika Nusantara",
        stage: "Agu 2025 - Agu 2028",
        description:
          "Sertifikasi kompetensi resmi bidang Software Development berstandar BNSP untuk pengembangan perangkat lunak berbasis web.",
      },
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: "Pencapaian Akademik S1 (IPK 3.71)",
        subtitle: "STTIKOM Insan Unggul Cilegon",
        stage: "2025",
        description:
          "Konsistensi prestasi akademik dan kemampuan berpikir analitis dengan menyelesaikan studi sarjana tepat waktu dengan IPK 3.71 dari skala 4.00.",
      },
      {
        title: "Anggota Dept. Penelitian dan Pengembangan",
        subtitle: "HAMKA STTIKOM Insan Unggul",
        stage: "2024",
        description:
          "Pengurus Himpunan Mahasiswa Komputer dan Akuntansi (1 Periode). Berperan merancang seminar teknologi, workshop, dan pelatihan kemahasiswaan.",
      },
    ],
  },
];
