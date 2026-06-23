import React, { useState, useCallback, useRef } from "react";
import { Link } from "wouter";
import { Upload, X, CheckCircle, Eye, LogOut, Lock, ChevronDown, ChevronRight } from "lucide-react";
import { getImageOverride, setImageOverride, removeImageOverride, slugify } from "@/lib/imageStore";

const ADMIN_PASSWORD = "pitapit2025";

// All replaceable image slots
const IMAGE_SECTIONS = [
  {
    title: "Hero",
    slots: [
      { key: "hero-background", label: "Hero Background", fallback: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=225&fit=crop" },
    ],
  },
  {
    title: "Category Strip",
    slots: [
      { key: "cat-pita-wraps", label: "Pita Wraps", fallback: "/pita_wraps.jpg" },
      { key: "cat-salads", label: "Salads", fallback: "https://picsum.photos/seed/salad-fresh/400/300" },
      { key: "cat-rice-bowls", label: "Rice Bowls", fallback: "https://picsum.photos/seed/rice-bowl-healthy/400/300" },
      { key: "cat-sides", label: "Sides", fallback: "https://picsum.photos/seed/hummus-side-food/400/300" },
      { key: "cat-beverages", label: "Beverages", fallback: "https://picsum.photos/seed/milkshake-smoothie/400/300" },
      { key: "cat-desserts", label: "Desserts", fallback: "https://picsum.photos/seed/dessert-sweet/400/300" },
    ],
  },
  {
    title: "Pita Wraps",
    slots: [
      { key: "chicken-club-pita-wrap", label: "Chicken Club Pita Wrap", fallback: "https://picsum.photos/seed/chicken-club-wrap/400/300" },
      { key: "falafel-pita-wrap", label: "Falafel Pita Wrap", fallback: "https://picsum.photos/seed/falafel-pita/400/300" },
      { key: "roasted-chicken-breast-pita-wrap", label: "Roasted Chicken Breast Pita Wrap", fallback: "https://picsum.photos/seed/roasted-chicken-wrap/400/300" },
      { key: "paneer-tikka-pita-wrap", label: "Paneer Tikka Pita Wrap", fallback: "https://picsum.photos/seed/paneer-tikka-wrap/400/300" },
      { key: "prawn-avocado-pita-wrap", label: "Prawn & Avocado Pita Wrap", fallback: "https://picsum.photos/seed/prawn-avocado-wrap/400/300" },
    ],
  },
  {
    title: "Salads",
    slots: [
      { key: "chicken-crave-salad", label: "Chicken Crave Salad", fallback: "https://picsum.photos/seed/chicken-salad-greens/400/300" },
      { key: "chicken-tikka-salad", label: "Chicken Tikka Salad", fallback: "https://picsum.photos/seed/chicken-tikka-salad/400/300" },
      { key: "veg-greek-salad", label: "Veg Greek Salad", fallback: "https://picsum.photos/seed/greek-salad/400/300" },
      { key: "garden-fresh-salad", label: "Garden Fresh Salad", fallback: "https://picsum.photos/seed/garden-salad-fresh/400/300" },
    ],
  },
  {
    title: "Rice Bowls",
    slots: [
      { key: "grilled-chicken-rice-bowl", label: "Grilled Chicken Rice Bowl", fallback: "https://picsum.photos/seed/chicken-rice-bowl/400/300" },
      { key: "falafel-rice-bowl", label: "Falafel Rice Bowl", fallback: "https://picsum.photos/seed/falafel-rice-bowl/400/300" },
      { key: "paneer-rice-bowl", label: "Paneer Rice Bowl", fallback: "https://picsum.photos/seed/paneer-rice-bowl/400/300" },
    ],
  },
  {
    title: "Sides",
    slots: [
      { key: "classic-hummus-pita-chips", label: "Classic Hummus & Pita Chips", fallback: "https://picsum.photos/seed/hummus-pita-chips/400/300" },
      { key: "baked-wedges", label: "Baked Wedges", fallback: "https://picsum.photos/seed/potato-wedges-baked/400/300" },
      { key: "garden-soup-of-the-day", label: "Garden Soup of the Day", fallback: "https://picsum.photos/seed/soup-bowl-fresh/400/300" },
    ],
  },
  {
    title: "Beverages",
    slots: [
      { key: "classic-mango-milkshake", label: "Classic Mango Milkshake", fallback: "https://picsum.photos/seed/mango-milkshake/400/300" },
      { key: "dark-chocolate-protein-shake", label: "Dark Chocolate Protein Shake", fallback: "https://picsum.photos/seed/chocolate-milkshake/400/300" },
      { key: "fresh-lemonade", label: "Fresh Lemonade", fallback: "https://picsum.photos/seed/lemonade-fresh-drink/400/300" },
      { key: "cold-brew-iced-coffee", label: "Cold Brew Iced Coffee", fallback: "https://picsum.photos/seed/cold-brew-iced-coffee/400/300" },
    ],
  },
  {
    title: "Desserts",
    slots: [
      { key: "chocolate-brownie", label: "Chocolate Brownie", fallback: "https://picsum.photos/seed/chocolate-brownie/400/300" },
      { key: "fruit-yogurt-parfait", label: "Fruit & Yogurt Parfait", fallback: "https://picsum.photos/seed/yogurt-parfait-fruit/400/300" },
      { key: "pita-pudding", label: "Pita Pudding", fallback: "https://picsum.photos/seed/bread-pudding-dessert/400/300" },
    ],
  },
];

// --- Image Slot Card ---
function ImageSlotCard({ slot }: { slot: { key: string; label: string; fallback: string } }) {
  const [override, setOverride] = useState<string | null>(() => getImageOverride(slot.key));
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentSrc = override ?? slot.fallback;
  const hasOverride = !!override;

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPG, PNG, WebP).");
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setError("File too large — please use an image under 3 MB.");
      return;
    }
    setError(null);
    setUploading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      try {
        setImageOverride(slot.key, dataUrl);
        setOverride(dataUrl);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      } catch (err: any) {
        setError(err.message ?? "Failed to save image.");
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  }, [slot.key]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleReset = () => {
    removeImageOverride(slot.key);
    setOverride(null);
    setSuccess(false);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div
        className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
        onClick={() => !uploading && inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <img
          src={currentSrc}
          alt={slot.label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2 text-white">
            <Upload className="w-7 h-7" />
            <span className="text-sm font-medium">Click or drop to replace</span>
          </div>
        </div>
        {hasOverride && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <CheckCircle className="w-3 h-3" />
            Custom
          </div>
        )}
        {success && (
          <div className="absolute inset-0 bg-green-500/80 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="font-medium text-gray-800 text-sm leading-tight mb-1">{slot.label}</p>
        <p className="text-xs text-gray-400 font-mono mb-3">{slot.key}</p>

        {error && (
          <p className="text-xs text-red-500 mb-3 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => inputRef.current?.click()}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium bg-[#2D5016] text-white px-3 py-2 rounded-full hover:bg-[#2D5016]/90 transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            Upload
          </button>
          {hasOverride && (
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 px-3 py-2 rounded-full hover:bg-gray-50 hover:text-red-500 hover:border-red-200 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}

// --- Section accordion ---
function SectionPanel({ section }: { section: typeof IMAGE_SECTIONS[0] }) {
  const [open, setOpen] = useState(true);
  const overrideCount = section.slots.filter(s => getImageOverride(s.key)).length;

  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between mb-4 group"
      >
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-xl font-bold text-gray-800">{section.title}</h2>
          {overrideCount > 0 && (
            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              {overrideCount} customised
            </span>
          )}
        </div>
        {open ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
      </button>
      {open && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {section.slots.map(slot => (
            <ImageSlotCard key={slot.key} slot={slot} />
          ))}
        </div>
      )}
    </div>
  );
}

// --- Login screen ---
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setPw("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2D5016] rounded-2xl mb-4">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-gray-800">PITA PIT</h1>
          <p className="text-gray-500 mt-1 text-sm">Admin — Image Manager</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setError(false); }}
            placeholder="Enter admin password"
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
              error ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#2D5016]"
            }`}
            autoFocus
          />
          {error && <p className="text-red-500 text-xs mt-2">Incorrect password.</p>}
          <button
            type="submit"
            className="w-full mt-4 bg-[#2D5016] text-white font-medium py-3 rounded-xl hover:bg-[#2D5016]/90 transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Default password: <code className="font-mono">pitapit2025</code>
        </p>
      </div>
    </div>
  );
}

// --- Main Admin Page ---
export default function Admin() {
  const [authed, setAuthed] = useState(() => {
    try { return sessionStorage.getItem('pitapit_admin') === '1'; } catch { return false; }
  });

  const handleLogin = () => {
    try { sessionStorage.setItem('pitapit_admin', '1'); } catch {}
    setAuthed(true);
  };

  const handleLogout = () => {
    try { sessionStorage.removeItem('pitapit_admin'); } catch {}
    setAuthed(false);
  };

  if (!authed) return <LoginScreen onLogin={handleLogin} />;

  const totalOverrides = IMAGE_SECTIONS.flatMap(s => s.slots).filter(s => getImageOverride(s.key)).length;
  const totalSlots = IMAGE_SECTIONS.flatMap(s => s.slots).length;

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <span className="font-serif text-xl font-bold text-[#2D5016]">PITA PIT</span>
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-medium text-gray-600">Image Manager</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm text-gray-500">
              <span className="font-semibold text-[#2D5016]">{totalOverrides}</span> of {totalSlots} images customised
            </span>
            <Link href="/">
              <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">View Site</span>
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-2">Image Manager</h1>
          <p className="text-gray-500 text-sm max-w-xl">
            Upload your own photos for any dish, category, or section. Images are stored in your browser and appear on the site immediately — no reload needed. Drag & drop or click any card to replace an image.
          </p>
        </div>

        {IMAGE_SECTIONS.map(section => (
          <SectionPanel key={section.title} section={section} />
        ))}
      </main>
    </div>
  );
}
