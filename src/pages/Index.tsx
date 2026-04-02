import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Home, Thermometer, PanelTop, Wrench } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const services = [
  { icon: Hammer, key: "trockenbau" as const },
  { icon: Home, key: "innenausbau" as const },
  { icon: Thermometer, key: "daemmung" as const },
  { icon: PanelTop, key: "decken" as const },
  { icon: Wrench, key: "renovierung" as const },
];

const previewProjects = [
  { img: project1, idx: 0 },
  { img: project2, idx: 1 },
  { img: project3, idx: 2 },
];

const Index = () => {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <img src={heroBg} alt="Trockenbau" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
              {t(translations.hero.title)}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t(translations.hero.subtitle)}
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all hover-scale">
                {t(translations.hero.cta)} <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors">
                {t(translations.hero.ctaSecondary)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t(translations.home.servicesTitle)}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t(translations.home.servicesSubtitle)}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              const svc = translations.services[s.key];
              return (
                <ScrollReveal key={s.key} delay={i * 100} animation="animate-scale-in">
                  <Link to="/services" className="group block p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all hover-scale h-full">
                    <Icon size={32} className="text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{t(svc.title)}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{t(svc.desc)}</p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t(translations.home.projectsTitle)}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t(translations.home.projectsSubtitle)}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewProjects.map((p, i) => {
              const proj = translations.projects.items[p.idx];
              return (
                <ScrollReveal key={p.idx} delay={i * 150} animation="animate-slide-up">
                  <div className="group overflow-hidden rounded-lg bg-card border border-border hover:shadow-xl transition-shadow">
                    <div className="overflow-hidden">
                      <img src={p.img} alt={t(proj.title)} loading="lazy" width={800} height={600} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground mb-1">{t(proj.title)}</h3>
                      <p className="text-sm text-muted-foreground">{t(proj.desc)}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal className="text-center mt-8">
            <Link to="/projects" className="story-link inline-flex items-center gap-2 text-primary font-medium">
              <span>{t(translations.hero.ctaSecondary)}</span> <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t(translations.home.ctaTitle)}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              {t(translations.home.ctaText)}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-all hover-scale">
              {t(translations.home.ctaButton)} <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
