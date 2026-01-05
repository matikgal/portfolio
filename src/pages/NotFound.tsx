import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Terminal } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t } = useApp();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={containerRef}
      className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full opacity-50 dark:opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl font-bold font-display text-slate-900 dark:text-white mb-4 tracking-tighter"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-6"
        >
          {t.notFound.title}
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed max-w-md"
        >
          {t.notFound.description}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-3 px-7 py-3.5 bg-transparent border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white rounded-full font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.notFound.goBack}
          </button>

          <Link
            to="/"
            className="relative group flex items-center justify-center gap-3 px-7 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-medium transition-all duration-300 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] hover:scale-105"
          >
            <Home className="w-4 h-4" />
            {t.notFound.home}
          </Link>
        </motion.div>
      </div>
      
     
    </motion.div>
  );
}
