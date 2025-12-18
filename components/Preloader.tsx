import { useEffect, useState } from 'react';
import { m } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const TOTAL_DURATION = 1200; // Total time for the preloader visual state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const exitTimer = setTimeout(onComplete, 400);
      return () => clearTimeout(exitTimer);
    }, TOTAL_DURATION);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <m.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-50 dark:bg-neutral-950"
    >
      <div className="relative flex flex-col items-center gap-4">
        <svg
          className="w-20 h-20 md:w-32 md:h-32"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            d="M15 80 V30 L35 55 L55 30 V80 M95 30 H65 V80 H95 V55 H80"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-900 dark:text-white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
          <m.circle
            cx="105"
            cy="80"
            r="6"
            fill="currentColor"
            className="text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, duration: 0.3, type: "spring" }}
          />
        </svg>
        <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-20 md:w-32 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden"
        >
            <m.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}
            />
        </m.div>
      </div>
    </m.div>
  );
}
