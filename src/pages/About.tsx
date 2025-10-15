import { motion } from 'framer-motion';
import { Award, Users, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Dążymy do perfekcji w każdym projekcie, nie akceptujemy kompromisów jeśli chodzi o jakość.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Współpracujemy blisko z klientami, traktując ich projekty jak nasze własne.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nieustannie eksplorujemy nowe technologie i trendy w designie.'
    },
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-32 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20">
            <p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">O nas</p>
            <h1 className="font-heading font-bold text-hero-mobile md:text-hero text-primary mb-6">
              Premium Boutique <span className="text-secondary">Agency</span>
            </h1>
            <p className="font-body text-body-lg text-muted-foreground max-w-2xl">
              Jesteśmy zespołem pasjonatów web designu, którzy wierzą, że strona internetowa to coś więcej niż kod i grafika - to narzędzie biznesowe, które powinno generować realne rezultaty.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            <motion.div {...fadeInUp}>
              <div className="aspect-[4/3] bg-gradient-to-br from-primary via-secondary/30 to-accent/30 border-4 border-primary" />
            </motion.div>
            
            <motion.div {...fadeInUp} className="flex flex-col justify-center">
              <h2 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-6">
                Nasza Misja
              </h2>
              <p className="font-body text-body text-muted-foreground mb-6">
                Tworzymy strony internetowe, które nie tylko wyglądają pięknie, ale przede wszystkim osiągają biznesowe cele naszych klientów. Każdy projekt traktujemy indywidualnie, łącząc award-winning design z głębokim zrozumieniem biznesu i user experience.
              </p>
              <p className="font-body text-body text-muted-foreground">
                Nie jesteśmy masową produkcją - jesteśmy boutique agency, które współpracuje z wybranymi klientami, którzy cenią jakość i innowacyjność.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-6 text-center">
              Nasze Wartości
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-10 bg-card border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300"
              >
                <value.icon className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="font-heading font-bold text-h3-mobile text-primary mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-body-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="bg-primary text-primary-foreground p-16 text-center">
            <p className="font-mono text-sm uppercase tracking-wider mb-4 text-secondary">
              Chcesz dołączyć do naszych klientów?
            </p>
            <h2 className="font-heading font-bold text-h2-mobile md:text-h2 mb-6">
              Stwórzmy Coś Razem
            </h2>
            <p className="font-body text-body text-primary-foreground/80 max-w-2xl mx-auto">
              Jeśli szukasz partnera, który potraktuje Twój projekt jak swój własny, skontaktuj się z nami.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
