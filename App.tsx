import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";
import CommandPalette from "./components/CommandPalette";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { AppProvider, useApp } from "./context/AppContext";
import { ScrollProvider, useScroll } from "./context/ScrollContext";
import { CheckCircle2, XCircle, Info } from "lucide-react";

// Toast Container
const ToastContainer = () => {
  const { toasts } = useApp();
  return (
    <div className="fixed bottom-4 right-4 z-[200] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 shadow-xl min-w-[280px]"
          >
            {toast.type === "success" && (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            )}
            {toast.type === "error" && (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
            {toast.type === "info" && (
              <Info className="w-5 h-5 text-blue-500" />
            )}
            <span className="text-sm font-medium text-slate-900 dark:text-white">
              {toast.message}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// AnimatedRoutes
const AnimatedRoutes = () => {
  const location = useLocation();
  const { lenis } = useScroll();

  const handleExitComplete = () => {
    // 1. Always reset to top first on page change
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // 2. Handle Hash Scrolling
    if (window.location.hash && lenis) {
      const hash = window.location.hash;
      const targetId = hash.substring(1);

      // Polling for element
      let attempts = 0;
      const maxAttempts = 20; // 2s total
      
      const interval = setInterval(() => {
        const element = document.getElementById(targetId);
        if (element) {
          clearInterval(interval);
          lenis.scrollTo(element, {
            offset: -100,
            duration: 1.5,
          });
          return;
        }

        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function AppContent() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <HashRouter>
      <ScrollProvider>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[201] focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to content
        </a>
        <CommandPalette />
        <ToastContainer />

        {/* Background Grid */}
        <div className="fixed inset-0 z-0 bg-grid pointer-events-none" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main id="main-content" className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 w-full flex-1 flex flex-col">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </ScrollProvider>
    </HashRouter>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
