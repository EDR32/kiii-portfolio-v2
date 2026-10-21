import { ProjectItem, WorkSlide } from "../@types/type";

export const projectsData: ProjectItem[] = [
  {
    id: "serang-cctv",
    title: "Monitoring CCTV Kota Serang",
    category: "e-Government / Real-Time Video",
    coverImage: "/serang1.jpg",
    images: ["/serang1.jpg", "/serang2.jpg", "/serang3.jpg"],
    shortDesc:
      "Platform portal monitoring CCTV interaktif Kota Serang untuk memantau titik strategis fasilitas publik dan lalu lintas perkotaan.",
    fullDesc:
      "Aplikasi dashboard monitoring CCTV berbasis web yang dirancang dan diimplementasikan untuk Diskominfo Kota Serang guna meningkatkan transparansi, keamanan dan aksesibilitas layanan publik. Portal ini menyajikan live stream video dari puluhan titik kamera CCTV strategis di penjuru kota dengan latensi rendah dan tampilan antarmuka yang intuitif dan responsif.",
    features: [
      "Streaming video multi-kamera CCTV dengan latensi rendah",
      "Pemetaan titik kamera interaktif berbasis peta digital wilayah Kota Serang",
      "Pencarian & filter kamera berdasarkan nama jalan, persimpangan dan kecamatan",
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
      "Aplikasi enterprise CRM dan CMS untuk tata kelola kontrak kerja sama (PKS), pengajuan proposal SPH, helpdesk tiket serta analitik artikel dan berita.",
    fullDesc:
      "Platform enterprise internal perusahaan yang mengintegrasikan Customer Relationship Management (CRM) dan Content Management System (CMS). Berfokus pada pengembangan antarmuka dan penambahan modul seperti proposal SPH digital, pengelolaan kontrak kerja sama (PKS), penanganan tiket kendala pelanggan (helpdesk), monitoring log Open API, dashboard ringkasan serta sistem publikasi artikel dan berita perusahaan.",
    features: [
      "Penyusunan dan otomasi pembuatan proposal SPH digital serta administrasi kontrak kerja sama (PKS)",
      "Sistem ticketing helpdesk terstruktur untuk pencatatan dan penanganan keluhan klien",
      "Dashboard analitik performa artikel dan berita dengan visualisasi grafik pembaca",
      "Content Management System (CMS) modular untuk perpustakaan artikel, berita dan blog",
      "Modul integrasi dan monitoring log Open API untuk sinkronisasi data antar platform",
      "Penyempurnaan tampilan antarmuka dan perbaikan bug pada modul Lead & Sales, Implementation serta Purchase Order",
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
      "/nuha-klinik/klinik-detail-permintaan-resep.jpeg",
    ],
    shortDesc:
      "Sistem informasi manajemen klinik kesehatan untuk migrasi modul laporan operasional medis, pencatatan kas keuangan dan pemantauan kartu stok obat.",
    fullDesc:
      "Aplikasi Sistem Informasi Manajemen (SIM) Klinik yang dikembangkan untuk memperbarui arsitektur sistem dari versi 1 ke versi 2. Berperan langsung dalam memigrasikan modul laporan operasional klinik yang meliputi laporan penjualan, laporan pembelian, kartu stok persediaan obat, histori resep obat, riwayat pasien serta rekapitulasi data kunjungan klinik.",
    features: [
      "Migrasi modul laporan operasional klinik secara menyeluruh dari versi 1 ke versi 2",
      "Rekapitulasi dan pelaporan transaksi penjualan obat serta pembelian logistik klinik",
      "Manajemen kartu stok untuk pemantauan ketersediaan obat dan bahan medis",
      "Pelacakan histori resep obat dokter dan catatan riwayat kunjungan pasien",
      "Pencatatan kas masuk dan kas keluar harian operasional klinik dengan status verifikasi",
      "Filter rentang tanggal pencarian dan ekspor rekapitulasi data keuangan",
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
      "Portal sistem manajemen operasional studio dan perusahaan berskala enterprise yang mengelola alur kerja, inventaris perangkat, transaksi sewa/booking serta pelaporan keuangan secara terpusat. Dibangun dengan fokus pada efisiensi operasional bisnis, keamanan multi-role permission dan visualisasi data yang komprehensif.",
    features: [
      "Sistem manajemen alur booking operasional dan reservasi studio terpusat",
      "Dashboard analitik performa bisnis dengan grafik transaksi berkala",
      "Autentikasi multi-role (Admin, Staff, Client) dengan permission bertingkat",
      "Manajemen inventaris peralatan dengan tracking status ketersediaan",
      "Pelaporan otomatis, ekspor data dan integrasi database terstruktur",
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
