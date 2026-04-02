import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group overflow-hidden rounded-lg border border-border aspect-[4/3] hover-scale"
          >
            <img
              src={img}
              alt={`${title} - ${i + 1}`}
              loading="lazy"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setSelected(null); }}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors z-10"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
            className="absolute left-4 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors z-10"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
            className="absolute right-4 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors z-10"
          >
            <ChevronRight size={28} />
          </button>

          <img
            src={images[selected]}
            alt={`${title} - ${selected + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 text-primary-foreground text-sm">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
