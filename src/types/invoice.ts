export type InvoiceStatus = 'draft' | 'menunggak' | 'follow_up' | 'dibayar' | 'dibatalkan';

export type ServiceCategory = 
  | 'Social Media Management'
  | 'Video Editing & Production'
  | 'Motion Design & Animation'
  | 'Photo Editing & Commercial'
  | 'UI/UX & Web Development'
  | 'Branding & Graphic Design'
  | 'Custom Creative';

export interface InvoiceItem {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  total: number;
}

export interface ClientInfo {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  client: ClientInfo;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
  items: InvoiceItem[];
  subtotal: number;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  discountAmount: number;
  taxRate: number; // percentage
  taxAmount: number;
  grandTotal: number;
  paymentTerms: string;
  notes: string;
  followUpCount?: number;
  lastFollowUpDate?: string;
  paymentReceivedDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyProfile {
  name: string;
  tagline: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  secondaryBankName?: string;
  secondaryAccountNumber?: string;
  secondaryAccountHolder?: string;
}

export interface ServicePreset {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  unit: string;
  suggestedPrice: number;
}
