import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion, LazyMotion, domAnimation, m } from "framer-motion";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/pages/Hero"; // Synchronous import for better LCP
import { AppProvider, useApp } from "@/context/AppContext";
import { ScrollProvider, useScroll } from "@/context/ScrollContext";
import { CheckCircle2, XCircle, Info, Loader2 } from "lucide-react";

// Lazy loading ONLY non-critical pages
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectPage = lazy(() => import("@/pages/ProjectPage"));
const Contact = lazy(() => import("@/pages/Contact"));
const CommandPalette = lazy(() => import("@/components/CommandPalette"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <Loader2 className="w-6 h-6 text-primary animate-spin" />
    </div>
  );
}

function ToastContainer() {
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
            {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-500" />}
            {toast.type === "error" && <XCircle className="w-5 h-5 text-red-500" />}
            {toast.type === "info" && <Info className="w-5 h-5 text-blue-500" />}
            <span className="text-sm font-medium text-slate-900 dark:text-white">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  return (
    <LazyMotion features={domAnimation}>
    <BrowserRouter basename="/portfolio">
        <ScrollProvider>
          <ScrollToTop />
          <AnimatePresence>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
          </AnimatePresence>

          <div className={`transition-opacity duration-500 ${loading ? "opacity-0 invisible h-0 overflow-hidden" : "opacity-100 visible"}`}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[201] focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Skip to content
            </a>
            <Suspense fallback={null}>
              <CommandPalette />
            </Suspense>
            <ToastContainer />
            <div className="fixed inset-0 z-0 bg-grid pointer-events-none" />
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main id="main-content" className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 w-full flex-1 flex flex-col">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </div>
        </ScrollProvider>
      </BrowserRouter>
    </LazyMotion>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
