import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Shield } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const valueIcons = [Award, Shield, Clock];

const About = () => {
  const { t } = useLang();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t(translations.about.title)}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(translations.about.subtitle)}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg">
            {t(translations.about.story)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {translations.about.values.map((val, i) => {
            const Icon = valueIcons[i];
            return (
              <div key={i} className="text-center p-8 rounded-lg bg-card border border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{t(val.title)}</h3>
                <p className="text-sm text-muted-foreground">{t(val.desc)}</p>
              </div>
            );
          })}
        </div>

        <div className="section-alt rounded-lg p-8 md:p-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t(translations.about.experience)}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
            {t(translations.home.ctaButton)} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
