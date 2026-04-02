import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Home, Thermometer, PanelTop, Wrench, Sparkles, BadgeCheck } from "lucide-react";
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
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden pt-6 sm:pt-0">
        <img src={heroBg} alt="Trockenbau" className="absolute inset-0 w-full h-full object-cover hero-kenburns" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-grid-lines opacity-30" />
        <div className="absolute left-[8%] top-24 hidden md:block w-24 h-24 rounded-full bg-primary/20 blur-2xl animate-float-slow" />
        <div className="absolute right-[10%] bottom-24 hidden md:block w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-float-delayed" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl pt-16 sm:pt-16 md:pt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/90 backdrop-blur-md opacity-0 animate-slide-in-left">
              <Sparkles size={16} className="text-primary" />
              <span>Trockenbau • Innenausbau • Sanierung</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.12s" }}>
              {t(translations.hero.title)}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.28s" }}>
              {t(translations.hero.subtitle)}
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.42s" }}>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all hover-scale">
                {t(translations.hero.cta)} <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary-foreground/10 transition-colors">
                {t(translations.hero.ctaSecondary)}
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3 opacity-0 animate-fade-in" style={{ animationDelay: "0.58s" }}>
              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-4 text-primary-foreground backdrop-blur-md hero-stat-card">
                <strong className="block text-2xl font-heading">100%</strong>
                <span className="text-sm text-primary-foreground/70">Saubere Ausführung</span>
              </div>
              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-4 text-primary-foreground backdrop-blur-md hero-stat-card" style={{ animationDelay: "0.2s" }}>
                <strong className="block text-2xl font-heading">2x</strong>
                <span className="text-sm text-primary-foreground/70">Sprachen</span>
              </div>
              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-4 text-primary-foreground backdrop-blur-md hero-stat-card" style={{ animationDelay: "0.35s" }}>
                <strong className="block text-2xl font-heading">24h</strong>
                <span className="text-sm text-primary-foreground/70">Schnelle Anfrage</span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-4 top-1/2 hidden w-[280px] -translate-y-1/2 xl:block">
            <div className="floating-panel rounded-3xl border border-white/15 bg-white/10 p-5 text-primary-foreground backdrop-blur-xl">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BadgeCheck size={18} />
              </div>
              <h3 className="mb-2 text-xl font-heading font-semibold">Detailgenaue Umsetzung</h3>
              <p className="text-sm text-primary-foreground/75">
                Klare Ebenen, weiche Bewegungen und markante Einstiege machen den ersten Eindruck deutlich lebendiger.
              </p>
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
                <ScrollReveal key={s.key} delay={i * 100} animation={i % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}>
                  <Link to="/services" className="group relative block overflow-hidden p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all hover-scale h-full service-glow-card">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <Icon size={32} className="text-primary mb-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
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
                  <div className="group overflow-hidden rounded-lg bg-card border border-border hover:shadow-xl transition-shadow project-lift-card">
                    <div className="overflow-hidden">
                      <img src={p.img} alt={t(proj.title)} loading="lazy" width={800} height={600} className="w-full h-56 object-cover group-hover:scale-110 group-hover:rotate-[1deg] transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <div className="mb-3 h-1 w-16 rounded-full bg-primary/70 transition-all duration-500 group-hover:w-24" />
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
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-all hover-scale">
              {t(translations.home.ctaButton)} <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
