'use client';

import React from 'react';
import { 
  FileText, 
  LayoutDashboard, 
  PlusCircle, 
  Sparkles, 
  Settings, 
  Download, 
  Layers
} from 'lucide-react';
import { CompanyProfile } from '@/types/invoice';

interface NavbarProps {
  activeTab: 'dashboard' | 'invoices' | 'create' | 'catalog';
  setActiveTab: (tab: 'dashboard' | 'invoices' | 'create' | 'catalog') => void;
  company: CompanyProfile;
  onOpenSettings: () => void;
  onExportBackup: () => void;
  invoicesCount: number;
  pendingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  company,
  onOpenSettings,
  onExportBackup,
  invoicesCount,
  pendingCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Studio Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
              <span className="font-black text-xl tracking-tighter text-white">REI</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight">REI Creative</span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  Invoice Studio
                </span>
              </div>
              <p className="text-xs text-zinc-400 hidden sm:block truncate max-w-[240px]">
                {company.tagline || 'Creative Digital Services'}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Dashboard Overview
            </button>

            <button
              onClick={() => setActiveTab('invoices')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                activeTab === 'invoices'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              History Invoice
              {invoicesCount > 0 && (
                <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {invoicesCount}
                </span>
              )}
              {pendingCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" title={`${pendingCount} invoice menunggak`} />
              )}
            </button>

            <button
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'catalog'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Katalog Layanan
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onExportBackup}
              title="Backup Data JSON"
              className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-lg border border-zinc-800/80 transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenSettings}
              title="Pengaturan Rekening & Profil"
              className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-lg border border-zinc-800/80 transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('create')}
              className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Buat Invoice</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-zinc-900 text-xs">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-1.5 py-1 px-2 rounded-md ${
              activeTab === 'dashboard' ? 'text-violet-400 font-semibold' : 'text-zinc-400'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`flex items-center gap-1.5 py-1 px-2 rounded-md ${
              activeTab === 'invoices' ? 'text-violet-400 font-semibold' : 'text-zinc-400'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Invoice ({invoicesCount})</span>
          </button>
          <button
            onClick={() => setActiveTab('catalog')}
            className={`flex items-center gap-1.5 py-1 px-2 rounded-md ${
              activeTab === 'catalog' ? 'text-violet-400 font-semibold' : 'text-zinc-400'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Layanan</span>
          </button>
        </div>

      </div>
    </header>
  );
};
