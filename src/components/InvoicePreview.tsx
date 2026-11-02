'use client';

import React from 'react';
import { 
  Printer, 
  X, 
  MessageSquare, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Building2, 
  Mail, 
  Phone, 
  Globe, 
  Share2
} from 'lucide-react';
import { Invoice, CompanyProfile } from '@/types/invoice';
import { formatIDR, formatDateIndo } from '@/lib/format';

interface InvoicePreviewProps {
  invoice: Invoice;
  company: CompanyProfile;
  onClose: () => void;
  onEdit: (invoice: Invoice) => void;
  onOpenWhatsApp: (invoice: Invoice) => void;
}

export const InvoicePreview: React.FC<InvoicePreviewProps> = ({
  invoice,
  company,
  onClose,
  onEdit,
  onOpenWhatsApp,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const isOverdue = new Date(invoice.dueDate) < new Date() && invoice.status !== 'dibayar';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-2 sm:p-6 flex justify-center animate-fadeIn print:p-0 print:bg-white print:static">
      
      <div className="w-full max-w-4xl space-y-4 my-auto">
        
        {/* Top Floating Action Bar (Hidden during Print) */}
        <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl shadow-2xl print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-violet-400">
              {invoice.invoiceNumber}
            </span>
            <span className="text-xs text-zinc-400">
              • {invoice.client.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenWhatsApp(invoice)}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium px-3.5 py-1.5 rounded-xl shadow-md transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Kirim ke WhatsApp</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium px-3.5 py-1.5 rounded-xl shadow-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              onClick={() => onEdit(invoice)}
              className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl transition-colors"
              title="Edit Invoice"
            >
              <Edit3 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl transition-colors"
              title="Tutup Preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Document Container */}
        <div 
          id="printable-invoice"
          className="bg-white text-zinc-900 rounded-2xl shadow-2xl p-8 sm:p-12 relative overflow-hidden border border-zinc-200 print:border-none print:shadow-none print:rounded-none print:p-0"
        >
          {/* Status Watermark Stamp */}
          <div className="absolute top-16 right-12 pointer-events-none opacity-20 rotate-[-15deg] select-none">
            {invoice.status === 'dibayar' && (
              <div className="border-4 border-emerald-600 text-emerald-700 font-black text-3xl sm:text-5xl uppercase px-6 py-2 rounded-2xl tracking-widest">
                LUNAS / PAID
              </div>
            )}
            {invoice.status === 'menunggak' && (
              <div className="border-4 border-rose-600 text-rose-700 font-black text-3xl sm:text-5xl uppercase px-6 py-2 rounded-2xl tracking-widest">
                {isOverdue ? 'JATUH TEMPO' : 'MENUNGGAK'}
              </div>
            )}
            {invoice.status === 'follow_up' && (
              <div className="border-4 border-amber-600 text-amber-700 font-black text-3xl sm:text-5xl uppercase px-6 py-2 rounded-2xl tracking-widest">
                FOLLOW UP
              </div>
            )}
          </div>

          {/* Invoice Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-zinc-200 pb-8">
            {/* Brand Logo & Company Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-white font-black text-2xl tracking-tighter shadow-md">
                  REI
                </div>
                <div>
                  <h1 className="text-xl font-black text-zinc-950 tracking-tight">{company.name}</h1>
                  <p className="text-xs text-zinc-500 font-medium">{company.tagline}</p>
                </div>
              </div>

              <div className="text-xs text-zinc-500 space-y-0.5 pt-2 max-w-sm">
                <p>{company.address}</p>
                <p>Email: {company.email} • WA: {company.phone}</p>
                {company.website && <p>{company.website}</p>}
              </div>
            </div>

            {/* Invoice Meta */}
            <div className="text-left sm:text-right space-y-1">
              <div className="text-2xl font-black text-zinc-900 tracking-tight uppercase">
                INVOICE
              </div>
              <div className="font-mono text-sm font-bold text-violet-700">
                {invoice.invoiceNumber}
              </div>

              <div className="text-xs text-zinc-600 pt-2 space-y-1">
                <div>
                  <span className="text-zinc-400">Tanggal Terbit: </span>
                  <strong>{formatDateIndo(invoice.issueDate)}</strong>
                </div>
                <div>
                  <span className="text-zinc-400">Jatuh Tempo: </span>
                  <strong className={isOverdue ? 'text-rose-600' : 'text-zinc-800'}>
                    {formatDateIndo(invoice.dueDate)}
                  </strong>
                </div>
                <div>
                  <span className="text-zinc-400">Status: </span>
                  <span className={`inline-block font-bold uppercase text-[11px] px-2 py-0.5 rounded ${
                    invoice.status === 'dibayar' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : invoice.status === 'menunggak' 
                      ? 'bg-rose-100 text-rose-800' 
                      : invoice.status === 'follow_up'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-zinc-100 text-zinc-700'
                  }`}>
                    {invoice.status === 'dibayar' ? 'Dibayar (Lunas)' : invoice.status === 'menunggak' ? 'Menunggak' : invoice.status === 'follow_up' ? 'Sudah Follow Up' : 'Draft'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Details Box (Bill To) */}
          <div className="my-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                Ditagihkan Kepada (Bill To):
              </div>
              <div className="text-sm font-bold text-zinc-950">{invoice.client.name}</div>
              {invoice.client.company && (
                <div className="text-xs font-semibold text-zinc-700">{invoice.client.company}</div>
              )}
              {invoice.client.address && (
                <div className="text-zinc-500 mt-1">{invoice.client.address}</div>
              )}
            </div>

            <div className="sm:text-right space-y-1">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                Kontak Klien:
              </div>
              {invoice.client.phone && <div>No. WhatsApp: <strong>{invoice.client.phone}</strong></div>}
              {invoice.client.email && <div>Email: <strong>{invoice.client.email}</strong></div>}
            </div>
          </div>

          {/* Items Table */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-900 text-zinc-950 font-bold">
                  <th className="py-3 px-2 w-10 text-center">No</th>
                  <th className="py-3 px-3">Layanan / Ruang Lingkup Deliverables</th>
                  <th className="py-3 px-2 w-16 text-center">Qty</th>
                  <th className="py-3 px-2 w-20 text-center">Satuan</th>
                  <th className="py-3 px-3 w-32 text-right">Harga Satuan</th>
                  <th className="py-3 px-3 w-32 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {invoice.items.map((item, idx) => (
                  <tr key={item.id} className="align-top">
                    <td className="py-3.5 px-2 text-center text-zinc-400 font-mono">{idx + 1}</td>
                    <td className="py-3.5 px-3">
                      <div className="font-bold text-zinc-900">{item.name}</div>
                      {item.description && (
                        <div className="text-zinc-500 text-[11px] mt-0.5 leading-relaxed">
                          {item.description}
                        </div>
                      )}
                      <span className="inline-block text-[10px] text-violet-700 bg-violet-50 px-2 py-0.2 rounded mt-1 font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-2 text-center font-semibold text-zinc-800">{item.quantity}</td>
                    <td className="py-3.5 px-2 text-center text-zinc-600">{item.unit}</td>
                    <td className="py-3.5 px-3 text-right font-mono text-zinc-800">{formatIDR(item.unitPrice)}</td>
                    <td className="py-3.5 px-3 text-right font-mono font-bold text-zinc-950">{formatIDR(item.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Financial Calculation & Bank Details Section */}
          <div className="mt-8 pt-6 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
            
            {/* Left: Payment Transfer Info & Terms */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-violet-50/70 border border-violet-100 space-y-2">
                <div className="font-bold text-violet-950 uppercase tracking-wider text-[11px]">
                  Instruksi Pembayaran Transfer:
                </div>
                <div className="text-zinc-700 space-y-1">
                  <div>
                    Bank: <strong>{company.bankName}</strong>
                  </div>
                  <div>
                    No. Rekening: <strong className="font-mono text-sm text-zinc-950">{company.accountNumber}</strong>
                  </div>
                  <div>
                    Atas Nama: <strong>{company.accountHolder}</strong>
                  </div>
                </div>

                {company.secondaryBankName && (
                  <div className="text-zinc-600 pt-1 text-[11px] border-t border-violet-200/60">
                    Alternatif: {company.secondaryBankName} - {company.secondaryAccountNumber} (a/n {company.secondaryAccountHolder})
                  </div>
                )}
              </div>

              {invoice.paymentTerms && (
                <div>
                  <div className="font-bold text-zinc-800 text-[11px] uppercase mb-1">Ketentuan Pembayaran:</div>
                  <p className="text-zinc-600 leading-relaxed">{invoice.paymentTerms}</p>
                </div>
              )}

              {invoice.notes && (
                <div>
                  <div className="font-bold text-zinc-800 text-[11px] uppercase mb-1">Catatan:</div>
                  <p className="text-zinc-500 italic leading-relaxed">{invoice.notes}</p>
                </div>
              )}
            </div>

            {/* Right: Subtotal, Discount, Tax, Grand Total + Signature */}
            <div className="space-y-4">
              <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200 space-y-2">
                <div className="flex items-center justify-between text-zinc-600">
                  <span>Subtotal:</span>
                  <span className="font-mono font-semibold">{formatIDR(invoice.subtotal)}</span>
                </div>

                {invoice.discountAmount > 0 && (
                  <div className="flex items-center justify-between text-rose-600">
                    <span>
                      Diskon {invoice.discountType === 'percentage' ? `(${invoice.discountValue}%)` : ''}:
                    </span>
                    <span className="font-mono font-semibold">-{formatIDR(invoice.discountAmount)}</span>
                  </div>
                )}

                {invoice.taxRate > 0 && (
                  <div className="flex items-center justify-between text-zinc-600">
                    <span>PPN ({invoice.taxRate}%):</span>
                    <span className="font-mono font-semibold">+{formatIDR(invoice.taxAmount)}</span>
                  </div>
                )}

                <div className="border-t-2 border-zinc-900 pt-2 flex items-center justify-between">
                  <span className="font-black text-sm text-zinc-950 uppercase">Grand Total:</span>
                  <span className="text-lg font-black text-violet-700 font-mono">
                    {formatIDR(invoice.grandTotal)}
                  </span>
                </div>
              </div>

              {/* Signature Block */}
              <div className="pt-4 flex justify-end">
                <div className="text-center w-48">
                  <div className="text-[11px] text-zinc-500">Hormat Kami,</div>
                  <div className="font-bold text-zinc-900 text-xs mt-0.5">{company.name}</div>
                  
                  {/* Digital Stamp Simulation */}
                  <div className="my-2 h-16 flex items-center justify-center relative">
                    <div className="w-20 h-20 rounded-full border-2 border-violet-600/40 border-dashed flex items-center justify-center text-[9px] font-black uppercase text-violet-700/60 rotate-[-12deg] select-none">
                      REI CREATIVE<br />OFFICIAL
                    </div>
                  </div>

                  <div className="border-b border-zinc-900 pb-1 font-bold text-xs text-zinc-950">
                    REIHAN ADI P.
                  </div>
                  <div className="text-[10px] text-zinc-500">Managing Director</div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer note */}
          <div className="mt-10 pt-4 border-t border-zinc-200 text-center text-[10px] text-zinc-400">
            Invoice ini dibuat secara digital dan sah tanpa tanda tangan basah fisik. Terima kasih atas kepercayaan Anda kepada {company.name}.
          </div>

        </div>

      </div>

    </div>
  );
};
