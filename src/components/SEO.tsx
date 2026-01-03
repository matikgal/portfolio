import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useApp } from "@/context/AppContext";

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const location = useLocation();
  const { language } = useApp();
  
  const defaultTitle = "Mateusz Gałuszka | Frontend Developer";
  const defaultDescription = language === 'pl' 
    ? "Portfolio Frontend Developera. Specjalizuję się w React, TypeScript i nowoczesnych technologiach webowych."
    : "Frontend Developer Portfolio. Specializing in React, TypeScript, and modern web technologies.";

  const currentTitle = title ? `${title} | Mateusz Gałuszka` : defaultTitle;
  const currentDescription = description || defaultDescription;
  const canonicalUrl = `https://portfolio.matikgal.pl${location.pathname}`; // Replace with actual domain

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <html lang={language} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content="/og-image.png" /> {/* Needs actual image */}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={currentTitle} />
      <meta property="twitter:description" content={currentDescription} />
      <meta property="twitter:image" content="/og-image.png" />
    </Helmet>
  );
}
