import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectGallery from "@/components/ProjectGallery";

const imageModules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,JPG,JPEG,png,webp,avif}",
  { eager: true, import: "default" },
);

const galleryImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string);

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

        <ScrollReveal delay={100} animation="animate-scale-in">
          <ProjectGallery
            images={galleryImages}
            title={t({ al: "Galeria", de: "Galerie" })}
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
