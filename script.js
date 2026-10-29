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
      pageTitle: "The Bold Inclusivity | FKM BKA YWU",
      metaDescription: "Landing page resmi FKM BKA YWU bertema The Bold Inclusivity. Berfokus pada aksesibilitas tinggi (WCAG 2.1 AA) dan pemenuhan hak penyandang disabilitas.",
      
      // Header & Navigation
      skipLink: "Lewati ke Konten Utama (Tekan Enter)",
      brandSub: "The Bold Inclusivity",
      navHome: "Beranda",
      navAbout: "Tentang Kami",
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
      heroTagline: "MISI KITA, KEKUATAN BERSAMA",
      heroTitle: "MENEMBUS BATAS, MEWUJUDKAN AKSES SETARA UNTUK SEMUA",
      heroDesc: "Membangun ruang inklusif di mana setiap individu memiliki kesempatan yang sama untuk bertumbuh, berkarya, dan berdaya tanpa sekat.",
      heroCtaJoin: "Gabung Komunitas",
      heroCtaSupport: "Dukung Kami",
      heroImgAlt: "Aksi kebersamaan dan saling bantu para perempuan berhijab dalam kegiatan inklusi dan pemberdayaan FKM BKA YWU",

      // About (3 Pillars)
      aboutBadge: "Fondasi Gerakan",
      aboutTitle: "3 Pilar Utama Kami",
      aboutDesc: "Tiga pilar strategis yang menggerakkan seluruh program FKM BKA YWU dalam mewujudkan kesetaraan hak, kapabilitas vokasi, dan kemandirian wirausaha disabilitas.",
      pilar1Badge: "Pilar 01",
      pilar1Title: "FKM (Forum Komunikasi Masyarakat)",
      pilar1Desc: "Wadah advokasi dan konsolidasi hak-hak penyandang disabilitas. Mengawal implementasi regulasi pemenuhan hak disabilitas, audit aksesibilitas ruang publik, serta mengedukasi masyarakat luas tentang kesetaraan hakiki.",
      pilar2Badge: "Pilar 02",
      pilar2Title: "BKA (Bina Karya Adaptif)",
      pilar2Desc: "Pusat pelatihan vokasi adaptif dan penguatan kapabilitas keahlian kerja berbasis teknologi asistif. Menyelenggarakan simulasi evakuasi kebencanaan mandiri serta workshop ergonomis yang ramah ragam disabilitas.",
      pilar3Badge: "Pilar 03",
      pilar3Title: "YWU (Yayasan Wirausaha Unggul)",
      pilar3Desc: "Inkubasi bisnis sosial dan pembinaan wirausaha mandiri disabilitas. Memfasilitasi produksi kerajinan bernilai komersial, pendampingan legalitas izin usaha, serta menghubungkan karya teman disabilitas ke pasar digital.",

      // Gallery / Instagram
      galleryBadge: "Galeri Kegiatan",
      galleryTitle: "Dokumentasi & Kegiatan Terbaru",
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
      impactStat1Title: "Jumlah UMKM Binaan",
      impactStat1Desc: "Usaha mikro berbasis disabilitas yang berproduksi aktif dan terhubung ke pasar komersial.",
      impactStat2Title: "Anggota Komunitas",
      impactStat2Desc: "Sahabat disabilitas, pendamping keluarga, dan relawan profesional yang bergerak aktif.",
      impactStat3Title: "Program Selesai",
      impactStat3Desc: "Pelatihan vokasi adaptif, klinik legalitas usaha, audit aksesibilitas, dan advokasi sosial.",

      // Partners
      partnersBadge: "Jaringan & Kolaborasi",
      partnersTitle: "Mitra & Pendukung Strategis",
      partnersDesc: "Bergerak bersama berbagai lembaga internasional dan nasional dalam mendorong pemenuhan hak, kesetaraan gender, dan kemandirian wirausaha disabilitas.",
      marqueePause: "Jeda Animasi",
      marqueePlay: "Putar Animasi",
      marqueeBtnLabelPause: "Jeda animasi logo mitra",
      marqueeBtnLabelPlay: "Putar animasi logo mitra",

      // Footer
      footerDesc: "Gerakan independen yang mewadahi advokasi kesetaraan hak, peningkatan keahlian kerja, dan inkubasi UMKM disabilitas.",
      footerContactTitle: "Kontak Resmi",
      footerEmailLabel: "Email:",
      footerPhoneLabel: "Telepon / WhatsApp:",
      footerAddressTitle: "Alamat",
      footerAddressText: "Jl. Gunung Sibayak Glugu Darat II, Medan Timur",
      footerAddressNote: "*Aksesibel kursi roda dan ramah pemandu taktil.",
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
      pageTitle: "The Bold Inclusivity | FKM BKA YWU",
      metaDescription: "Official landing page of FKM BKA YWU themed The Bold Inclusivity. Focusing on high accessibility (WCAG 2.1 AA) and the fulfillment of disability rights.",

      // Header & Navigation
      skipLink: "Skip to Main Content (Press Enter)",
      brandSub: "The Bold Inclusivity",
      navHome: "Home",
      navAbout: "About Us",
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
      heroTagline: "OUR MISSION, UNITED STRENGTH",
      heroTitle: "BREAKING BOUNDARIES, REALIZING EQUAL ACCESS FOR ALL",
      heroDesc: "Building an inclusive space where every individual has equal opportunities to grow, create, and thrive without barriers.",
      heroCtaJoin: "Join Community",
      heroCtaSupport: "Support Us",
      heroImgAlt: "Togetherness and mutual assistance of women wearing hijabs in FKM BKA YWU inclusion and empowerment activities",

      // About (3 Pillars)
      aboutBadge: "Movement Foundation",
      aboutTitle: "Our 3 Core Pillars",
      aboutDesc: "Three strategic pillars driving all FKM BKA YWU programs toward equal rights, vocational capabilities, and entrepreneurship independence for people with disabilities.",
      pilar1Badge: "Pillar 01",
      pilar1Title: "FKM (Community Communication Forum)",
      pilar1Desc: "A dedicated platform for advocating and consolidating disability rights. Overseeing the enforcement of disability regulations, conducting public space accessibility audits, and educating the wider public on genuine equality.",
      pilar2Badge: "Pillar 02",
      pilar2Title: "BKA (Adaptive Vocational Development)",
      pilar2Desc: "A vocational training and skill-enhancement hub powered by assistive technologies. Organizing self-reliance disaster evacuation simulations and disability-inclusive ergonomic workshops.",
      pilar3Badge: "Pillar 03",
      pilar3Title: "YWU (Excellence Entrepreneurship Foundation)",
      pilar3Desc: "A social business incubation center supporting independent disability entrepreneurs. Facilitating commercially viable handicraft production, legal business licensing assistance, and digital market access.",

      // Gallery / Instagram
      galleryBadge: "Activity Gallery",
      galleryTitle: "Latest Documentation & Activities",
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
      impactStat1Title: "Supported MSMEs",
      impactStat1Desc: "Disability-led micro-enterprises actively producing goods and connected to commercial markets.",
      impactStat2Title: "Community Members",
      impactStat2Desc: "Persons with disabilities, family companions, and dedicated professional volunteers actively engaged.",
      impactStat3Title: "Completed Programs",
      impactStat3Desc: "Adaptive vocational workshops, business legality clinics, accessibility audits, and social advocacy campaigns.",

      // Partners
      partnersBadge: "Network & Collaboration",
      partnersTitle: "Partners & Strategic Supporters",
      partnersDesc: "Collaborating alongside international and national organizations to champion disability rights fulfillment, gender equality, and entrepreneurial self-reliance.",
      marqueePause: "Pause Animation",
      marqueePlay: "Play Animation",
      marqueeBtnLabelPause: "Pause partner logos animation",
      marqueeBtnLabelPlay: "Play partner logos animation",

      // Footer
      footerDesc: "An independent movement championing equal rights advocacy, vocational workforce capabilities, and MSME incubation for persons with disabilities.",
      footerContactTitle: "Official Contacts",
      footerEmailLabel: "Email:",
      footerPhoneLabel: "Phone / WhatsApp:",
      footerAddressTitle: "Address",
      footerAddressText: "Jl. Gunung Sibayak Glugu Darat II, Medan Timur",
      footerAddressNote: "*Wheelchair accessible and tactile guide friendly.",
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

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    initAccessibleScroll();
    initImpactCounters();
    initLegalModals();
  });
})();
