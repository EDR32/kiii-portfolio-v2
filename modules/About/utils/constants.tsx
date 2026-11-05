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
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { AboutCategory, CounterItem, TimelineGroup } from "../@types/type";
import { TimelineCardItem } from "@/modules/About/@types/type";

export const getTimelineIcon = (type: TimelineCardItem["iconType"]) => {
  switch (type) {
    case "work":
      return <Briefcase className="w-5 h-5 text-accent shrink-0" />;
    case "education":
      return <GraduationCap className="w-5 h-5 text-accent shrink-0" />;
    case "award":
      return <Award className="w-5 h-5 text-accent shrink-0" />;
  }
};

export const aboutData: AboutCategory[] = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Developer",
        subtitle: "Next.js, React, TypeScript, JavaScript, Tailwind CSS",
        icons: [
          <span key="next" title="Next.js" className="inline-flex">
            <Globe size={24} />
          </span>,
          <span key="react" title="React" className="inline-flex">
            <Atom size={24} />
          </span>,
          <span key="ts" title="TypeScript" className="inline-flex">
            <Code2 size={24} />
          </span>,
          <span key="js" title="JavaScript" className="inline-flex">
            <Braces size={24} />
          </span>,
          <span key="tailwind" title="Tailwind CSS" className="inline-flex">
            <Palette size={24} />
          </span>,
          <span key="html" title="HTML5" className="inline-flex">
            <FileCode2 size={24} />
          </span>,
          <span key="css" title="CSS3" className="inline-flex">
            <Layers size={24} />
          </span>,
        ],
      },
      {
        title: "Backend & Web Systems",
        subtitle: "Laravel, PHP, RESTful APIs",
        icons: [
          <span key="laravel" title="Laravel" className="inline-flex">
            <Server size={24} />
          </span>,
          <span key="php" title="PHP" className="inline-flex">
            <Database size={24} />
          </span>,
        ],
      },
      {
        title: "Network & Infrastructure",
        subtitle: "Router, Switch, Access Point, Topology & Hardware Troubleshooting",
        icons: [
          <span key="network" title="Computer Networking" className="inline-flex">
            <Network size={24} />
          </span>,
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

export const aboutBioData = {
  title: {
    prefix: "Crafting ",
    highlight: "modern interfaces",
    suffix: " with engineering precision.",
  },
  description:
    "Lulusan S1 Teknik Informatika STTIKOM Insan Unggul dengan fokus di bidang Frontend Web Development. Berpengalaman mengembangkan antarmuka aplikasi enterprise dan health-tech seperti sistem informasi manajemen klinik, CRM portal, HRIS serta portal pemantauan CCTV berbasis HTML, CSS, React, Next.js dan TypeScript.",
};

export const aboutTimelineHeaderData = {
  title: {
    prefix: "Career & ",
    highlight: "Academic Journey",
  },
  description:
    "Rangkuman perjalanan karier, riwayat pendidikan, sertifikasi kompetensi serta kontribusi proyek yang membentuk keahlian teknis saya sampai saat ini.",
};

export const aboutCountersData: CounterItem[] = [
  {
    value: 3.71,
    decimals: 2,
    label: "IPK / GPA (Scale 4.0)",
  },
  {
    value: 4,
    suffix: " +",
    label: "Years Tech Journey",
  },
  {
    value: 15,
    suffix: " +",
    label: "Projects & Repos",
  },
  {
    value: 2,
    suffix: " +",
    label: "Certified Credentials",
  },
];

export const timelineGroupsData: TimelineGroup[] = [
  {
    year: "2026",
    items: [
      {
        iconType: "work",
        title: "Frontend Developer",
        period: "Apr 2026 - Okt 2026",
        organization: "PT. Data Integrasi Inovasi",
        location: "Tangerang, Banten",
        description:
          "Mengembangkan antarmuka aplikasi enterprise dan health-tech pada empat proyek utama: CRM, HRIS, SIM Klinik V2 dan Nuha.care berbasis React, Next.js dan TypeScript. Bertanggung jawab membangun komponen UI reusable, integrasi API backend, migrasi modul laporan operasional SIM Klinik, penambahan modul proposal SPH, tiket helpdesk dan log Open API pada CRM serta perbaikan bug tampilan dan fungsionalitas sistem.",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API", "Clean Code"],
      },
      {
        iconType: "work",
        title: "IT Programmer",
        period: "Okt 2025 - Apr 2026",
        organization: "PT. Buana Centra Swakarsa",
        location: "Cilegon, Banten",
        description:
          "Berkontribusi di bidang IT Programmer meliputi perbaikan dan pengembangan sistem absensi, QC aplikasi mobile, penanganan masalah hardware dan sosialisasi penggunaan aplikasi kepada user.",
        skills: ["Web Systems", "Mobile App QC", "Troubleshooting", "Hardware Maintenance"],
      },
    ],
  },
  {
    year: "2024 - 2025",
    items: [
      {
        iconType: "education",
        title: "S1 - Teknik Informatika (IPK 3.71)",
        period: "2021 - 2025",
        organization: "STTIKOM Insan Unggul",
        highlight: "IPK 3.71 / Sangat Memuaskan",
        highlightVariant: "emerald",
        description:
          "Lulus dengan predikat sangat memuaskan (IPK 3.71 / 4.00). Fokus pada pengembangan sistem berbasis web, jaringan komputer dan rekayasa perangkat lunak.",
      },
      {
        iconType: "work",
        title: "E-Government Frontend Developer",
        period: "Jul 2024 - Agu 2024",
        organization: "Diskominfo Kota Serang",
        location: "Kota Serang, Banten",
        description:
          "Merancang dan mengimplementasikan frontend website pemantauan CCTV Kota Serang guna meningkatkan aksesibilitas dan layanan publik pemantauan kota secara real-time.",
        skills: ["Real-time Video CCTV", "Frontend Portal", "e-Government", "Public Service"],
      },
      {
        iconType: "award",
        title: "Sertifikasi BNSP & Litbang HAMKA",
        period: "2024 - 2028",
        description:
          "Sertifikasi kompetensi resmi bidang Software Development berstandar BNSP untuk pengembangan perangkat lunak berbasis web, serta aktif sebagai pengurus Departemen Penelitian dan Pengembangan HAMKA STTIKOM Insan Unggul.",
      },
    ],
  },
  {
    year: "2018 - 2021",
    items: [
      {
        iconType: "work",
        title: "Teknisi Jaringan",
        period: "Jan 2020 - Apr 2020",
        organization: "Diskominfo Kota Serang",
        location: "Kota Serang, Banten",
        description:
          "Mengonfigurasi dan memelihara perangkat jaringan (router, switch, access point), merancang topologi, serta mendiagnosis permasalahan hardware & software.",
        skills: ["Router & Switch", "MikroTik", "Topologi Jaringan", "Diagnostic & Maintenance"],
      },
      {
        iconType: "education",
        title: "SMK - Teknik Komputer dan Jaringan",
        period: "2018 - 2021",
        organization: "SMK Negeri 1 Kota Serang",
        highlight: "Nilai Akhir: 86",
        highlightVariant: "accent",
        description:
          "Mempelajari infrastruktur jaringan komputer, instalasi sistem operasi, routing & switching dan perakitan perangkat keras komputer.",
      },
    ],
  },
];
