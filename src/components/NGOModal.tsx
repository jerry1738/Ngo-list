import React from 'react';
import { NGO } from '../data';
import { X, Copy, Check, Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NGOModalProps {
  ngo: NGO | null;
  onClose: () => void;
}

export const NGOModal: React.FC<NGOModalProps> = ({ ngo, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!ngo) return null;

  const emailTemplate = `Subject: Strategic Digital Modernization Proposal for ${ngo.name} Ethiopia

Dear ${ngo.name} Leadership Team,

I am writing to you on behalf of Dir Developers, an Ethiopian technology firm dedicated to supporting the non-profit sector through specialized digital transformation and custom software solutions.

We understand the unique operational challenges faced by international organizations. Our mission is to empower the Ethiopian branch of ${ngo.name} by developing bespoke digital tools—ranging from automated resource management systems to comprehensive project tracking platforms—designed to eliminate manual paperwork and enhance operational transparency.

As a local partner, we prioritize balancing high-level innovation with the specific budgetary considerations of NGOs. We offer highly competitive, cost-effective pricing structures specifically designed to be accessible for organizations dedicated to Ethiopia's development.

We would welcome the opportunity to present a portfolio of our previous work and discuss how we can specifically support ${ngo.name}'s Ethiopian operations in transitioning to a more efficient, data-driven environment.

Are you available for a brief introductory call or a meeting at your Addis Ababa office this week to explore this further?

Best regards,

Yared Kahase
Founder, Dir Developers
Email: yaredkahase@gmail.com
Phone: 0942787568`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Strategic Digital Modernization Proposal for ${ngo.name} Ethiopia`);
    const body = encodeURIComponent(emailTemplate);
    const recipient = ngo.email || '';
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">{ngo.name}</h2>
              <p className="text-zinc-500 text-sm">Outreach Template</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-200 rounded-full transition-colors text-zinc-400 hover:text-zinc-600"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex-1">
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 relative group">
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 bg-white border border-zinc-200 rounded-lg shadow-sm hover:bg-zinc-50 transition-all flex items-center gap-2 text-sm font-medium text-zinc-600"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Template
                  </>
                )}
              </button>
              <pre className="whitespace-pre-wrap font-sans text-zinc-700 leading-relaxed text-sm">
                {emailTemplate}
              </pre>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleEmail}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
            >
              <Send size={18} />
              Send via Email
            </button>
            <button
              className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-200"
              onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(emailTemplate)}`, '_blank')}
            >
              <MessageCircle size={18} />
              Share on Telegram
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
