/**
 * THE BOLD INCLUSIVITY - JAVASCRIPT
 * Accessible & Lightweight interactions with Multilingual (i18n) Engine
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STORAGE_KEY = 'fkm_bka_ywu_language';

  /* ==========================================================================
     0. Translation Dictionary (i18n)
     ========================================================================== */
  const i18nData = {
    id: {
      htmlLang: "id",
      pageTitle: "FKM BKA YWU",
      metaDescription: "Landing page resmi FKM BKA YWU bertema The Bold Inclusivity. Berfokus pada aksesibilitas tinggi (WCAG 2.1 AA) dan pemenuhan hak penyandang disabilitas.",
      
      // Header & Navigation
      skipLink: "Lewati ke Konten Utama (Tekan Enter)",
      brandSub: "The Bold Inclusivity",
      navHome: "Beranda",
      navAbout: "Tentang Kami",
      navActivities: "Kegiatan",
      navGallery: "Galeri",
      navImpact: "Dampak",
      navPartners: "Mitra",
      navContact: "Kontak",
      langBtnLabel: "Pilih Bahasa / Change Language (Sedang aktif: Bahasa Indonesia)",
      langBtnTitle: "Ganti ke Bahasa Inggris / Switch to English",
      langCode: "ID",
      menuOpen: "Buka menu navigasi",
      menuClose: "Tutup menu navigasi",

      // Hero Section
      heroTagline: "Misi Kita, Kekuatan Bersama",
      heroTitle: "Menembus batas, mewujudkan akses setara untuk semua",
      heroDesc: "Membangun ruang inklusif di mana setiap individu memiliki kesempatan yang sama untuk bertumbuh, berkarya, dan berdaya tanpa sekat",
      heroCtaJoin: "Gabung Komunitas",
      heroCtaJoinAria: "Gabung komunitas FKM BKA YWU melalui halaman Instagram resmi (terbuka di tab baru)",
      heroCtaSupport: "Dukung Kami",
      heroImgAlt: "Aksi kebersamaan dan saling bantu para perempuan berhijab dalam kegiatan inklusi dan pemberdayaan FKM BKA YWU",

      // Intro Sub-Section (Pengenalan FKM BKA YWU)
      introSectionLabel: "Tentang FKM BKA YWU",
      introTitle: "FKM BKA YWU",
      introDesc: "FKM BKA YWU merupakan forum komunikasi masyarakat berkebutuhan khusus yang berfokus pada advokasi hak-hak perempuan muda serta perempuan penyandang disabilitas.",
      introPillarDesc: "Gerakan ini didorong oleh tiga pilar strategis yang menggerakkan seluruh program FKM BKA YWU dalam mewujudkan kesetaraan hak, kapabilitas vokasi, dan kemandirian wirausaha disabilitas.",
      introWorkAreaTitle: "AREA KERJA OPERASIONAL",
      introWorkAreaList: "Aceh, Sumatera Utara, Sumatera Selatan, Sumatera Barat, Kepulauan Riau, Jawa Barat, Jawa Timur, Sulawesi Selatan, Papua Barat, Papua Barat Daya, Nusa Tenggara Timur, Nusa Tenggara Barat dan Bali",
      introMapGroupAria: "Peta interaktif 13 provinsi area kerja operasional FKM BKA YWU",
      mapPinAceh: "Aceh",
      mapPinAcehAria: "Titik lokasi area kerja operasional di Provinsi Aceh",
      mapPinSumut: "Sumatera Utara",
      mapPinSumutAria: "Titik lokasi area kerja operasional di Provinsi Sumatera Utara",
      mapPinSumbar: "Sumatera Barat",
      mapPinSumbarAria: "Titik lokasi area kerja operasional di Provinsi Sumatera Barat",
      mapPinKepri: "Kepulauan Riau",
      mapPinKepriAria: "Titik lokasi area kerja operasional di Provinsi Kepulauan Riau",
      mapPinSumsel: "Sumatera Selatan",
      mapPinSumselAria: "Titik lokasi area kerja operasional di Provinsi Sumatera Selatan",
      mapPinJabar: "Jawa Barat",
      mapPinJabarAria: "Titik lokasi area kerja operasional di Provinsi Jawa Barat",
      mapPinJatim: "Jawa Timur",
      mapPinJatimAria: "Titik lokasi area kerja operasional di Provinsi Jawa Timur",
      mapPinBali: "Bali",
      mapPinBaliAria: "Titik lokasi area kerja operasional di Provinsi Bali",
      mapPinNtb: "Nusa Tenggara Barat",
      mapPinNtbAria: "Titik lokasi area kerja operasional di Provinsi Nusa Tenggara Barat",
      mapPinSulsel: "Sulawesi Selatan",
      mapPinSulselAria: "Titik lokasi area kerja operasional di Provinsi Sulawesi Selatan",
      mapPinNtt: "Nusa Tenggara Timur",
      mapPinNttAria: "Titik lokasi area kerja operasional di Provinsi Nusa Tenggara Timur",
      mapPinPbd: "Papua Barat Daya",
      mapPinPbdAria: "Titik lokasi area kerja operasional di Provinsi Papua Barat Daya",
      mapPinPb: "Papua Barat",
      mapPinPbAria: "Titik lokasi area kerja operasional di Provinsi Papua Barat",
      introImgAlt: "Aktivitas siaran radio anggota FKM BKA YWU perempuan disabilitas",

      // About (3 Pillars)
      aboutBadge: "Fondasi Gerakan",
      aboutTitle: "3 PILAR UTAMA KAMI",
      aboutDesc: "Tiga pilar strategis yang menggerakkan seluruh program FKM BKA YWU dalam mewujudkan kesetaraan hak, kapabilitas vokasi, dan kemandirian wirausaha disabilitas.",
      pilar1Title: "Inklusi dan Pemenuhan Hak Penyandang Disabilitas",
      pilar1Desc: "Mendorong kesetaraan, aksesibilitas, perlindungan hak, serta partisipasi bermakna penyandang disabilitas, khususnya perempuan dan kaum muda, dalam kehidupan sosial dan pembangunan.",
      pilar2Title: "Pemberdayaan Perempuan dan Kepemimpinan Kaum Muda",
      pilar2Desc: "Memperkuat kapasitas, kemandirian, kepemimpinan, dan peran perempuan serta kaum muda dengan disabilitas dalam pengambilan keputusan, pemberdayaan ekonomi, dan advokasi masyarakat.",
      pilar3Title: "Advokasi Kebijakan dan Pemantauan SDGs yang Inklusif",
      pilar3Desc: "Mendorong kebijakan publik yang responsif gender dan disabilitas melalui pemantauan SDGs, pengumpulan data berbasis masyarakat, penguatan jejaring, serta dialog dengan pemerintah dan pemangku kepentingan.",

      // Visi & Misi
      aboutNavPillPilar: "3 Pilar Utama",
      aboutNavPillVisi: "Visi & Misi",
      navVisiMisi: "Visi & Misi",
      visiMisiTitle: "Visi dan Misi",
      visiSubTitle: "Visi",
      visiCardText: "Terwujudnya masyarakat yang inklusif, adil, setara, dan berkelanjutan, dengan perempuan, kaum muda, serta penyandang disabilitas memiliki kesempatan yang setara untuk berpartisipasi, memimpin, dan memperoleh hak-haknya dalam pembangunan.",
      misiSubTitle: "Misi",
      misiItem1: "Pemberdayaan perempuan dan kaum muda melalui peningkatan kapasitas, kepemimpinan, partisipasi, dan kemandirian dalam kehidupan sosial, ekonomi, dan politik.",
      misiItem2: "Mendorong inklusi dan pemenuhan hak penyandang disabilitas dalam pendidikan, pekerjaan, pelayanan publik, pengambilan keputusan, dan pembangunan berkelanjutan.",
      misiItem3: "Memperkuat perlindungan perempuan, anak, dan kelompok rentan dari diskriminasi, kekerasan, serta berbagai bentuk ketidakadilan.",
      misiItem4: "Melakukan pemantauan dan advokasi SDGs berbasis masyarakat, termasuk pengumpulan data terpilah gender dan disabilitas untuk mendorong kebijakan serta penganggaran yang inklusif.",
      misiItem5: "Membangun kemitraan dan kolaborasi dengan pemerintah, masyarakat sipil, komunitas, media, dan pemangku kepentingan lainnya untuk mewujudkan pembangunan yang partisipatif dan berkeadilan.",
      misiItem6: "Mendorong kesiapsiagaan bencana dan ketahanan masyarakat yang inklusif, dengan memastikan perempuan, anak, kaum muda, dan penyandang disabilitas terlibat dalam perencanaan serta pelaksanaan upaya pengurangan risiko bencana.",

      // Core Activities (#kegiatan)
      activitiesTitle: "KEGIATAN KAMI",
      activitiesDesc: "Rangkaian program dan aktivitas strategis FKM BKA YWU dalam mewujudkan inklusi dan kesetaraan.",
      activity1Title: "Pengurangan Risiko Bencana Inklusif",
      activity1Desc: "Pelatihan kesiapsiagaan, simulasi evakuasi, SOP PRB inklusif, serta aksesibilitas fasilitas publik.",
      activity1ImgAlt: "Sosialisasi kebencanaan dan simulasi PRB inklusif untuk perempuan muda",
      activity2Title: "Pemberdayaan Perempuan dan Kaum Muda dengan Disabilitas",
      activity2Desc: "Pembentukan unit YWU, kepemimpinan perempuan muda, kegiatan inklusi, dan kampanye publik.",
      activity2ImgAlt: "Dokumentasi kegiatan pemberdayaan dan pertemuan komunitas Young Women Unit",
      activity3Title: "Advokasi Kebijakan dan Hak Penyandang Disabilitas",
      activity3Desc: "FGD, penyusunan rancangan peraturan wali kota, konsultasi pemerintah, serta advokasi pemenuhan hak.",
      activity3ImgAlt: "Partisipasi FKM BKA YWU dalam forum advokasi hak dan konferensi iklim Our Voice Count",
      activity4Title: "Pemantauan SDGs dan Pembangunan Inklusif",
      activity4Desc: "Penguatan kapasitas, pengumpulan data, dialog kebijakan, dan advokasi SDGs yang responsif gender dan disabilitas.",
      activity4ImgAlt: "Kegiatan penguatan kapasitas dan dukungan fasilitas bagi perempuan dengan disabilitas",
      activity5Title: "Kewirausahaan Sosial dan Kemandirian Ekonomi",
      activity5Desc: "Pelatihan kewirausahaan serta pengembangan usaha seperti kerajinan sandal pandan, token papua, dan produk Goodi Bag dari canvas.",
      activity5ImgAlt: "Pameran stan produk wirausaha disabilitas pada Festival QRIS",

      // Gallery / Instagram
      galleryBadge: "Galeri Kegiatan",
      galleryTitle: "Dokumentasi dan Kegiatan Terbaru",
      galleryDesc: "Ikuti momen keseruan dan wawasan terbaru dari kegiatan kami langsung di Instagram.",
      galleryBadgePost: "Postingan",
      galleryBadgeReels: "Reels Video",
      galleryCard1Caption: "Program Pendampingan & Penguatan Kapasitas secara GRATIS bagi orang tua, keluarga, dan guru SLB yang mendampingi anak dengan autisme di Medan.",
      galleryCard2Caption: "Aspirasi Syifa Turrahma (Guru BK ASN SLB) dalam RDPU DPRK Banda Aceh: Menyerukan kesempatan kerja nyata dan akses pendidikan inklusif bagi penyandang disabilitas.",
      galleryCard3Caption: "Konsultasi Publik Rencana Aksi Daerah Gender & Perubahan Iklim (RAD GPI) Kota Banda Aceh untuk aksi iklim yang inklusif dan responsif gender.",
      galleryCard4Caption: "Feminist Festival of Resistance & Alternatives: Bersolidaritas memperjuangkan keadilan gender, menentang ketimpangan, dan merajut masa depan inklusif.",
      galleryCard5Caption: "Partisipasi dalam forum global ECOSOC untuk menyuarakan aspirasi komunitas dan memastikan hak-hak perempuan disabilitas terwakili di tingkat internasional.",
      galleryCard6Caption: "Sesi kolaborasi dan penguatan kapasitas daring: Memperluas wawasan dan bertukar gagasan untuk pemberdayaan perempuan serta kesetaraan hakiki.",
      galleryBtnView: "Lihat di Instagram",

      // Impact Counter
      impactBadge: "Pencapaian Nyata",
      impactTitle: "Dampak yang Terus Bertumbuh",
      impactDesc: "Statistik pencapaian program pendampingan, vokasi adaptif, dan pemberdayaan inklusif FKM BKA YWU.",
      impactStat1Title: "Pelatihan & Pembekalan PRB",
      impactStat1Desc: "Pelatihan pengurangan risiko bencana yang inklusif.",
      impactStat2Title: "Simulasi Evakuasi",
      impactStat2Desc: "Kegiatan simulasi evakuasi bencana ramah disabilitas.",
      impactStat3Title: "Peserta Disabilitas Pelatihan",
      impactStat3Desc: "Penyandang disabilitas yang telah mengikuti pelatihan.",
      impactStat4Title: "Peserta Simulasi Evakuasi",
      impactStat4Desc: "Peserta aktif yang mengikuti simulasi evakuasi.",
      impactStat5Title: "Fasilitas Publik Dinilai",
      impactStat5Desc: "Fasilitas publik yang telah diaudit aksesibilitasnya.",
      impactStat6Title: "Webinar Inklusi",
      impactStat6Desc: "Sesi edukasi dan advokasi inklusi secara daring.",
      impactStat7Title: "Kegiatan Berkelanjutan",
      impactStat7Desc: "Rangkaian program dan kegiatan sejak tahun 2014.",

      // Partners
      partnersBadge: "Jaringan & Kolaborasi",
      partnersTitle: "Mitra dan Pendukung Strategis",
      partnersDesc: "Bergerak bersama berbagai lembaga internasional dan nasional dalam mendorong pemenuhan hak, kesetaraan gender, dan kemandirian wirausaha disabilitas.",
      partnersViewGrid: "Semua Logo (Grid)",
      partnersViewMarquee: "Animasi Berjalan",
      marqueePause: "Jeda Animasi",
      marqueePlay: "Putar Animasi",
      marqueeBtnLabelPause: "Jeda animasi logo mitra",
      marqueeBtnLabelPlay: "Putar animasi logo mitra",

      // Footer
      footerDesc: "Forum kesetaraan masyarakat berkeadilan kolaboratif adaptif yasa wahana utama",
      footerContactTitle: "Kontak Resmi",
      footerEmailLabel: "Email:",
      footerPhoneLabel: "Telepon / WhatsApp:",
      footerAddressTitle: "Alamat",
      footerAddressText: "Jl. Gunung Sibayak Glugu Darat II, Medan Timur",
      footerSocialTitle: "Media Sosial",
      footerSocialDesc: "Ikuti informasi dan agenda terbaru FKM BKA YWU di kanal resmi kami:",
      footerCopyright: "© 2026 FKM BKA YWU. Seluruh Hak Cipta Dilindungi.",
      footerPrivacy: "Kebijakan Privasi",
      footerTerms: "Syarat & Ketentuan",
      privacyModalTitle: "Kebijakan Privasi",
      privacyModalP1: "FKM BKA YWU berkomitmen penuh untuk melindungi privasi setiap pengunjung, anggota komunitas, sahabat disabilitas, dan mitra yang mengakses situs web ini.",
      privacyModalSec1Title: "1. Pengumpulan & Penggunaan Data",
      privacyModalSec1Desc: "Situs ini tidak mengumpulkan data pribadi tanpa persetujuan Anda. Informasi kontak yang Anda kirimkan melalui email/saluran resmi semata-mata digunakan untuk kepentingan program advokasi dan wirausaha inklusif.",
      privacyModalSec2Title: "2. Penyimpanan Preferensi (Local Storage)",
      privacyModalSec2Desc: "Kami hanya menggunakan penyimpanan lokal peramban (Local Storage) untuk mengingat preferensi bahasa (ID/EN) pilihan Anda demi kenyamanan navigasi.",
      privacyModalSec3Title: "3. Keamanan & Kerahasiaan Informasi",
      privacyModalSec3Desc: "Seluruh data komunikasi dijaga kerahasiaannya dengan standar keamanan yang ketat dan tidak pernah dialihkan ke pihak ketiga.",
      privacyModalCloseBtn: "Tutup",
      termsModalTitle: "Syarat & Ketentuan",
      termsModalP1: "Selamat datang di situs web resmi FKM BKA YWU. Dengan mengakses situs ini, Anda menyetujui syarat dan ketentuan penggunaan layanan berikut ini demi kenyamanan dan perlindungan bersama.",
      termsModalSec1Title: "1. Hak Kekayaan Intelektual",
      termsModalSec1Desc: "Seluruh materi publikasi, logo, dan dokumentasi program dilindungi hak cipta. Penggunaan materi untuk edukasi dan advokasi sosial diperkenankan dengan mencantumkan sumber resmi FKM BKA YWU.",
      termsModalSec2Title: "2. Penggunaan Informasi & Layanan",
      termsModalSec2Desc: "Pengguna diharapkan memanfaatkan saluran informasi dan kontak organisasi secara etis, bertanggung jawab, serta tidak merugikan sahabat disabilitas maupun masyarakat luas.",
      termsModalSec3Title: "3. Perubahan Ketentuan",
      termsModalSec3Desc: "Ketentuan ini dapat disesuaikan sewaktu-waktu guna peningkatan kualitas layanan, transparansi, serta kepatuhan pada regulasi yang berlaku.",
      termsModalCloseBtn: "Tutup"
    },
    en: {
      htmlLang: "en",
      pageTitle: "FKM BKA YWU",
      metaDescription: "Official landing page of FKM BKA YWU themed The Bold Inclusivity. Focusing on high accessibility (WCAG 2.1 AA) and the fulfillment of disability rights.",

      // Header & Navigation
      skipLink: "Skip to Main Content (Press Enter)",
      brandSub: "The Bold Inclusivity",
      navHome: "Home",
      navAbout: "About Us",
      navActivities: "Activities",
      navGallery: "Gallery",
      navImpact: "Impact",
      navPartners: "Partners",
      navContact: "Contact",
      langBtnLabel: "Change Language / Pilih Bahasa (Active: English)",
      langBtnTitle: "Switch to Indonesian / Ganti ke Bahasa Indonesia",
      langCode: "EN",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",

      // Hero Section
      heroTagline: "Our Mission, United Strength",
      heroTitle: "Breaking boundaries, realizing equal access for all",
      heroDesc: "Building an inclusive space where every individual has equal opportunities to grow, create, and thrive without barriers",
      heroCtaJoin: "Join Community",
      heroCtaJoinAria: "Join community of FKM BKA YWU via the official Instagram page (opens in a new tab)",
      heroCtaSupport: "Support Us",
      heroImgAlt: "Togetherness and mutual assistance of women wearing hijabs in FKM BKA YWU inclusion and empowerment activities",

      // Intro Sub-Section (About FKM BKA YWU)
      introSectionLabel: "About FKM BKA YWU",
      introTitle: "FKM BKA YWU",
      introDesc: "FKM BKA YWU is a special-needs community communication forum focusing on advocating for the rights of young women and women with disabilities.",
      introPillarDesc: "This movement is driven by three strategic pillars that power all FKM BKA YWU programs in realizing equal rights, vocational capabilities, and entrepreneurial self-reliance for persons with disabilities.",
      introWorkAreaTitle: "OPERATIONAL WORK AREAS",
      introWorkAreaList: "Aceh, North Sumatra, South Sumatra, West Sumatra, Riau Islands, West Java, East Java, South Sulawesi, West Papua, Southwest Papua, East Nusa Tenggara, West Nusa Tenggara, and Bali",
      introMapGroupAria: "Interactive map of FKM BKA YWU's 13 operational work area provinces",
      mapPinAceh: "Aceh",
      mapPinAcehAria: "Operational work area pin in Aceh Province",
      mapPinSumut: "North Sumatra",
      mapPinSumutAria: "Operational work area pin in North Sumatra Province",
      mapPinSumbar: "West Sumatra",
      mapPinSumbarAria: "Operational work area pin in West Sumatra Province",
      mapPinKepri: "Riau Islands",
      mapPinKepriAria: "Operational work area pin in Riau Islands Province",
      mapPinSumsel: "South Sumatra",
      mapPinSumselAria: "Operational work area pin in South Sumatra Province",
      mapPinJabar: "West Java",
      mapPinJabarAria: "Operational work area pin in West Java Province",
      mapPinJatim: "East Java",
      mapPinJatimAria: "Operational work area pin in East Java Province",
      mapPinBali: "Bali",
      mapPinBaliAria: "Operational work area pin in Bali Province",
      mapPinNtb: "West Nusa Tenggara",
      mapPinNtbAria: "Operational work area pin in West Nusa Tenggara Province",
      mapPinSulsel: "South Sulawesi",
      mapPinSulselAria: "Operational work area pin in South Sulawesi Province",
      mapPinNtt: "East Nusa Tenggara",
      mapPinNttAria: "Operational work area pin in East Nusa Tenggara Province",
      mapPinPbd: "Southwest Papua",
      mapPinPbdAria: "Operational work area pin in Southwest Papua Province",
      mapPinPb: "West Papua",
      mapPinPbAria: "Operational work area pin in West Papua Province",
      introImgAlt: "Radio broadcasting activity by FKM BKA YWU members, women with disabilities",

      // About (3 Pillars)
      aboutBadge: "Movement Foundation",
      aboutTitle: "OUR 3 CORE PILLARS",
      aboutDesc: "Three strategic pillars driving all FKM BKA YWU programs toward equal rights, vocational capabilities, and entrepreneurship independence for people with disabilities.",
      pilar1Title: "Disability Inclusion and Fulfillment of Rights",
      pilar1Desc: "Promoting equality, accessibility, rights protection, and meaningful participation of persons with disabilities, particularly women and young people, in social life and development.",
      pilar2Title: "Women's Empowerment and Youth Leadership",
      pilar2Desc: "Strengthening the capacity, independence, leadership, and role of women and young people with disabilities in decision-making, economic empowerment, and community advocacy.",
      pilar3Title: "Policy Advocacy and Inclusive SDG Monitoring",
      pilar3Desc: "Advancing gender- and disability-responsive public policies through SDG monitoring, community-based data collection, network strengthening, and dialogue with government and stakeholders.",

      // Visi & Misi
      aboutNavPillPilar: "3 Core Pillars",
      aboutNavPillVisi: "Vision & Mission",
      navVisiMisi: "Vision & Mission",
      visiMisiTitle: "Vision and Mission",
      visiSubTitle: "Vision",
      visiCardText: "Realizing an inclusive, just, equitable, and sustainable society where women, young people, and persons with disabilities have equal opportunities to participate, lead, and fulfill their rights in development.",
      misiSubTitle: "Mission",
      misiItem1: "Empowering women and young people by strengthening capacity, leadership, participation, and independence in social, economic, and political life.",
      misiItem2: "Advancing inclusion and the fulfillment of rights for persons with disabilities across education, employment, public services, decision-making, and sustainable development.",
      misiItem3: "Strengthening protections for women, children, and vulnerable groups against discrimination, violence, and all forms of injustice.",
      misiItem4: "Conducting community-based SDG monitoring and advocacy, including disaggregated data collection by gender and disability to drive inclusive policies and budgeting.",
      misiItem5: "Building partnerships and collaborations with government, civil society, local communities, media, and key stakeholders to advance participatory and equitable development.",
      misiItem6: "Promoting inclusive disaster preparedness and community resilience by ensuring women, children, youth, and persons with disabilities actively shape and execute disaster risk reduction initiatives.",

      // Core Activities (#kegiatan)
      activitiesTitle: "OUR ACTIVITIES",
      activitiesDesc: "A strategic series of FKM BKA YWU programs and initiatives advancing inclusion and equality.",
      activity1Title: "Inclusive Disaster Risk Reduction",
      activity1Desc: "Preparedness training, evacuation simulations, inclusive DRR standard operating procedures, and public facility accessibility.",
      activity1ImgAlt: "Disaster preparedness socialization and inclusive DRR simulation for young women",
      activity2Title: "Empowerment of Women and Youth with Disabilities",
      activity2Desc: "Formation of Young Women Units (YWU), young women's leadership, inclusion initiatives, and public campaigns.",
      activity2ImgAlt: "Documentation of empowerment activities and Young Women Unit community gathering",
      activity3Title: "Policy Advocacy and Disability Rights",
      activity3Desc: "Focus group discussions, drafting mayoral regulations, government consultations, and advocacy for rights fulfillment.",
      activity3ImgAlt: "FKM BKA YWU participation in rights advocacy forum and Our Voice Count climate conference",
      activity4Title: "SDG Monitoring and Inclusive Development",
      activity4Desc: "Capacity building, data collection, policy dialogue, and gender- and disability-responsive SDG advocacy.",
      activity4ImgAlt: "Capacity building and facility support activities for women with disabilities",
      activity5Title: "Social Entrepreneurship and Economic Independence",
      activity5Desc: "Entrepreneurship training and business development including pandan woven sandals, Papuan noken crafts, and canvas goodie bag products.",
      activity5ImgAlt: "Disability entrepreneurship product booth exhibition at the QRIS Festival",

      // Gallery / Instagram
      galleryBadge: "Activity Gallery",
      galleryTitle: "Latest Documentation and Activities",
      galleryDesc: "Follow exciting moments and latest insights from our activities directly on Instagram.",
      galleryBadgePost: "Post",
      galleryBadgeReels: "Reels Video",
      galleryCard1Caption: "Free Capacity Building & Mentoring Program for parents, families, and special education teachers supporting children with autism in Medan.",
      galleryCard2Caption: "Syifa Turrahma's voice at DPRK Banda Aceh Public Hearing: Advocating for genuine employment opportunities and accessible inclusive education for persons with disabilities.",
      galleryCard3Caption: "Public Consultation on the Regional Action Plan for Gender and Climate Change (RAD GPI) Banda Aceh to champion inclusive and gender-responsive climate policies.",
      galleryCard4Caption: "Feminist Festival of Resistance & Alternatives: Standing in solidarity to champion gender justice, challenge inequality, and build an inclusive future.",
      galleryCard5Caption: "Participation in global ECOSOC dialogues amplifying community voices and ensuring women with disabilities are represented in international decision-making.",
      galleryCard6Caption: "Collaborative knowledge sharing and online learning: Expanding insights and exchanging ideas for women's empowerment and genuine equality.",
      galleryBtnView: "View on Instagram",

      // Impact Counter
      impactBadge: "Real Impact",
      impactTitle: "Ever-Growing Impact",
      impactDesc: "Achievement statistics across mentoring, adaptive vocational training, and inclusive empowerment initiatives by FKM BKA YWU.",
      impactStat1Title: "DRR Training & Briefing",
      impactStat1Desc: "Inclusive disaster risk reduction training.",
      impactStat2Title: "Evacuation Simulations",
      impactStat2Desc: "Disability-friendly disaster evacuation drills.",
      impactStat3Title: "Disabled Training Participants",
      impactStat3Desc: "Persons with disabilities who have participated in training.",
      impactStat4Title: "Evacuation Drill Participants",
      impactStat4Desc: "Active participants who joined evacuation simulations.",
      impactStat5Title: "Public Facilities Assessed",
      impactStat5Desc: "Public facilities audited for accessibility.",
      impactStat6Title: "Inclusion Webinars",
      impactStat6Desc: "Online inclusion education and advocacy sessions.",
      impactStat7Title: "Sustainable Activities",
      impactStat7Desc: "Series of programs and activities conducted since 2014.",

      // Partners
      partnersBadge: "Network & Collaboration",
      partnersTitle: "Partners and Strategic Supporters",
      partnersDesc: "Collaborating alongside international and national organizations to champion disability rights fulfillment, gender equality, and entrepreneurial self-reliance.",
      partnersViewGrid: "All Logos (Grid)",
      partnersViewMarquee: "Continuous Slider",
      marqueePause: "Pause Animation",
      marqueePlay: "Play Animation",
      marqueeBtnLabelPause: "Pause partner logos animation",
      marqueeBtnLabelPlay: "Play partner logos animation",

      // Footer
      footerDesc: "Forum kesetaraan masyarakat berkeadilan kolaboratif adaptif yasa wahana utama",
      footerContactTitle: "Official Contacts",
      footerEmailLabel: "Email:",
      footerPhoneLabel: "Phone / WhatsApp:",
      footerAddressTitle: "Address",
      footerAddressText: "Jl. Gunung Sibayak Glugu Darat II, Medan Timur",
      footerSocialTitle: "Social Media",
      footerSocialDesc: "Stay connected with the latest updates and programs from FKM BKA YWU on our official channels:",
      footerCopyright: "© 2026 FKM BKA YWU. All Rights Reserved.",
      footerPrivacy: "Privacy Policy",
      footerTerms: "Terms & Conditions",
      privacyModalTitle: "Privacy Policy",
      privacyModalP1: "FKM BKA YWU is fully committed to safeguarding the privacy of every visitor, community member, friend with a disability, and partner accessing this website.",
      privacyModalSec1Title: "1. Data Collection & Usage",
      privacyModalSec1Desc: "This website does not collect personal data without your consent. Any contact information shared via official email or channels is used solely for advocacy and inclusive entrepreneurship programs.",
      privacyModalSec2Title: "2. Preference Storage (Local Storage)",
      privacyModalSec2Desc: "We only use your browser's Local Storage to remember your preferred language selection (ID/EN) for seamless navigation.",
      privacyModalSec3Title: "3. Information Security & Confidentiality",
      privacyModalSec3Desc: "All communication data is maintained under strict confidentiality standards and is never shared or sold to third parties.",
      privacyModalCloseBtn: "Close",
      termsModalTitle: "Terms & Conditions",
      termsModalP1: "Welcome to the official website of FKM BKA YWU. By accessing this website, you agree to the following terms and conditions to foster a safe, respectful, and inclusive digital space.",
      termsModalSec1Title: "1. Intellectual Property Rights",
      termsModalSec1Desc: "All published materials, logos, and program documentation are protected by copyright. Non-commercial use for educational and social advocacy purposes is permitted with proper attribution to FKM BKA YWU.",
      termsModalSec2Title: "2. Use of Information & Services",
      termsModalSec2Desc: "Users are expected to utilize organizational information and communication channels ethically, responsibly, and without causing harm to persons with disabilities or the broader community.",
      termsModalSec3Title: "3. Updates to Terms",
      termsModalSec3Desc: "These terms may be updated periodically to maintain service quality, transparency, and alignment with applicable regulations.",
      termsModalCloseBtn: "Close"
    }
  };

  let currentLang = 'id';

  function formatNumber(num) {
    if (currentLang === 'en') {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  /* ==========================================================================
     1. Language Switcher (i18n) Engine
     ========================================================================== */
  function applyLanguage(lang) {
    if (!i18nData[lang]) lang = 'id';
    currentLang = lang;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage may fail in private browsing mode, gracefully ignore
    }

    const dict = i18nData[lang];

    // Update <html lang="...">
    document.documentElement.lang = dict.htmlLang;

    // Update document title & meta description
    document.title = dict.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.metaDescription);

    // Update all text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update dynamic attributes (e.g. alt, aria-label, title)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach(pair => {
        const parts = pair.split(':');
        if (parts.length === 2) {
          const attr = parts[0].trim();
          const key = parts[1].trim();
          if (dict[key] !== undefined) {
            el.setAttribute(attr, dict[key]);
          }
        }
      });
    });

    // Update Language Switcher Button visual & accessibility states
    const langCodeEl = document.getElementById('lang-code');
    const langBtn = document.getElementById('lang-switcher');
    if (langCodeEl) {
      langCodeEl.textContent = dict.langCode;
    }
    if (langBtn) {
      langBtn.setAttribute('aria-label', dict.langBtnLabel);
      langBtn.setAttribute('title', dict.langBtnTitle);
    }

    // Update Mobile Menu Toggle aria-label
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-label', isOpen ? dict.menuClose : dict.menuOpen);
    }

    // Refresh number formatting on counter elements
    document.querySelectorAll('.counter-val').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      if (!isNaN(target)) {
        el.textContent = `${formatNumber(target)}${suffix}`;
      }
    });
  }

  function initLanguageSwitcher() {
    let savedLang = 'id';
    try {
      savedLang = localStorage.getItem(STORAGE_KEY) || 'id';
    } catch (e) {
      savedLang = 'id';
    }

    const langBtn = document.getElementById('lang-switcher');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'id' ? 'en' : 'id';
        applyLanguage(nextLang);
      });
    }

    // Apply saved or default language on startup
    applyLanguage(savedLang);
  }

  /* ==========================================================================
     2. Mobile Menu Toggle with ARIA Attributes
     ========================================================================== */
  function initMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-nav');
    if (!toggleBtn || !mobileMenu) return;

    function setMenuState(isOpen) {
      const dict = i18nData[currentLang] || i18nData.id;
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', isOpen ? dict.menuClose : dict.menuOpen);

      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        const firstLink = mobileMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      }
    }

    toggleBtn.addEventListener('click', () => {
      const isCurrentlyOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
      setMenuState(!isCurrentlyOpen);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
        toggleBtn.focus();
      }
    });

    // Close on menu link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        setMenuState(false);
      });
    });
  }

  /* ==========================================================================
     3. Accessible Smooth Scroll with Focus Management
     ========================================================================== */
  function initAccessibleScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]:not(.skip-link)');

    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();

          targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
          });

          // Ensure target element can receive focus programmatically
          if (!targetElement.hasAttribute('tabindex')) {
            targetElement.setAttribute('tabindex', '-1');
          }
          targetElement.focus({ preventScroll: true });

          // Update URL hash
          if (history.pushState) {
            history.pushState(null, null, targetId);
          } else {
            location.hash = targetId;
          }
        }
      });
    });
  }

  /* ==========================================================================
     4. Impact Statistics Counter Animation
     ========================================================================== */
  function initImpactCounters() {
    const counterElements = document.querySelectorAll('.counter-val');
    if (!counterElements.length) return;

    let animated = false;

    function runAnimation() {
      if (animated) return;
      animated = true;

      counterElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';

        // If reduced motion is preferred, immediately set target value
        if (prefersReducedMotion || isNaN(target)) {
          el.textContent = `${formatNumber(target)}${suffix}`;
          return;
        }

        const duration = 1600; // ms
        const startTimestamp = performance.now();

        function step(currentTimestamp) {
          const elapsed = currentTimestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic curve
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.floor(easeOut * target);

          el.textContent = `${formatNumber(currentCount)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = `${formatNumber(target)}${suffix}`;
          }
        }

        requestAnimationFrame(step);
      });
    }

    // Trigger when section comes into view
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runAnimation();
            obs.disconnect();
          }
        });
      }, { threshold: 0.25 });

      const section = document.getElementById('dampak');
      if (section) {
        observer.observe(section);
      } else {
        runAnimation();
      }
    } else {
      runAnimation();
    }
  }

  /* ==========================================================================
     5. Legal Modals Controller (Privacy & Terms - Accessible & Keyboard-Friendly)
     ========================================================================== */
  function initLegalModals() {
    function setupModal(triggerId, modalId, closeTopId, closeBottomId) {
      const trigger = document.getElementById(triggerId);
      const modal = document.getElementById(modalId);
      const closeBtnTop = document.getElementById(closeTopId);
      const closeBtnBottom = document.getElementById(closeBottomId);
      if (!trigger || !modal) return;

      function openModal(e) {
        if (e) e.preventDefault();
        if (typeof modal.showModal === 'function') {
          modal.showModal();
        } else {
          modal.setAttribute('open', '');
        }
      }

      function closeModal() {
        if (typeof modal.close === 'function') {
          modal.close();
        } else {
          modal.removeAttribute('open');
        }
        trigger.focus();
      }

      trigger.addEventListener('click', openModal);
      if (closeBtnTop) closeBtnTop.addEventListener('click', closeModal);
      if (closeBtnBottom) closeBtnBottom.addEventListener('click', closeModal);

      // Close when clicking on dialog backdrop
      modal.addEventListener('click', (e) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                            rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) {
          closeModal();
        }
      });
    }

    setupModal('privacy-link', 'privacy-modal', 'close-privacy-modal', 'close-privacy-btn-bottom');
    setupModal('terms-link', 'terms-modal', 'close-terms-modal', 'close-terms-btn-bottom');
  }

  /* ==========================================================================
     6. Work Area Interactive Indonesia Map (Stagger Fallback & Escape Dismiss)
     ========================================================================== */
  function initWorkAreaMap() {
    const pinList = document.getElementById('indonesia-map-pins');
    if (!pinList) return;

    const pins = [...pinList.children];

    // Fallback for browsers without native CSS sibling-index() support
    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function' &&
        !CSS.supports('animation-delay: calc(sibling-index() * 0.1s)')) {
      pins.forEach((el, index) => {
        el.style.setProperty('--sibling-index', index + 1);
      });
    }

    // WCAG 1.4.13 Dismissible: allow Escape key to dismiss active hover/focus tooltip
    pins.forEach((pin) => {
      pin.addEventListener('mouseleave', () => pin.classList.remove('is-dismissed'));
      pin.addEventListener('blur', () => pin.classList.remove('is-dismissed'));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        pins.forEach((pin) => {
          if (pin.matches(':hover, :focus, :focus-visible')) {
            pin.classList.add('is-dismissed');
          }
        });
      }
    });
  }

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    initAccessibleScroll();
    initImpactCounters();
    initLegalModals();
    initWorkAreaMap();
  });
})();
