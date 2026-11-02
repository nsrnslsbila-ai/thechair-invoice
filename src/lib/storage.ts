import { Invoice, CompanyProfile } from '@/types/invoice';

const INVOICE_STORAGE_KEY = 'rei_invoices_v1';
const COMPANY_STORAGE_KEY = 'rei_company_v1';

export const DEFAULT_COMPANY_PROFILE: CompanyProfile = {
  name: 'REI Creative Studio',
  tagline: 'Digital Media, Visual Production & Web Experience',
  address: 'Jl. Boulevard Raya Blok R No. 12, Bekasi / Jakarta Selatan, Indonesia',
  email: 'hello.reicreative@gmail.com',
  phone: '081289102938',
  website: 'https://reicreative.vercel.app',
  bankName: 'Bank Central Asia (BCA)',
  accountNumber: '8830918231',
  accountHolder: 'REIHAN ADI PRATAMA (REI CREATIVE)',
  secondaryBankName: 'Bank Mandiri',
  secondaryAccountNumber: '1560019283748',
  secondaryAccountHolder: 'REI CREATIVE STUDIO',
};

export const INITIAL_SEED_INVOICES: Invoice[] = [
  {
    id: 'inv-seed-1',
    invoiceNumber: 'REI/2026/X/012',
    client: {
      name: 'Aditya Pratama',
      company: 'Kopi Kenangan Senja Group',
      email: 'aditya@kopikenangansenja.id',
      phone: '081298765432',
      address: 'Jl. Kemang Raya No. 45, Jakarta Selatan',
    },
    issueDate: '2026-10-10',
    dueDate: '2026-10-24',
    status: 'dibayar',
    paymentReceivedDate: '2026-10-20',
    items: [
      {
        id: 'item-1',
        category: 'Social Media Management',
        name: 'Social Media Management - Growth Plan',
        description: '24 Feed Posts/Carousels + 30 Stories + 8 Short Reels/TikTok, Strategy, Copywriting, DM Admin & Report',
        quantity: 1,
        unit: 'Bulan',
        unitPrice: 6500000,
        total: 6500000,
      },
      {
        id: 'item-2',
        category: 'Video Editing & Production',
        name: 'Short-Form Video Editing (Reels/TikTok/Shorts)',
        description: 'Extra 4 dynamic food & beverage reels video with trending sound effects',
        quantity: 4,
        unit: 'Video',
        unitPrice: 400000,
        total: 1600000,
      },
    ],
    subtotal: 8100000,
    discountType: 'fixed',
    discountValue: 100000,
    discountAmount: 100000,
    taxRate: 0,
    taxAmount: 0,
    grandTotal: 8000000,
    paymentTerms: 'Term 1: Pembayaran 100% lunas.',
    notes: 'Terima kasih atas kerjasamanya! Video deliverables tersimpan di link cloud drive yang sudah dibagikan.',
    createdAt: '2026-10-10T10:00:00Z',
    updatedAt: '2026-10-20T14:30:00Z',
  },
  {
    id: 'inv-seed-2',
    invoiceNumber: 'REI/2026/X/015',
    client: {
      name: 'Natasha Wilona',
      company: 'Glow Aesthetics Clinic',
      email: 'natasha.finance@glowaesthetics.co.id',
      phone: '081188223344',
      address: 'Rukan Grand Galaxy City Blok RGB No. 8, Bekasi',
    },
    issueDate: '2026-10-18',
    dueDate: '2026-11-01',
    status: 'menunggak',
    items: [
      {
        id: 'item-3',
        category: 'UI/UX & Web Development',
        name: 'High-Converting Landing Page Website (Next.js + Tailwind)',
        description: 'Desain & development landing page booking treatment klinik, WhatsApp direct integration, SEO ready',
        quantity: 1,
        unit: 'Project',
        unitPrice: 6500000,
        total: 6500000,
      },
      {
        id: 'item-4',
        category: 'Photo Editing & Commercial',
        name: 'High-End Commercial Photo Retouching',
        description: 'Skin frequency separation & color grading untuk 10 foto dokter & ruangan treatment',
        quantity: 1,
        unit: 'Paket (10 Foto)',
        unitPrice: 1500000,
        total: 1500000,
      },
    ],
    subtotal: 8000000,
    discountType: 'percentage',
    discountValue: 0,
    discountAmount: 0,
    taxRate: 0,
    taxAmount: 0,
    grandTotal: 8000000,
    paymentTerms: 'Pembayaran DP 50% sudah diterima sebelumnya. Invoice ini adalah pelunasan sisa 50%.',
    notes: 'Website sudah live di domain staging. Domain production akan di-pointing setelah pelunasan invoice.',
    createdAt: '2026-10-18T09:15:00Z',
    updatedAt: '2026-10-18T09:15:00Z',
  },
  {
    id: 'inv-seed-3',
    invoiceNumber: 'REI/2026/X/018',
    client: {
      name: 'Farhan Maulana',
      company: 'Aethel Apparel Brand',
      email: 'farhan@aethelsupply.com',
      phone: '081399887766',
      address: 'Jl. Riau No. 88, Bandung',
    },
    issueDate: '2026-10-25',
    dueDate: '2026-11-05',
    status: 'follow_up',
    followUpCount: 1,
    lastFollowUpDate: '2026-11-01',
    items: [
      {
        id: 'item-5',
        category: 'Motion Design & Animation',
        name: '3D Product Animation (Cinema 4D / Octane)',
        description: '3D modeling & visual animation produk jaket streetwear terbaru, 360 rotation & fabric texture close-up',
        quantity: 1,
        unit: 'Project',
        unitPrice: 7500000,
        total: 7500000,
      },
      {
        id: 'item-6',
        category: 'Branding & Graphic Design',
        name: 'Social Media Feed Design Bundle (12 Carousel / Feed Templates)',
        description: 'Desain visual launch campaign koleksi Fall/Winter 2026',
        quantity: 1,
        unit: 'Paket',
        unitPrice: 1800000,
        total: 1800000,
      },
    ],
    subtotal: 9300000,
    discountType: 'fixed',
    discountValue: 300000,
    discountAmount: 300000,
    taxRate: 0,
    taxAmount: 0,
    grandTotal: 9000000,
    paymentTerms: 'Jatuh tempo 10 hari sejak invoice diterbitkan.',
    notes: 'Sudah di-follow up via WhatsApp tanggal 1 Nov. Menunggu approval dari tim finance pusat.',
    createdAt: '2026-10-25T11:20:00Z',
    updatedAt: '2026-11-01T15:00:00Z',
  },
  {
    id: 'inv-seed-4',
    invoiceNumber: 'REI/2026/XI/001',
    client: {
      name: 'Cindy Larasati',
      company: 'Fintech Spark Indonesia',
      email: 'cindy.larasati@sparkfintech.id',
      phone: '081277665544',
      address: 'SCBD District 8 Treasury Tower Lt. 21, Jakarta',
    },
    issueDate: '2026-11-01',
    dueDate: '2026-11-15',
    status: 'menunggak',
    items: [
      {
        id: 'item-7',
        category: 'Motion Design & Animation',
        name: '2D Motion Graphics Explainer Video (60 detik)',
        description: 'Animasi edukasi fitur investasi mikro, custom vector illustration, voice-over sync & full SFX',
        quantity: 2,
        unit: 'Video',
        unitPrice: 3800000,
        total: 7600000,
      },
      {
        id: 'item-8',
        category: 'UI/UX & Web Development',
        name: 'UI/UX Design - Landing Page (Figma High-Fidelity)',
        description: 'Desain responsive hero section & interactive calculator widget di Figma',
        quantity: 1,
        unit: 'Project',
        unitPrice: 4500000,
        total: 4500000,
      },
    ],
    subtotal: 12100000,
    discountType: 'percentage',
    discountValue: 0,
    discountAmount: 0,
    taxRate: 11,
    taxAmount: 1331000,
    grandTotal: 13431000,
    paymentTerms: 'Term of Payment 14 hari kerja. Dilengkapi faktur pajak jika diminta.',
    notes: 'Draft video 1 sudah disetujui tanpa revisi major.',
    createdAt: '2026-11-01T14:00:00Z',
    updatedAt: '2026-11-01T14:00:00Z',
  },
];

export function loadInvoices(): Invoice[] {
  if (typeof window === 'undefined') return INITIAL_SEED_INVOICES;
  try {
    const data = localStorage.getItem(INVOICE_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(INVOICE_STORAGE_KEY, JSON.stringify(INITIAL_SEED_INVOICES));
      return INITIAL_SEED_INVOICES;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_SEED_INVOICES;
  } catch (err) {
    console.error('Error loading invoices from storage', err);
    return INITIAL_SEED_INVOICES;
  }
}

export function saveInvoices(invoices: Invoice[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(INVOICE_STORAGE_KEY, JSON.stringify(invoices));
  } catch (err) {
    console.error('Error saving invoices to storage', err);
  }
}

export function loadCompanyProfile(): CompanyProfile {
  if (typeof window === 'undefined') return DEFAULT_COMPANY_PROFILE;
  try {
    const data = localStorage.getItem(COMPANY_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(COMPANY_STORAGE_KEY, JSON.stringify(DEFAULT_COMPANY_PROFILE));
      return DEFAULT_COMPANY_PROFILE;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading company profile', err);
    return DEFAULT_COMPANY_PROFILE;
  }
}

export function saveCompanyProfile(profile: CompanyProfile): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(COMPANY_STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Error saving company profile', err);
  }
}

export function exportDataAsJSON(invoices: Invoice[], company: CompanyProfile): void {
  const exportData = {
    app: 'REI Creative Studio - Invoice Management',
    version: '1.0',
    exportDate: new Date().toISOString(),
    company,
    invoices,
  };
  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `REI-Invoice-Backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
