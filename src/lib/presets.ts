import { ServicePreset } from '@/types/invoice';

export const CREATIVE_SERVICE_PRESETS: ServicePreset[] = [
  // Social Media Management
  {
    id: 'smm-starter',
    category: 'Social Media Management',
    name: 'Social Media Management - Starter Plan',
    description: '15 Feed Posts + 20 Stories, Copywriting, Content Calendar, Monthly Performance Report',
    unit: 'Bulan',
    suggestedPrice: 3500000,
  },
  {
    id: 'smm-growth',
    category: 'Social Media Management',
    name: 'Social Media Management - Growth Plan',
    description: '24 Feed Posts/Carousels + 30 Stories + 8 Short Reels/TikTok, Strategy, Copywriting, DM Admin & Report',
    unit: 'Bulan',
    suggestedPrice: 6500000,
  },
  {
    id: 'smm-retainer',
    category: 'Social Media Management',
    name: 'Full Creative Retainer & Social Media Lead',
    description: 'Omnichannel brand strategy, daily story updates, 16 Reels/TikTok video, Ads creative supervision',
    unit: 'Bulan',
    suggestedPrice: 12500000,
  },

  // Video Editing & Production
  {
    id: 'video-reels-pack',
    category: 'Video Editing & Production',
    name: 'Short-Form Video Editing (TikTok/Reels) - Batch 5',
    description: 'Dynamic pacing, punchy hooks, kinetic subtitles, sound effects, B-roll overlay, color grading',
    unit: 'Paket (5 Video)',
    suggestedPrice: 1750000,
  },
  {
    id: 'video-reels-single',
    category: 'Video Editing & Production',
    name: 'Short-Form Video Editing (Reels/TikTok/Shorts)',
    description: 'Penyuntingan video vertikal 9:16 durasi s/d 60 detik dengan hook animasi dan sound design premium',
    unit: 'Video',
    suggestedPrice: 400000,
  },
  {
    id: 'video-youtube-long',
    category: 'Video Editing & Production',
    name: 'Long-Form Video Editing (YouTube / Podcast / Vlog)',
    description: 'Durasi s/d 15 menit, multi-cam sync, audio cleaning, lower thirds, chaptering, color grading',
    unit: 'Video',
    suggestedPrice: 1800000,
  },
  {
    id: 'video-commercial-ad',
    category: 'Video Editing & Production',
    name: 'Commercial Video Ads Production & Editing',
    description: 'Pembuatan video iklan Meta/TikTok ads dengan visual storytelling, A/B test hook variants',
    unit: 'Project',
    suggestedPrice: 4500000,
  },

  // Motion Design & Animation
  {
    id: 'motion-logo',
    category: 'Motion Design & Animation',
    name: 'Animated Logo / Brand Intro & Outro (2D/3D)',
    description: 'Motion logo 4K 60fps dengan sound design custom untuk YouTube, video bumper, dan digital presentation',
    unit: 'Asset',
    suggestedPrice: 1500000,
  },
  {
    id: 'motion-explainer',
    category: 'Motion Design & Animation',
    name: '2D Motion Graphics Explainer Video (60 detik)',
    description: 'Storyboard, custom vector asset illustration, fluid character/shape animation, voice-over sync & SFX',
    unit: 'Video',
    suggestedPrice: 3800000,
  },
  {
    id: 'motion-3d-product',
    category: 'Motion Design & Animation',
    name: '3D Product Animation (Cinema 4D / Octane)',
    description: '3D modeling/texturing produk, realistic studio lighting, smooth camera movement & 3D render 4K',
    unit: 'Project',
    suggestedPrice: 7500000,
  },

  // Photo Editing & Commercial
  {
    id: 'photo-retouch-commercial',
    category: 'Photo Editing & Commercial',
    name: 'High-End Commercial Photo Retouching',
    description: 'Skin frequency separation, clean background isolation, color correction & grading katalog produk (10 foto)',
    unit: 'Paket (10 Foto)',
    suggestedPrice: 1500000,
  },
  {
    id: 'photo-product-single',
    category: 'Photo Editing & Commercial',
    name: 'E-commerce & Lookbook Photo Editing',
    description: 'Retouching per photo, clipping path, shadow creation, color accurate calibration',
    unit: 'Foto',
    suggestedPrice: 120000,
  },

  // UI/UX & Web Development
  {
    id: 'uiux-landing-figma',
    category: 'UI/UX & Web Development',
    name: 'UI/UX Design - Landing Page (Figma High-Fidelity)',
    description: 'Wireframing, modern visual design, mobile responsive layout, component design system, prototyping',
    unit: 'Project',
    suggestedPrice: 4500000,
  },
  {
    id: 'uiux-app-design',
    category: 'UI/UX & Web Development',
    name: 'UI/UX Mobile App Design (iOS & Android)',
    description: 'Full flow design up to 15 screens, interactive prototype Figma, handoff asset guide for developers',
    unit: 'Project',
    suggestedPrice: 9000000,
  },
  {
    id: 'web-landing-nextjs',
    category: 'UI/UX & Web Development',
    name: 'High-Converting Landing Page Website (Next.js + Tailwind)',
    description: 'Develop website responsif, ultra-fast loading, integrasi WhatsApp CTA, SEO optimized, siap deploy Vercel',
    unit: 'Project',
    suggestedPrice: 6500000,
  },
  {
    id: 'web-fullstack-dev',
    category: 'UI/UX & Web Development',
    name: 'Custom Web Application Development',
    description: 'Fullstack Next.js app, CMS / database integration, payment gateway, custom dashboard & domain setup',
    unit: 'Project',
    suggestedPrice: 16000000,
  },

  // Branding & Graphic Design
  {
    id: 'brand-identity-suite',
    category: 'Branding & Graphic Design',
    name: 'Full Brand Identity & Visual Guidelines',
    description: 'Logo suite (primary, secondary, icon), Color palette, Typography, Brand guideline book (PDF), stationary mockups',
    unit: 'Paket',
    suggestedPrice: 5500000,
  },
  {
    id: 'brand-pitch-deck',
    category: 'Branding & Graphic Design',
    name: 'Investor & Client Pitch Deck Presentation',
    description: 'Desain presentasi 15-20 slide berkelas visual agency (Keynote / PPT / Figma) untuk pitching bisnis',
    unit: 'Project',
    suggestedPrice: 2500000,
  },
];
