/**
 * iO Property | Interior Mukomuko - Interactive Scripts
 * Handles mobile navigation, catalog filtering, detail modals,
 * and the interactive Interior Cost Estimator.
 */

// Configuration - Change phone number here
const CONFIG = {
  phone: '6281234567890', // Format: 628... (tanpa + atau 0 di depan)
  businessName: 'iO Property | Interior Mukomuko',
  location: 'Kota Mukomuko, Kabupaten Mukomuko, Bengkulu'
};

// Portfolio Data
const portfolioData = [
  {
    id: 1,
    title: 'Modern Japandi Kitchen Set & Mini Bar',
    category: 'kitchen',
    location: 'Bandar Ratu, Kota Mukomuko',
    duration: '14 Hari Kerja',
    material: 'Multiplex 18mm, Finishing HPL Taco Woodgrain & Warm White, Top Table Granit Black Nero',
    specs: 'Panjang 4.2 meter lari, Soft-closing Hinge, LED Hidden Strip 3000K Warm',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    description: 'Konsep dapur minimalis bergaya Japandi yang hangat dan fungsional. Memaksimalkan sudut ruangan rumah dinas/pribadi di Mukomuko dengan kabinet atas tertutup dan ambalan display bumbu.'
  },
  {
    id: 2,
    title: 'Luxury Master Bedroom & Walk-in Closet',
    category: 'bedroom',
    location: 'Ujung Padang, Kota Mukomuko',
    duration: '18 Hari Kerja',
    material: 'Multiplex Grade A, Fluted Wall Panel (Kisi-kisi), Cermin Bevel Bronze, Headboard Busa Kulit Sintetis',
    specs: 'Luas Kamar 4x5 meter, Lemari Pakaian Full Plafon 3 Pintu Geser, Meja Rias Floating',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop',
    description: 'Transformasi kamar tidur utama dengan atmosfer hotel bintang 5. Dilengkapi pencahayaan ambient redup yang menenangkan untuk istirahat optimal.'
  },
  {
    id: 3,
    title: 'Aesthetic Marble Backdrop TV & Floating Credenza',
    category: 'living',
    location: 'Penarik, Kabupaten Mukomuko',
    duration: '7 Hari Kerja',
    material: 'PVC Marble Sheet UV Gloss, Wood Panel Accent, Rangka Besi Hollow & Multiplex',
    specs: 'Ukuran Backdrop 3.2 x 2.8 meter, Muat TV hingga 65 inch, Hidden Cable Management',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description: 'Pusat perhatian ruang keluarga yang elegan dan bebas kabel berantakan. Motif marmer carrara dipadu kisi-kisi kayu natural memberikan sentuhan modern berkelas.'
  },
  {
    id: 4,
    title: 'Modern Coffee Shop & Boutique Interior',
    category: 'commercial',
    location: 'Pusat Kota Mukomuko',
    duration: '21 Hari Kerja',
    material: 'Kombinasi Steel Hollow, Kayu Solid Jati Belanda, HPL Industrial Concrete & Warm Accent',
    specs: 'Bar Counter 5 meter, Meja Barista Ergonomis, Display Pastry, Seating Area 40 Pax',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
    description: 'Desain interior komersial untuk cafe kekinian di Mukomuko. Efisiensi alur barista, spot foto Instagramable untuk menarik anak muda dan keluarga berkunjung.'
  },
  {
    id: 5,
    title: 'Minimalist L-Shaped Kitchen Set',
    category: 'kitchen',
    location: 'Lubuk Pinang, Mukomuko',
    duration: '10 Hari Kerja',
    material: 'Multiplex Anti Lembap, HPL Dove Grey & Matte White, Rak Piring Stainless Steel 304',
    specs: 'Panjang 3.5 meter, Rak Bumbu Tarik, Tempat Gas Tertutup dengan Ventilasi',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
    description: 'Solusi cerdas dapur type 36 dan 45. Penataan bentuk L yang memanfaatkan sudut mati, membuat kegiatan memasak menjadi praktis dan rapi.'
  },
  {
    id: 6,
    title: 'Rumah Tinggal Siap Huni Full Furnished Type 70',
    category: 'property',
    location: 'Komplek Asri, Kota Mukomuko',
    duration: 'Siap Huni (Ready to Move)',
    material: 'Pondasi Batu Kali, Dinding Bata Plester Aci, Interior Custom Full Set',
    specs: 'LT 140 m² / LB 70 m², 3 Kamar Tidur, 2 Kamar Mandi, Carport Kanopi, Sertifikat SHM',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    description: 'Unit properti eksklusif dipadukan dengan desain interior lengkap: Kitchen set, backdrop TV, tempat tidur utama, dan taman minimalis depan.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPortfolio();
  initEstimator();
  initModal();
  initFAQ();
  initLeadForm();
});

// 1. Navigation handling
function initNavbar() {
  const header = document.getElementById('mainHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('glass-header-scrolled');
    } else {
      header.classList.remove('glass-header-scrolled');
    }
  });

  // Toggle mobile drawer
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('.menu-icon');
      if (icon) {
        icon.classList.toggle('rotate-90');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// 2. Portfolio Gallery & Filtering
function initPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  renderPortfolioItems('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-600', 'text-white', 'shadow-md');
        b.classList.add('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      });

      btn.classList.add('bg-amber-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');

      const filter = btn.getAttribute('data-filter');
      renderPortfolioItems(filter);
    });
  });
}

function renderPortfolioItems(category) {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => `
    <div class="portfolio-card group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div class="relative overflow-hidden aspect-[4/3] bg-stone-100 cursor-pointer" onclick="openModal(${item.id})">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="portfolio-img-zoom w-full h-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-amber-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            Lihat Spesifikasi & RAB
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </span>
        </div>
        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-medium bg-black/60 backdrop-blur-md text-white capitalize">
          ${getCategoryName(item.category)}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 text-stone-500 text-xs mb-2">
            <svg class="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            <span>${item.location}</span>
          </div>
          <h3 class="text-lg font-bold text-stone-900 group-hover:text-amber-600 transition-colors line-clamp-1">
            ${item.title}
          </h3>
          <p class="text-stone-600 text-sm mt-2 line-clamp-2">
            ${item.description}
          </p>
        </div>
        <div class="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
          <span class="text-xs font-medium text-stone-500">Estimasi Pengerjaan: <strong class="text-stone-800">${item.duration}</strong></span>
          <button 
            onclick="openModal(${item.id})"
            class="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1"
          >
            Rincian
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function getCategoryName(cat) {
  switch (cat) {
    case 'kitchen': return 'Kitchen Set';
    case 'bedroom': return 'Kamar Tidur';
    case 'living': return 'Living Room & Backdrop';
    case 'commercial': return 'Cafe & Toko';
    case 'property': return 'Properti Mukomuko';
    default: return 'Interior';
  }
}

// 3. Detail Lightbox Modal
function initModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('modal-hidden')) {
      closeModal();
    }
  });
}

function openModal(id) {
  const item = portfolioData.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('projectModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalLocation = document.getElementById('modalLocation');
  const modalDesc = document.getElementById('modalDescription');
  const modalMaterial = document.getElementById('modalMaterial');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalDuration = document.getElementById('modalDuration');
  const modalWaBtn = document.getElementById('modalWaBtn');

  modalImg.src = item.image;
  modalImg.alt = item.title;
  modalTitle.textContent = item.title;
  modalCategory.textContent = getCategoryName(item.category);
  modalLocation.textContent = item.location;
  modalDesc.textContent = item.description;
  modalMaterial.textContent = item.material;
  modalSpecs.textContent = item.specs;
  modalDuration.textContent = item.duration;

  // WhatsApp link generator for this exact project
  const text = encodeURIComponent(
    `Halo iO Property Mukomuko, saya tertarik dengan portofolio: "${item.title}" di ${item.location}. Mohon info konsultasi dan estimasi biaya untuk kebutuhan saya.`
  );
  modalWaBtn.href = `https://wa.me/${CONFIG.phone}?text=${text}`;

  modal.classList.remove('modal-hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('modal-hidden');
    document.body.style.overflow = '';
  }
}

// 4. Interactive Cost Estimator (Kalkulator RAB Interior Mukomuko)
function initEstimator() {
  const roomSelect = document.getElementById('estRoomType');
  const sizeInput = document.getElementById('estSize');
  const sizeValueDisplay = document.getElementById('estSizeDisplay');
  const materialRadios = document.querySelectorAll('input[name="estMaterial"]');
  const optionCheckboxes = document.querySelectorAll('.est-addon');
  
  const resultLow = document.getElementById('estResultLow');
  const resultHigh = document.getElementById('estResultHigh');
  const waEstimatorBtn = document.getElementById('estWaBtn');

  if (!roomSelect || !sizeInput) return;

  function calculate() {
    const roomType = roomSelect.value;
    const size = parseFloat(sizeInput.value) || 3;
    sizeValueDisplay.textContent = `${size} m / m²`;

    // Base rates per meter
    let baseRate = 2100000; // Standard HPL Multiplex
    const selectedMat = document.querySelector('input[name="estMaterial"]:checked')?.value || 'standard';
    
    if (selectedMat === 'standard') {
      baseRate = 2100000;
    } else if (selectedMat === 'premium') {
      baseRate = 2650000;
    } else if (selectedMat === 'luxury') {
      baseRate = 3450000;
    }

    // Room multiplier
    let multiplier = 1.0;
    let roomLabel = 'Kitchen Set';
    switch (roomType) {
      case 'kitchen':
        multiplier = 1.0;
        roomLabel = 'Kitchen Set Minimalis';
        break;
      case 'backdrop':
        multiplier = 0.85;
        roomLabel = 'Backdrop TV & Kisi-Kisi';
        break;
      case 'wardrobe':
        multiplier = 1.15;
        roomLabel = 'Lemari Wardrobe Full Plafon';
        break;
      case 'bedroom':
        multiplier = 1.25;
        roomLabel = 'Set Kamar Tidur Lengkap';
        break;
      case 'commercial':
        multiplier = 1.1;
        roomLabel = 'Interior Toko / Cafe Mukomuko';
        break;
    }

    let subtotal = baseRate * size * multiplier;

    // Addons
    let addonsCost = 0;
    let selectedAddonsList = [];
    optionCheckboxes.forEach(cb => {
      if (cb.checked) {
        addonsCost += parseFloat(cb.value);
        selectedAddonsList.push(cb.getAttribute('data-label'));
      }
    });

    const totalEstimate = subtotal + addonsCost;
    const lowRange = Math.round((totalEstimate * 0.95) / 50000) * 50000;
    const highRange = Math.round((totalEstimate * 1.08) / 50000) * 50000;

    resultLow.textContent = formatRupiah(lowRange);
    resultHigh.textContent = formatRupiah(highRange);

    // Format WhatsApp pre-filled text
    const materialNames = {
      standard: 'HPL Standard Minimalis',
      premium: 'HPL Premium Anti-Fingerprint / Textured',
      luxury: 'High-end Duco / Marmer Sintetis'
    };
    const matName = materialNames[selectedMat] || selectedMat;
    const addonsStr = selectedAddonsList.length > 0 ? selectedAddonsList.join(', ') : 'Standar tanpa tambahan';

    const waMsg = encodeURIComponent(
      `Halo tim iO Property Mukomuko, saya telah mencoba kalkulator estimasi interior di website:\n\n` +
      `📌 Jenis Pekerjaan: ${roomLabel}\n` +
      `📏 Perkiraan Ukuran: ${size} meter\n` +
      `🪵 Material Pilihan: ${matName}\n` +
      `✨ Tambahan: ${addonsStr}\n` +
      `💰 Estimasi Budget: ${formatRupiah(lowRange)} - ${formatRupiah(highRange)}\n\n` +
      `Saya ingin konsultasi lebih lanjut dan jadwal survey lokasi di Mukomuko. Terima kasih!`
    );

    waEstimatorBtn.href = `https://wa.me/${CONFIG.phone}?text=${waMsg}`;
  }

  // Event listeners
  roomSelect.addEventListener('change', calculate);
  sizeInput.addEventListener('input', calculate);
  materialRadios.forEach(r => r.addEventListener('change', calculate));
  optionCheckboxes.forEach(c => c.addEventListener('change', calculate));

  // Initial run
  calculate();
}

function formatRupiah(val) {
  return 'Rp ' + val.toLocaleString('id-ID');
}

// 5. FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (header && content) {
      header.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        
        // close others
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    }
  });
}

// 6. Lead Form directly to WhatsApp
function initLeadForm() {
  const form = document.getElementById('consultationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('leadName')?.value || '';
    const phone = document.getElementById('leadPhone')?.value || '';
    const location = document.getElementById('leadLocation')?.value || 'Kota Mukomuko';
    const service = document.getElementById('leadService')?.value || 'Desain Interior';
    const notes = document.getElementById('leadNotes')?.value || '-';

    const msg = encodeURIComponent(
      `Halo iO Property Mukomuko, saya ingin booking survey / konsultasi interior:\n\n` +
      `👤 Nama: ${name}\n` +
      `📞 No. WhatsApp: ${phone}\n` +
      `📍 Lokasi di Mukomuko: ${location}\n` +
      `🏠 Layanan: ${service}\n` +
      `📝 Keterangan / Keinginan: ${notes}\n\n` +
      `Mohon dihubungi kembali untuk jadwal diskusi. Terima kasih!`
    );

    window.open(`https://wa.me/${CONFIG.phone}?text=${msg}`, '_blank');
  });
}
