// Central source of truth for company data — Bintang Lancar Bali

export const site = {
  name: "Bintang Lancar Bali",
  shortName: "Bintang Lancar",
  tagline: "Solusi Pipa & WC Mampet di Bali",
  description:
    "Jasa sedot WC, atasi pipa & saluran mampet, dan kuras septic tank profesional di seluruh Bali. Respons cepat, alat modern, bergaransi, siap 24 jam.",
  url: "https://bintanglancarbali.com",
  established: 2015,
  // Contact (from official site / listing)
  phoneDisplay: "0822-6631-8132",
  phoneIntl: "6282266318132",
  whatsapp: "6282266318132",
  contactPerson: "Ahmad",
  email: "haircreation04@gmail.com",
  address: "Perumahan Dalung Permai, Jl. Kwanji Gg. Jepun No.3, Dalung, Kuta Utara, Badung, Bali 80361",
  addressShort: "Dalung, Kuta Utara, Badung, Bali",
  hours: "Senin – Minggu · 24 Jam",
  mapsQuery: "Dalung Permai, Kuta Utara, Badung, Bali",
} as const;

export function waLink(message?: string) {
  const text = message ?? "Halo Bintang Lancar Bali, saya mau konsultasi soal pipa/WC mampet.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Harga", href: "/harga" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
] as const;

export type Service = {
  slug: string;
  icon: "drain" | "toilet" | "sink" | "tap" | "septic" | "repair";
  title: string;
  short: string;
  desc: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "saluran-drainase-mampet",
    icon: "drain",
    title: "Saluran Drainase Mampet",
    short: "Saluran kamar mandi & got tersumbat kembali lancar.",
    desc: "Mengatasi saluran pembuangan kamar mandi, lantai, dan drainase yang tersumbat akibat rambut, sabun, lumut, atau endapan kotoran.",
    points: ["Tanpa bongkar lantai", "Alat pembersih modern", "Hasil langsung lancar"],
    image: "/images/foto-projek.jpg",
  },
  {
    slug: "wc-toilet-mampet",
    icon: "toilet",
    title: "WC / Toilet Mampet",
    short: "Toilet mampet & tidak bisa flush ditangani cepat.",
    desc: "Solusi WC dan toilet duduk/jongkok yang mampet, air tidak turun, atau bau tidak sedap. Ditangani teknisi berpengalaman.",
    points: ["Tanpa rusak keramik", "Respons cepat 24 jam", "Bersih & higienis"],
    image: "/images/foto-projek5.jpg",
  },
  {
    slug: "wastafel-mampet",
    icon: "sink",
    title: "Wastafel & Sink Mampet",
    short: "Wastafel dapur & cuci tangan mengalir lagi.",
    desc: "Membersihkan pipa wastafel dapur dan cuci tangan yang tersumbat lemak, sisa makanan, atau kerak. Aman untuk semua jenis pipa.",
    points: ["Sedot lemak & kerak", "Tanpa bahan korosif", "Garansi pengerjaan"],
    image: "/images/foto-projek6.jpg",
  },
  {
    slug: "pipa-kran-air-mampet",
    icon: "tap",
    title: "Pipa & Kran Air Mampet",
    short: "Aliran air kembali deras dan stabil.",
    desc: "Memperbaiki pipa air bersih dan kran yang tersumbat atau aliran lemah, termasuk pengecekan tekanan dan kebocoran.",
    points: ["Cek tekanan air", "Deteksi kebocoran", "Material berkualitas"],
    image: "",
  },
  {
    slug: "kuras-sedot-septic-tank",
    icon: "septic",
    title: "Kuras & Sedot Septic Tank",
    short: "Septic tank penuh disedot bersih & tuntas.",
    desc: "Penyedotan dan pengurasan septic tank dengan armada modern, pembuangan limbah sesuai prosedur, dan area kerja tetap bersih.",
    points: ["Armada modern", "Sedot sampai tuntas", "Limbah dibuang aman"],
    image: "/images/foto-projek3.jpg",
  },
  {
    slug: "perbaikan-plumbing",
    icon: "repair",
    title: "Perbaikan Plumbing Umum",
    short: "Instalasi & perbaikan sistem perpipaan rumah.",
    desc: "Layanan perbaikan dan pemasangan instalasi perpipaan, sambungan bocor, hingga perawatan sistem sanitasi rumah & usaha.",
    points: ["Survei gratis", "Estimasi transparan", "Untuk rumah & bisnis"],
    image: "/images/foto-projek2.jpg",
  },
];

// Real work photos (from the original site) for the gallery.
export const galleryImages = [
  { src: "/images/s1.jpg", label: "Armada Sedot Modern" },
  { src: "/images/foto-projek.jpg", label: "Sedot Saluran" },
  { src: "/images/foto-projek3.jpg", label: "Truk Sedot Tinja" },
  { src: "/images/foto-projek5.jpg", label: "Service WC / Toilet" },
  { src: "/images/foto-projek2.jpg", label: "Pengerjaan dengan Mesin" },
  { src: "/images/foto-projek6.jpg", label: "Wastafel & Dapur" },
];

export const advantages = [
  { title: "Respons Cepat", desc: "Tim siap meluncur setelah konfirmasi, termasuk panggilan darurat.", icon: "bolt" },
  { title: "Profesional", desc: "Teknisi terlatih & berpengalaman sejak 2015 menangani ribuan kasus.", icon: "badge" },
  { title: "Alat Modern", desc: "Peralatan canggih sehingga pengerjaan cepat, rapi, dan bersih.", icon: "tools" },
  { title: "Harga Terjangkau", desc: "Tarif bersahabat dengan kualitas layanan tetap profesional.", icon: "tag" },
  { title: "Bergaransi", desc: "Setiap pengerjaan kami beri garansi untuk ketenangan Anda.", icon: "shield" },
  { title: "Siap 24 Jam", desc: "Melayani Senin–Minggu sepanjang hari di seluruh Bali.", icon: "clock" },
] as const;

export const steps = [
  { no: "01", title: "Hubungi Kami", desc: "Chat WhatsApp atau telepon, ceritakan keluhan saluran/WC Anda." },
  { no: "02", title: "Survei & Estimasi", desc: "Kami cek kondisi dan berikan estimasi biaya yang transparan." },
  { no: "03", title: "Pengerjaan", desc: "Teknisi datang dengan alat modern dan menyelesaikan masalah." },
  { no: "04", title: "Garansi & Beres", desc: "Area dibersihkan, hasil dijamin lancar, dan bergaransi." },
] as const;

export const serviceAreas = [
  "Denpasar", "Badung", "Kuta", "Kuta Utara", "Dalung", "Canggu",
  "Seminyak", "Jimbaran", "Nusa Dua", "Gianyar", "Ubud", "Tabanan",
  "Sanur", "Mengwi", "Sukawati", "Tuban",
];

// Representative testimonials styled after typical Google review feedback for
// this service category. Replace with verified Google reviews when available.
export const testimonials = [
  {
    name: "Putu Ariawan",
    role: "Pelanggan · Denpasar",
    rating: 5,
    text: "WC mampet tengah malam, telepon langsung direspons dan teknisi datang cepat. Kerjanya rapi, bersih, dan langsung lancar lagi. Recommended!",
  },
  {
    name: "Sarah Wijaya",
    role: "Ibu Rumah Tangga · Canggu",
    rating: 5,
    text: "Saluran kamar mandi sudah lama mampet, di sini beres tanpa bongkar lantai. Harganya wajar dan teknisinya ramah. Terima kasih Bintang Lancar.",
  },
  {
    name: "I Made Surya",
    role: "Pemilik Villa · Seminyak",
    rating: 5,
    text: "Langganan kuras septic tank untuk villa saya. Armadanya modern, sedotnya tuntas, dan area kerja tetap bersih. Profesional sekali.",
  },
  {
    name: "Dewi Lestari",
    role: "Pelanggan · Dalung",
    rating: 5,
    text: "Wastafel dapur mampet karena lemak, ditangani cepat dan bergaransi. Pelayanannya memuaskan, pasti pakai lagi kalau ada masalah.",
  },
  {
    name: "Komang Adi",
    role: "Pemilik Kos · Jimbaran",
    rating: 5,
    text: "Respon WhatsApp cepat, estimasi harga jelas dari awal tanpa biaya tersembunyi. Pipa air yang lemah jadi deras lagi. Mantap!",
  },
  {
    name: "Agus Pratama",
    role: "Pelanggan · Sanur",
    rating: 5,
    text: "Sudah dua kali pakai jasa mereka, selalu on time dan hasilnya memuaskan. Teknisi paham betul masalahnya. Layak direkomendasikan.",
  },
];

export const faqs = [
  {
    q: "Apakah melayani panggilan darurat 24 jam?",
    a: "Ya. Kami melayani Senin–Minggu selama 24 jam, termasuk panggilan darurat untuk WC dan saluran mampet di seluruh Bali.",
  },
  {
    q: "Area mana saja yang dijangkau?",
    a: "Kami menjangkau seluruh Bali, antara lain Denpasar, Badung, Kuta, Canggu, Seminyak, Jimbaran, Nusa Dua, Ubud, Tabanan, dan sekitarnya.",
  },
  {
    q: "Apakah pengerjaan bergaransi?",
    a: "Tentu. Setiap pengerjaan kami beri garansi. Jika masalah yang sama muncul kembali dalam masa garansi, kami tangani tanpa biaya tambahan.",
  },
  {
    q: "Bagaimana cara mengetahui estimasi biayanya?",
    a: "Hubungi kami via WhatsApp atau telepon dan ceritakan keluhan Anda. Kami berikan estimasi awal, dan biaya final disepakati setelah survei kondisi.",
  },
  {
    q: "Apakah perlu membongkar lantai atau keramik?",
    a: "Pada umumnya tidak. Kami menggunakan alat modern yang dapat mengatasi sumbatan tanpa harus membongkar lantai atau merusak keramik.",
  },
];

export const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "5.000+", label: "Pelanggan Terlayani" },
  { value: "24/7", label: "Siap Melayani" },
  { value: "100%", label: "Bergaransi" },
];
