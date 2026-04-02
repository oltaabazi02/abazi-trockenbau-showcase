import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Home, Thermometer, PanelTop, Wrench } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const services = [
  { icon: Hammer, key: "trockenbau" as const },
  { icon: Home, key: "innenausbau" as const },
  { icon: Thermometer, key: "daemmung" as const },
  { icon: PanelTop, key: "decken" as const },
  { icon: Wrench, key: "renovierung" as const },
];

const Services = () => {
  const { t } = useLang();

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t(translations.services.title)}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t(translations.services.subtitle)}
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {services.map((s, i) => {
              const Icon = s.icon;
              const svc = translations.services[s.key];
              return (
                <div key={s.key} className={`flex flex-col md:flex-row items-start gap-6 p-8 rounded-lg border border-border bg-card ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-foreground mb-2">{t(svc.title)}</h2>
                    <p className="text-muted-foreground leading-relaxed">{t(svc.desc)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              {t(translations.hero.cta)} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
