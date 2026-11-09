import coffeeImg from "@/assets/project-coffee.jpg";
import cryptoImg from "@/assets/project-crypto.jpg";
import carbonImg from "@/assets/project-carbon.jpg";
import bpjnImg from "@/assets/project-bpjn.jpg";
import blockchainImg from "@/assets/project-blockchain.jpg";
import certAndroid from "@/assets/cert-android.jpg.asset.json";
import certOffice from "@/assets/cert-office.jpg.asset.json";
import certCyber from "@/assets/cert-cyber.jpg.asset.json";
import certAi from "@/assets/cert-ai.jpg.asset.json";
import cvAsset from "@/assets/cv-yarda.pdf.asset.json";

export const profile = {
  name: "M Yarda Andika",
  role: "Full-Stack Web Developer & AI Enthusiast",
  university: "Teknik Informatika, Universitas Islam Riau",
  location: "Pekanbaru, Riau",
  email: "myardaandika304@gmail.com",
  phone: "+62 851-8411-7418",
  whatsapp: "https://wa.me/6285184117418",
  about:
    "Mahasiswa semester akhir Teknik Informatika di Universitas Islam Riau yang fokus membangun aplikasi web full-stack dan solusi berbasis AI — mulai dari prediksi harga crypto dengan LSTM hingga sistem monitoring berbasis peta. Terbiasa bekerja dalam tim, aktif berorganisasi, dan senang mengubah data menjadi produk yang berguna.",
};

export const cv = {
  url: cvAsset.url,
  filename: "CV-M-Yarda-Andika.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/yardaandika", handle: "yardaandika" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/m-yarda-andika-0350ba222/",
    handle: "m-yarda-andika",
  },
  { label: "Instagram", href: "https://www.instagram.com/m_kyarda/", handle: "@m_kyarda" },
] as const;

export type SkillGroup = { title: string; code: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Web Development",
    code: "01",
    items: ["Python", "JavaScript", "PHP", "HTML & CSS", "React", "Node.js", "FastAPI"],
  },
  {
    title: "Data & Artificial Intelligence",
    code: "02",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Time Series Forecasting",
      "LSTM",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Database & Tools",
    code: "03",
    items: ["MySQL", "MongoDB", "Git & GitHub", "VS Code", "REST API", "Google Maps API"],
  },
];

export const softSkills = [
  "Teamwork",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Creative Thinking",
  "Content Strategy",
  "Project Management",
  "Adaptability",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "crypto-lstm",
    title: "Cryptocurrency Price Prediction Using LSTM",
    category: "Machine Learning · Time Series Forecasting",
    type: "Featured Project",
    description:
      "Sistem prediksi harga cryptocurrency menggunakan LSTM dengan fitur volume perdagangan dan Moving Average, mengambil data real-time melalui Binance API dan disajikan lewat FastAPI.",
    tech: ["Python", "LSTM", "FastAPI", "Binance API", "Pandas"],
    image: cryptoImg,
    featured: true,
  },
  {
    slug: "bpjn-monitoring",
    title: "BPJN Work Location Monitoring System",
    category: "Web Development · GIS",
    type: "Academic / Internship Project",
    description:
      "Aplikasi web untuk membantu pengecekan lokasi pekerjaan dan monitoring progres pekerjaan dengan visualisasi lokasi berbasis peta.",
    tech: ["PHP", "Google Maps API", "MySQL"],
    image: bpjnImg,
    github: "https://github.com/yardaandika/Pengecekan_Lokasi",
    featured: true,
  },
  {
    slug: "carbon-tracker",
    title: "Personal Carbon Footprint Tracker",
    category: "PWA · Data Visualization",
    type: "Web Application",
    description:
      "Progressive Web Application untuk mencatat dan memvisualisasikan estimasi jejak karbon individu dari aktivitas sehari-hari.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    image: carbonImg,
    featured: true,
  },
  {
    slug: "coffee-shop",
    title: "Coffee Shop App",
    category: "Web Development · Team Project",
    type: "Group Project — Kelompok 6",
    description:
      "Aplikasi coffee shop untuk menampilkan menu dan mengelola pesanan pelanggan, dikerjakan secara kolaboratif bersama tim.",
    tech: ["Web App", "Git & GitHub"],
    image: coffeeImg,
    github: "https://github.com/yardaandika/CoffeeShop_Kelompok6",
  },
  {
    slug: "blockchain-research",
    title: "Blockchain & Crypto Research",
    category: "Blockchain · Market Research · Communication",
    type: "Research & Analysis",
    description:
      "Kumpulan analisis dan konten edukasi seputar blockchain, cryptocurrency, serta perkembangan teknologi digital. Pengalaman relevan di Cryptoniac.id.",
    tech: ["Market Research", "Blockchain", "Content Writing"],
    image: blockchainImg,
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  tag: string;
};

export const certificates: Certificate[] = [
  {
    title: "Pemanfaatan Artificial Intelligence (AI) untuk Akademik dan Penelitian",
    issuer: "Perpustakaan H. Soeman H.S — Universitas Islam Riau",
    date: "9 November 2026",
    image: certAi.url,
    tag: "AI",
  },
  {
    title: "Empowerment Session Kick-off ASEAN Cybersecurity Skilling Programme",
    issuer: "Teknik Informatika UIR × Microsoft, ASEAN Foundation, BULLYID Indonesia",
    date: "21 Oktober 2022",
    image: certCyber.url,
    tag: "Cybersecurity",
  },
  {
    title: "Workshop Make To Application Android From PPT",
    issuer: "Rumah Belajar Komputer",
    date: "21 Mei 2022",
    image: certAndroid.url,
    tag: "Mobile",
  },
  {
    title: "Workshop Office Management Application",
    issuer: "Rumah Belajar Komputer",
    date: "21 Mei 2022",
    image: certOffice.url,
    tag: "Office",
  },
];

export type Experience = {
  org: string;
  kind: string;
  role: string;
  period?: string;
  location?: string;
  project?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    org: "Balai Pelaksanaan Jalan Nasional (BPJN) Wilayah II Riau",
    kind: "Internship / Kerja Praktik",
    role: "Web Developer Intern",
    period: "12 Agustus – 13 September 2024",
    location: "Pekanbaru, Riau",
    project: "Web-Based Work Location Monitoring Application",
    points: [
      "Terlibat dalam perancangan aplikasi pengecekan lokasi pekerjaan berbasis web.",
      "Mengembangkan konsep sistem pemantauan lokasi dan progres pekerjaan.",
      "Mengeksplorasi integrasi Google Maps API untuk visualisasi lokasi.",
      "Merancang dashboard serta fitur pengelolaan data lokasi dan aktivitas pekerjaan.",
      "Menggunakan PHP dalam pengembangan aplikasi.",
    ],
  },
  {
    org: "IQ.Primatech Study Club",
    kind: "Organizational Experience",
    role: "Head of Media (Ketua Media)",
    period: "2022 – 2024",
    location: "Media & Communication",
    points: [
      "Mengelola aktivitas media dan komunikasi organisasi.",
      "Mengembangkan ide konten, desain visual, dan copywriting untuk media sosial.",
      "Menjadi host dalam kegiatan Fundamental Class.",
      "Berpartisipasi dalam kepanitiaan Hari Teknologi Nasional.",
      "Berkolaborasi dengan anggota tim dalam menjalankan program organisasi.",
    ],
  },
  {
    org: "Cryptoniac.id",
    kind: "Professional / Media Experience",
    role: "Media Analyst",
    period: "2022 – 2024",
    points: [
      "Mengembangkan ide konten seputar cryptocurrency dan blockchain.",
      "Melakukan eksplorasi topik dan tren industri aset digital.",
      "Terlibat dalam pembuatan konsep dan desain konten edukasi.",
      "Mendukung penyampaian informasi teknologi dan investasi digital melalui media sosial.",
    ],
  },
  {
    org: "PT Nusantara Express Kilat (SPX Express)",
    kind: "Work Experience",
    role: "Operator Sortir",
    location: "Jasa logistik",
    points: ["Menyortir paket dalam tim dengan target waktu yang ketat."],
  },
];

export const education = {
  current: {
    school: "Universitas Islam Riau",
    degree: "S1 Teknik Informatika",
    period: "2021 – sekarang",
    location: "Pekanbaru, Indonesia",
    focus: [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Application Development",
      "Database Management",
      "Data Analysis",
    ],
  },
  previous: [
    { school: "SMA Negeri 1 Mandau", period: "2018 – 2021" },
    { school: "SMP Negeri 2 Mandau", period: "2015 – 2018" },
    { school: "SD Negeri 004 Talang Mandi", period: "2009 – 2015" },
  ],
};
