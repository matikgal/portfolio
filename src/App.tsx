import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/pages/Hero"; // Synchronous import for better LCP
import { AppProvider } from "@/context/AppContext";
import { ScrollProvider } from "@/context/ScrollContext";
import PageLoader from "@/components/ui/PageLoader";
import ToastContainer from "@/components/ui/ToastContainer";
import CommandPalette from "@/components/CommandPalette";

// Lazy loading ONLY non-critical pages
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectPage = lazy(() => import("@/pages/ProjectPage"));
const Contact = lazy(() => import("@/pages/Contact"));

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

          <div
            className={`transition-opacity duration-500 ${
              loading ? "opacity-0 invisible h-0 overflow-hidden" : "opacity-100 visible"
            }`}
          >
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
              <main
                id="main-content"
                className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 w-full flex-1 flex flex-col"
              >
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
