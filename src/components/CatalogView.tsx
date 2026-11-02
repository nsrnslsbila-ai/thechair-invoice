'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  PlusCircle, 
  Check, 
  Layers, 
  ArrowRight,
  TrendingUp,
  Tag
} from 'lucide-react';
import { ServicePreset } from '@/types/invoice';
import { CREATIVE_SERVICE_PRESETS } from '@/lib/presets';
import { formatIDR } from '@/lib/format';

interface CatalogViewProps {
  onSelectServiceToInvoice: (preset: ServicePreset) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onSelectServiceToInvoice,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Social Media Management',
    'Video Editing & Production',
    'Motion Design & Animation',
    'Photo Editing & Commercial',
    'UI/UX & Web Development',
    'Branding & Graphic Design',
  ];

  const filteredPresets = CREATIVE_SERVICE_PRESETS.filter(item => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = searchTerm.trim() === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Jasa & Rate Card REI</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Katalog Layanan Kreatif</h1>
          <p className="text-xs text-zinc-400 mt-1">
            Daftar paket jasa kreatif standar REI. Klik "Buat Invoice dengan Jasa Ini" untuk membuat tagihan cepat ke klien.
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari layanan (contoh: reels, motion 3d, figma, social media, landing page)..."
            className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-violet-600 text-white font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              {cat === 'all' ? 'Semua Kategori' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredPresets.map(preset => (
          <div
            key={preset.id}
            className="bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-violet-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all group shadow-sm"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-violet-300 bg-violet-500/10 px-2.5 py-0.5 rounded-md border border-violet-500/20">
                  {preset.category}
                </span>
                <span className="text-[11px] text-zinc-400">
                  Satuan: <strong className="text-zinc-300">{preset.unit}</strong>
                </span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                {preset.name}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {preset.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800/70 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block">Rate Standar</span>
                <span className="text-sm font-bold text-white font-mono">
                  {formatIDR(preset.suggestedPrice)}
                </span>
              </div>

              <button
                onClick={() => onSelectServiceToInvoice(preset)}
                className="flex items-center gap-1.5 bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-violet-500/30 hover:border-transparent transition-all"
              >
                <span>+ Tagihkan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
