import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

const Projects = () => {
  const { t } = useLang();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t(translations.projects.title)}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(translations.projects.subtitle)}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <ScrollReveal key={proj.id} delay={i * 100} animation="animate-scale-in">
              <Link to={`/projects/${proj.id}`} className="group block overflow-hidden rounded-lg bg-card border border-border hover:shadow-xl transition-shadow">
                <div className="overflow-hidden relative">
                  <img src={proj.cover} alt={t(proj.title)} loading="lazy" width={800} height={600} className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-2 right-2 bg-foreground/70 text-primary-foreground text-xs px-2 py-1 rounded">
                    {proj.images.length} {t({ al: "foto", de: "Fotos" })}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{t(proj.title)}</h3>
                  <p className="text-sm text-muted-foreground">{t(proj.desc)}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
