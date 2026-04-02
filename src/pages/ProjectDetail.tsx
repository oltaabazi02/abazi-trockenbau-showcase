import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import ScrollReveal from "@/components/ScrollReveal";
import { translations } from "@/i18n/translations";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLang();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
            {t({ al: "Projekti nuk u gjet", de: "Projekt nicht gefunden" })}
          </h1>
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={16} /> {t({ al: "Kthehu te projektet", de: "Zurück zu den Projekten" })}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> {t({ al: "Të gjitha projektet", de: "Alle Projekte" })}
        </Link>

        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t(project.title)}
          </h1>
          <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            {t(project.details)}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
            {t({ al: "Galeria e projektit", de: "Projektgalerie" })}
            <span className="text-muted-foreground text-sm font-sans ml-2">({project.images.length} {t({ al: "foto", de: "Fotos" })})</span>
          </h2>
          <ProjectGallery images={project.images} title={t(project.title)} />
        </ScrollReveal>

        <ScrollReveal className="mt-16 text-center" delay={300}>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-all hover-scale">
            {t(translations.hero.cta)} <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectDetail;
