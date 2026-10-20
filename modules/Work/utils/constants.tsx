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
    id: "crm-portal",
    title: "CRM Portal",
    category: "CRM Portal / Sistem Internal",
    coverImage: "/crm/crm-news-stats.jpeg",
    images: [
      "/crm/crm-news-stats.jpeg",
      "/crm/crm-detail-ticket.jpeg",
      "/crm/crm-contractpks.jpeg",
      "/crm/crm-proposalsph.jpeg",
      "/crm/crm-articles-library.jpeg",
      "/crm/crm-news-library.jpeg",
      "/crm/crm-blogs-library.jpeg",
      "/crm/crm-openapi.jpeg",
      "/crm/crm-articles-setting.jpeg",
      "/crm/crm-blogs-order.jpeg",
      "/crm/crm-blogs.jpeg",
    ],
    shortDesc:
      "Platform enterprise CRM & CMS komprehensif untuk tata kelola kontrak PKS, pengajuan proposal SPH, customer ticketing, serta analitik berita & artikel.",
    fullDesc:
      "Platform enterprise terpadu yang memadukan Customer Relationship Management (CRM) dan Content Management System (CMS) berskala besar. Sistem ini memfasilitasi administrasi legalitas kontrak kerja sama (PKS), penerbitan Surat Penawaran Harga (SPH), pengelolaan tiket kendala pelanggan (Helpdesk), serta sistem manajemen konten artikel dan berita lengkap dengan dashboard analitik performa traffic dan Open API.",
    features: [
      "Manajemen kontrak kerja sama (PKS) dan otomasi pembuatan proposal SPH digital",
      "Sistem helpdesk & detail ticketing terstruktur untuk tindak lanjut keluhan klien",
      "Dashboard analitik berita & artikel dengan visualisasi statistik pembaca dan interaksi",
      "Content Management System (CMS) modular untuk library artikel, berita, dan blog",
      "Modul integrasi Open API untuk sinkronisasi data antar platform dan pihak ketiga",
      "Manajemen hak akses pengguna dan pengaturan alur persetujuan (approval flow)",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "RESTful API",
      "Chart.js",
      "Lucide Icons",
    ],
    url: "https://github.com/EDR32",
    githubUrl: "https://github.com/EDR32",
  },
  {
    id: "eventws",
    title: "EventWS - Event Fast Tournament",
    category: "Fast Tournament Management",
    coverImage: "/eventws/eventws-alzz.jpeg",
    images: [
      "/eventws/eventws-alzz.jpeg",
      "/eventws/eventws-alzz2.jpeg",
      "/eventws/eventws-alzz3.jpeg",
      "/eventws/eventws-dikzz.jpeg",
    ],
    shortDesc:
      "Platform manajemen tournament dan reservasi tiket online interaktif yang memudahkan pengunjung mengeksplorasi tournament dengan cepat dan mudah.",
    fullDesc:
      "Aplikasi web pemesanan dan manajemen tournament (Tournament & Ticketing Platform) yang dirancang untuk memberikan pengalaman reservasi tiket yang mulus dan cepat. Dilengkapi dengan katalog tournament terorganisir berdasarkan kategori, detail lineup pengisi acara, pemilihan kategori tiket, ringkasan transaksi, serta verifikasi e-ticket digital.",
    features: [
      "Katalog tournament interaktif dengan filter kategori, jadwal tanggal tournament",
      "Sistem alur pemesanan tiket dengan pilihan tier/kategori dan kalkulasi harga otomatis",
      "Detail informasi tournament lengkap dengan agenda rundown, performer lineup, dan venue map",
      "Konfirmasi pesanan instan dengan penerbitan e-ticket dan ringkasan pembayaran",
      "Antarmuka modern dan responsif yang optimal diakses dari smartphone maupun desktop",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "RESTful API",
    ],
    url: "https://github.com/EDR32",
    githubUrl: "https://github.com/EDR32",
  },
  {
    id: "nuha-klinik",
    title: "Nuha Klinik V2",
    category: "Healthcare / Clinic Management System",
    coverImage: "/nuha-klinik/klinik-laporan.png",
    images: [
      "/nuha-klinik/klinik-laporan.png",
      "/nuha-klinik/klinik-kas.png",
      "/nuha-klinik/klinik-detail-permintaan.png",
    ],
    shortDesc:
      "Sistem informasi manajemen klinik kesehatan untuk monitoring arus kas keuangan, pelaporan rekapitulasi operasional medis dan tracking logistik permintaan obat.",
    fullDesc:
      "Sistem Informasi Manajemen (SIM) Klinik yang dikembangkan khusus untuk memodernisasi tata kelola operasional dan keuangan klinik Nuha. Sistem ini mengintegrasikan pencatatan kas masuk dan kas keluar harian, verifikasi permintaan kebutuhan logistik medis antar divisi, serta dashboard pelaporan keuangan berkala yang akurat untuk mendukung pengambilan keputusan manajemen.",
    features: [
      "Dashboard pelaporan berkala dengan rekapitulasi transaksi pendapatan & pengeluaran operasional",
      "Pencatatan kas masuk dan kas keluar terstruktur dengan bukti transaksi dan status verifikasi",
      "Modul tracking detail permintaan obat dan pengadaan persediaan logistik medis",
      "Pencarian, filter rentang tanggal dan ekspor data laporan rekapitulasi keuangan",
      "Desain antarmuka yang bersih, mudah digunakan staf administrasi medis",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "RESTful API",
      "Lucide React",
    ],
    url: "https://github.com/EDR32",
    githubUrl: "https://github.com/EDR32",
  },
  {
    id: "ms-studio",
    title: "MS Studio",
    category: "Enterprise System / TA Project",
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
          title: "CRM Portal",
          category: "CRM Portal / Sistem Internal",
          path: "/crm/crm-news-stats.jpeg",
          url: "https://github.com/EDR32",
        },
        {
          title: "EventWS - Event & Ticket Booking",
          category: "Fast Tournament Management",
          path: "/eventws/eventws-alzz.jpeg",
          url: "https://github.com/EDR32",
        },
        {
          title: "Nuha Klinik - SIM Operasional & Keuangan",
          category: "Healthcare / Clinic Management System",
          path: "/nuha-klinik/klinik-laporan.png",
          url: "https://github.com/EDR32",
        },
        {
          title: "MS Studio",
          category: "Enterprise System / TA Project",
          path: "/msstudio1.jpg",
          url: "https://github.com/EDR32",
        },
      ],
    },
  ],
};
