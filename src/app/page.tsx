'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from '@/components/Navbar';
import { DashboardView } from '@/components/DashboardView';
import { InvoiceList } from '@/components/InvoiceList';
import { InvoiceForm } from '@/components/InvoiceForm';
import { InvoicePreview } from '@/components/InvoicePreview';
import { WhatsAppModal } from '@/components/WhatsAppModal';
import { SettingsModal } from '@/components/SettingsModal';
import { CatalogView } from '@/components/CatalogView';
import { 
  Invoice, 
  InvoiceStatus, 
  CompanyProfile, 
  ServicePreset 
} from '@/types/invoice';
import { 
  loadInvoices, 
  saveInvoices, 
  loadCompanyProfile, 
  saveCompanyProfile, 
  exportDataAsJSON,
  DEFAULT_COMPANY_PROFILE,
  INITIAL_SEED_INVOICES 
} from '@/lib/storage';

export default function HomePage() {
  const [invoices, setInvoices] = useState<Invoice[]>(INITIAL_SEED_INVOICES);
  const [company, setCompany] = useState<CompanyProfile>(DEFAULT_COMPANY_PROFILE);
  const [isLoaded, setIsLoaded] = useState(false);

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<'dashboard' | 'invoices' | 'create' | 'catalog'>('dashboard');

  // Modals & Active editing state
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);
  const [previewingInvoice, setPreviewingInvoice] = useState<Invoice | null>(null);
  const [whatsAppInvoice, setWhatsAppInvoice] = useState<Invoice | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const loadedInvoices = loadInvoices();
    const loadedCompany = loadCompanyProfile();
    setInvoices(loadedInvoices);
    setCompany(loadedCompany);
    setIsLoaded(true);
  }, []);

  // Save changes whenever invoices change
  const updateInvoicesState = (newInvoices: Invoice[]) => {
    setInvoices(newInvoices);
    saveInvoices(newInvoices);
  };

  // Trigger celebration confetti
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#10b981', '#6366f1', '#f59e0b'],
      });
    } catch (e) {
      // safe fallback
    }
  };

  // Save or Update Invoice
  const handleSaveInvoice = (savedInvoice: Invoice) => {
    const exists = invoices.some(i => i.id === savedInvoice.id);
    let updatedList: Invoice[];

    if (exists) {
      updatedList = invoices.map(i => (i.id === savedInvoice.id ? savedInvoice : i));
    } else {
      updatedList = [savedInvoice, ...invoices];
    }

    updateInvoicesState(updatedList);

    if (savedInvoice.status === 'dibayar') {
      triggerCelebration();
    }

    setEditingInvoice(null);
    setPreviewingInvoice(savedInvoice);
    setActiveTab('invoices');
  };

  // Update Status
  const handleUpdateStatus = (invoiceId: string, newStatus: InvoiceStatus) => {
    const today = new Date().toISOString().slice(0, 10);
    const updated = invoices.map(inv => {
      if (inv.id !== invoiceId) return inv;

      const isBecomingPaid = newStatus === 'dibayar' && inv.status !== 'dibayar';
      if (isBecomingPaid) {
        triggerCelebration();
      }

      return {
        ...inv,
        status: newStatus,
        lastFollowUpDate: newStatus === 'follow_up' ? today : inv.lastFollowUpDate,
        followUpCount: newStatus === 'follow_up' ? (inv.followUpCount || 0) + 1 : inv.followUpCount,
        paymentReceivedDate: newStatus === 'dibayar' ? today : inv.paymentReceivedDate,
        updatedAt: new Date().toISOString(),
      };
    });

    updateInvoicesState(updated);
  };

  // Delete Invoice
  const handleDeleteInvoice = (invoiceId: string) => {
    const updated = invoices.filter(i => i.id !== invoiceId);
    updateInvoicesState(updated);
  };

  // Save Company Profile
  const handleSaveCompany = (updatedCompany: CompanyProfile) => {
    setCompany(updatedCompany);
    saveCompanyProfile(updatedCompany);
  };

  // Select service from catalog directly to create invoice
  const handleSelectServiceFromCatalog = (preset: ServicePreset) => {
    const newInvoiceStub: Invoice = {
      id: `inv-${Date.now()}`,
      invoiceNumber: '',
      client: {
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
      },
      issueDate: new Date().toISOString().slice(0, 10),
      dueDate: (() => {
        const d = new Date();
        d.setDate(d.getDate() + 14);
        return d.toISOString().slice(0, 10);
      })(),
      status: 'menunggak',
      items: [
        {
          id: `item-${Date.now()}`,
          category: preset.category,
          name: preset.name,
          description: preset.description,
          quantity: 1,
          unit: preset.unit,
          unitPrice: preset.suggestedPrice,
          total: preset.suggestedPrice,
        },
      ],
      subtotal: preset.suggestedPrice,
      discountType: 'percentage',
      discountValue: 0,
      discountAmount: 0,
      taxRate: 0,
      taxAmount: 0,
      grandTotal: preset.suggestedPrice,
      paymentTerms: 'Term of payment 14 hari kerja.',
      notes: 'Terima kasih atas kerjasamanya!',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setEditingInvoice(newInvoiceStub);
    setActiveTab('create');
  };

  const pendingCount = invoices.filter(i => i.status === 'menunggak').length;

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-violet-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'create') {
            setEditingInvoice(null);
          }
          setActiveTab(tab);
        }}
        company={company}
        onOpenSettings={() => setShowSettings(true)}
        onExportBackup={() => exportDataAsJSON(invoices, company)}
        invoicesCount={invoices.length}
        pendingCount={pendingCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'dashboard' && (
          <DashboardView
            invoices={invoices}
            company={company}
            onCreateNew={() => {
              setEditingInvoice(null);
              setActiveTab('create');
            }}
            onViewInvoice={(inv) => setPreviewingInvoice(inv)}
            onUpdateStatus={handleUpdateStatus}
            onOpenWhatsApp={(inv) => setWhatsAppInvoice(inv)}
            onGoToInvoices={() => setActiveTab('invoices')}
          />
        )}

        {activeTab === 'invoices' && (
          <InvoiceList
            invoices={invoices}
            company={company}
            onCreateNew={() => {
              setEditingInvoice(null);
              setActiveTab('create');
            }}
            onViewInvoice={(inv) => setPreviewingInvoice(inv)}
            onEditInvoice={(inv) => {
              setEditingInvoice(inv);
              setActiveTab('create');
            }}
            onDeleteInvoice={handleDeleteInvoice}
            onUpdateStatus={handleUpdateStatus}
            onOpenWhatsApp={(inv) => setWhatsAppInvoice(inv)}
          />
        )}

        {activeTab === 'create' && (
          <InvoiceForm
            initialInvoice={editingInvoice}
            company={company}
            existingCount={invoices.length}
            onSave={handleSaveInvoice}
            onCancel={() => {
              setEditingInvoice(null);
              setActiveTab('invoices');
            }}
          />
        )}

        {activeTab === 'catalog' && (
          <CatalogView
            onSelectServiceToInvoice={handleSelectServiceFromCatalog}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong className="text-zinc-400">{company.name}</strong> • Creative Studio Invoice & Cashflow System
          </div>
          <div className="text-zinc-600">
            Social Media • Video Production • Motion Design • UI/UX & Web Development
          </div>
        </div>
      </footer>

      {/* Invoice Detail / Print Preview Modal */}
      {previewingInvoice && (
        <InvoicePreview
          invoice={previewingInvoice}
          company={company}
          onClose={() => setPreviewingInvoice(null)}
          onEdit={(inv) => {
            setPreviewingInvoice(null);
            setEditingInvoice(inv);
            setActiveTab('create');
          }}
          onOpenWhatsApp={(inv) => {
            setWhatsAppInvoice(inv);
          }}
        />
      )}

      {/* WhatsApp Follow-Up Modal */}
      {whatsAppInvoice && (
        <WhatsAppModal
          invoice={whatsAppInvoice}
          company={company}
          onClose={() => setWhatsAppInvoice(null)}
          onMarkFollowedUp={(id) => handleUpdateStatus(id, 'follow_up')}
        />
      )}

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          company={company}
          onSave={handleSaveCompany}
          onClose={() => setShowSettings(false)}
        />
      )}

    </div>
  );
}
