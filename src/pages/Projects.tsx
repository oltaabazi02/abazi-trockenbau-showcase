import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import ScrollReveal from "@/components/ScrollReveal";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const images = [project1, project2, project3, project4, project5, beforeAfter];

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
          {translations.projects.items.map((proj, i) => (
            <ScrollReveal key={i} delay={i * 100} animation="animate-scale-in">
              <div className="group overflow-hidden rounded-lg bg-card border border-border hover:shadow-xl transition-shadow">
                <div className="overflow-hidden">
                  <img src={images[i]} alt={t(proj.title)} loading="lazy" width={800} height={600} className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">{t(proj.title)}</h3>
                  <p className="text-sm text-muted-foreground">{t(proj.desc)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
