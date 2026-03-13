import React from 'react';
import { NGO } from '../data';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';

interface NGOCardProps {
  ngo: NGO;
  onClick: (ngo: NGO) => void;
  isContacted: boolean;
  onToggleContacted: (e: React.MouseEvent, id: number) => void;
}

export const NGOCard: React.FC<NGOCardProps> = ({ ngo, onClick, isContacted, onToggleContacted }) => {
  const isMightBeChanged = ngo.status === "might be changed";

  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`bg-white rounded-2xl p-5 shadow-sm border transition-all cursor-pointer group flex flex-col md:flex-row md:items-center gap-6 ${
        isContacted ? 'border-emerald-200 bg-emerald-50/30' : 'border-black/5 hover:shadow-md'
      }`}
      onClick={() => onClick(ngo)}
    >
      {/* Contacted Toggle */}
      <button
        onClick={(e) => onToggleContacted(e, ngo.id)}
        className={`flex-shrink-0 p-2 rounded-xl transition-colors ${
          isContacted ? 'text-emerald-600 bg-emerald-100' : 'text-zinc-300 hover:text-zinc-400 hover:bg-zinc-100'
        }`}
        title={isContacted ? "Mark as uncontacted" : "Mark as contacted"}
      >
        {isContacted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className={`text-lg font-bold truncate transition-colors ${
            isContacted ? 'text-emerald-900' : 'text-zinc-900 group-hover:text-emerald-600'
          }`}>
            {ngo.name}
          </h3>
          {isContacted && (
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
              Contacted
            </span>
          )}
          {isMightBeChanged && (
            <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded-full animate-pulse">
              Might be changed
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {ngo.email && (
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Mail size={14} className="text-emerald-500 shrink-0" />
              <span className="truncate">{ngo.email}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Phone size={14} className="text-emerald-500 shrink-0" />
            <span>{ngo.phone_numbers[0]}</span>
          </div>
          {ngo.physical_address && (
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <MapPin size={14} className="text-emerald-500 shrink-0" />
              <span className="truncate max-w-[200px]">{ngo.physical_address}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="hidden md:block text-right">
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1">Action</p>
          <p className="text-sm font-bold text-emerald-600">Open Template</p>
        </div>
        <div className="p-3 bg-zinc-50 rounded-xl text-zinc-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
          <ArrowRight size={20} />
        </div>
      </div>
    </motion.div>
  );
};
