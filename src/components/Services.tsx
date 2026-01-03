import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Plus } from 'lucide-react';

export default function Services() {
  const { t } = useApp();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="mt-12 pt-12 border-t border-slate-200 dark:border-white/5">
      <h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-widest">
        {t.about.services.title}
      </h2>

      <div className=" ">
        {t.about.services.items.map((service, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div key={index} className=" ">
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full py-8 flex items-start md:items-center justify-between text-left group"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-sm font-mono text-slate-400 group-hover:text-primary transition-colors">
                    0{index + 1}
                  </span>
                  <h3 className={`text-lg md:text-xl font-bold font-display transition-colors ${
                    isExpanded ? "text-primary" : "text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300"
                  }`}>
                    {service.title}
                  </h3>
                </div>
                
                <span className={`ml-4 shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-45" : "rotate-0"}`}>
                   <Plus className={`w-6 h-6 ${isExpanded ? "text-primary" : "text-slate-400 group-hover:text-primary"}`} />
                </span>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pl-20 max-w-2xl">
                       <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
