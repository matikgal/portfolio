import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const projects = [
    { title: 'TechStart Landing', category: 'Landing Page', year: '2024', color: 'from-secondary/30 to-accent/30' },
    { title: 'E-commerce Platform', category: 'E-commerce', year: '2024', color: 'from-accent/30 to-primary/30' },
    { title: 'SaaS Dashboard', category: 'Web App', year: '2023', color: 'from-primary/30 to-secondary/30' },
    { title: 'Corporate Website', category: 'Multi-page', year: '2024', color: 'from-secondary/40 to-primary/20' },
    { title: 'Portfolio Site', category: 'Portfolio', year: '2023', color: 'from-accent/40 to-secondary/20' },
    { title: 'Startup MVP', category: 'Landing Page', year: '2024', color: 'from-primary/40 to-accent/20' },
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-32 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20">
            <p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Portfolio</p>
            <h1 className="font-heading font-bold text-hero-mobile md:text-hero text-primary mb-6">
              Nasze <span className="text-secondary">Projekty</span>
            </h1>
            <p className="font-body text-body-lg text-muted-foreground max-w-2xl">
              Odkryj projekty, które łączą innowacyjny design z biznesową skutecznością.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-card border-4 border-primary hover:border-secondary transition-all duration-300 cursor-pointer"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-primary-foreground">
                    <p className="font-mono text-xs uppercase tracking-wider mb-2">{project.category} • {project.year}</p>
                    <h3 className="font-heading font-bold text-h3 mb-6 text-center">{project.title}</h3>
                    <Button variant="secondary" size="sm">
                      Zobacz Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
