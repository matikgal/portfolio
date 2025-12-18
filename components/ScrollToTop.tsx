import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "@/context/ScrollContext";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const { lenis } = useScroll();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      
      // Function to attempt scrolling
      const attemptScroll = (retries = 0) => {
        const element = document.getElementById(targetId);
        
        if (element && lenis) {
          // Give a small extra delay for animations to settle
          setTimeout(() => {
            lenis.scrollTo(element, { 
              offset: -120, 
              duration: 1.5,
              immediate: false // Use smooth scroll
            });
          }, 50);
        } else if (retries < 20) {
          // If not found, retry after 100ms (up to 2 seconds total)
          // This handles lazy loading and AnimatePresence delays
          setTimeout(() => attemptScroll(retries + 1), 100);
        }
      };

      attemptScroll();
    } else {
      // Normal page change without hash
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash, lenis]);

  return null;
}
