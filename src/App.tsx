import React, { useState, useMemo, useEffect } from 'react';
import { ngoData, NGO } from './data';
import { NGOCard } from './components/NGOCard';
import { NGOModal } from './components/NGOModal';
import { Search, Globe, Briefcase, Users, Filter } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [selectedNGO, setSelectedNGO] = useState<NGO | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [contactedIds, setContactedIds] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('contacted_ngos');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse contacted NGOs', e);
        return new Set();
      }
    }
    return new Set();
  });
  const [showOnlyUncontacted, setShowOnlyUncontacted] = useState(false);

  // Save contacted status to localStorage
  useEffect(() => {
    localStorage.setItem('contacted_ngos', JSON.stringify(Array.from(contactedIds)));
  }, [contactedIds]);

  const toggleContacted = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setContactedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredNGOs = useMemo(() => {
    return ngoData.filter((ngo) => {
      const matchesSearch = ngo.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = !showOnlyUncontacted || !contactedIds.has(ngo.id);
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, contactedIds, showOnlyUncontacted]);

  const stats = useMemo(() => {
    return {
      total: ngoData.length,
      contacted: contactedIds.size,
      remaining: ngoData.length - contactedIds.size
    };
  }, [contactedIds]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Briefcase size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Dir Developers</h1>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">NGO Outreach Portal</p>
              </div>
            </div>

            <div className="flex flex-1 max-w-2xl gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input
                  type="text"
                  placeholder="Search NGOs in Ethiopia..."
                  className="w-full pl-10 pr-4 py-2 bg-zinc-100 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                onClick={() => setShowOnlyUncontacted(!showOnlyUncontacted)}
                className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
                  showOnlyUncontacted 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                <Filter size={16} />
                {showOnlyUncontacted ? 'Showing Uncontacted' : 'Filter Uncontacted'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b border-zinc-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-extrabold text-zinc-900 mb-4 leading-tight"
              >
                Track your <span className="text-emerald-600">Outreach Progress</span>.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-zinc-600"
              >
                Manage your communication with Ethiopian NGOs. Mark them as contacted to keep track of your business development efforts.
              </motion.p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100 min-w-[120px]">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Total</p>
                <p className="text-2xl font-black text-zinc-900">{stats.total}</p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 min-w-[120px]">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Contacted</p>
                <p className="text-2xl font-black text-emerald-700">{stats.contacted}</p>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-4 min-w-[120px]">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Remaining</p>
                <p className="text-2xl font-black text-white">{stats.remaining}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Vertical View */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredNGOs.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filteredNGOs.map((ngo, index) => (
              <motion.div
                key={ngo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <NGOCard 
                  ngo={ngo} 
                  onClick={setSelectedNGO} 
                  isContacted={contactedIds.has(ngo.id)}
                  onToggleContacted={toggleContacted}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-zinc-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">No NGOs found</h3>
            <p className="text-zinc-500">Try adjusting your search query or filters.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-zinc-500 mb-2">© 2026 Dir Developers. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-xs font-medium text-zinc-400 uppercase tracking-widest">
            <span>yaredkahase@gmail.com</span>
            <span>•</span>
            <span>0942787568</span>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <NGOModal ngo={selectedNGO} onClose={() => setSelectedNGO(null)} />
    </div>
  );
}
