import { ProjectItem, WorkSlide } from "../@types/type";

export const projectsData: ProjectItem[] = [
  {
    id: "serang-cctv",
    title: "Monitoring CCTV Kota Serang",
    category: "e-Government / Real-Time Video",
    coverImage: "/serang1.jpg",
    images: ["/serang1.jpg", "/serang2.jpg", "/serang3.jpg"],
    shortDesc:
      "Platform portal monitoring CCTV interaktif Kota Serang untuk memantau titik strategis fasilitas publik dan lalu lintas secara real-time.",
    fullDesc:
      "Aplikasi dashboard monitoring CCTV berbasis web yang dirancang dan diimplementasikan untuk Diskominfo Kota Serang guna meningkatkan transparansi, keamanan, dan aksesibilitas layanan publik. Portal ini menyajikan live stream video dari puluhan titik kamera CCTV strategis di penjuru kota dengan latensi rendah dan tampilan antarmuka yang intuitif dan responsif.",
    features: [
      "Streaming video multi-kamera CCTV secara real-time dengan latency rendah",
      "Pemetaan titik kamera interaktif berbasis peta digital wilayah Kota Serang",
      "Pencarian & filter kamera berdasarkan nama jalan, persimpangan, dan kecamatan",
      "Mode Grid View dan Fullscreen untuk pemantauan terpadu beresolusi tinggi",
      "Desain antarmuka responsif dan ramah pengguna di perangkat mobile maupun desktop",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    url: "https://github.com/EDR32",
    githubUrl: "https://github.com/EDR32",
  },
  {
    id: "ms-studio",
    title: "MS Studio",
    category: "Enterprise System / Laravel",
    coverImage: "/msstudio1.jpg",
    images: [
      "/msstudio1.jpg",
      "/msstudio2.jpg",
      "/msstudio3.jpg",
      "/msstudio4.jpg",
      "/msstudio5.jpg",
      "/msstudio6.jpg",
    ],
    shortDesc:
      "Sistem portal enterprise dan manajemen operasional studio berbasis Laravel dengan arsitektur modular dan antarmuka modern.",
    fullDesc:
      "Portal sistem manajemen operasional studio dan perusahaan berskala enterprise yang mengelola alur kerja, inventaris perangkat, transaksi sewa/booking, serta pelaporan keuangan secara terpusat. Dibangun dengan fokus pada efisiensi operasional bisnis, keamanan multi-role permission, dan visualisasi data yang komprehensif.",
    features: [
      "Sistem manajemen alur booking operasional dan reservasi studio terpusat",
      "Dashboard analitik performa bisnis dengan grafik transaksi berkala",
      "Autentikasi multi-role (Admin, Staff, Client) dengan permission bertingkat",
      "Manajemen inventaris peralatan dengan tracking status ketersediaan",
      "Pelaporan otomatis, ekspor data, dan integrasi database terstruktur",
    ],
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Chart.js",
      "RESTful API",
      "Blade / Modern UI",
    ],
    url: "https://github.com/EDR32",
    githubUrl: "https://github.com/EDR32",
  },
];

export const workSlides: { slides: WorkSlide[] } = {
  slides: [
    {
      images: [
        {
          title: "Monitoring CCTV Kota Serang",
          category: "e-Government / Real-Time Video",
          path: "/serang1.jpg",
          url: "https://github.com/EDR32",
        },
        {
          title: "Enterprise Frontend Portal",
          category: "Laravel",
          path: "/msstudio1.jpg",
          url: "https://github.com/EDR32",
        },
      ],
    },
  ],
};
