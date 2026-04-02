import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g8 from "@/assets/gallery/g8.jpg";

export interface Project {
  id: string;
  title: { al: string; de: string };
  desc: { al: string; de: string };
  cover: string;
  images: string[];
  details: { al: string; de: string };
}

export const projects: Project[] = [
  {
    id: "renovim-apartamenti-muenchen",
    title: { al: "Renovim apartamenti - München", de: "Wohnungsrenovierung - München" },
    desc: { al: "Renovim komplet i një apartamenti 80m² me Trockenbau dhe lyerje.", de: "Komplettrenovierung einer 80m² Wohnung mit Trockenbau und Malerarbeiten." },
    cover: project1,
    images: [project1, g1, g2, g3, g7, g8, project5, g4, beforeAfter, project2],
    details: {
      al: "Ky projekt përfshiu renovimin e plotë të një apartamenti 80m² në München. Puna përfshinte montimin e mureve ndarëse me gips-karton, lyerjen e mureve, instalimin e tavaneve të reja dhe përfundimin e dyshemesë. Projekti u përfundua brenda 4 javësh.",
      de: "Dieses Projekt umfasste die komplette Renovierung einer 80m² Wohnung in München. Die Arbeiten umfassten die Montage von Trennwänden aus Gipskarton, Malerarbeiten, die Installation neuer Decken und die Fertigstellung des Bodens. Das Projekt wurde innerhalb von 4 Wochen abgeschlossen.",
    },
  },
  {
    id: "montim-tavani-stuttgart",
    title: { al: "Montim tavani - Stuttgart", de: "Deckenmontage - Stuttgart" },
    desc: { al: "Instalim i tavaneve të varura në një zyrë moderne.", de: "Installation von Abhangdecken in einem modernen Büro." },
    cover: project2,
    images: [project2, g5, project1, g3, g7, g2, g1, project5],
    details: {
      al: "Instalimi i tavaneve akustike të varura në një hapësirë zyre prej 200m² në Stuttgart. Sistemi përfshin ndriçim LED të integruar dhe izolim akustik për ambient pune optimal.",
      de: "Installation von akustischen Abhangdecken in einem 200m² Büroraum in Stuttgart. Das System umfasst integrierte LED-Beleuchtung und Schalldämmung für ein optimales Arbeitsumfeld.",
    },
  },
  {
    id: "renovim-banjo-nuernberg",
    title: { al: "Renovim banjo - Nürnberg", de: "Badrenovierung - Nürnberg" },
    desc: { al: "Transformim komplet i banjës me materiale cilësore.", de: "Komplette Badumgestaltung mit hochwertigen Materialien." },
    cover: project3,
    images: [project3, g1, g4, g7, project1, g2, g8, beforeAfter, project5, g3],
    details: {
      al: "Renovim i plotë i banjës përfshirë Trockenbau me pllaka të reja, instalime sanitare moderne, dhe izolim kundër lagështirës. Materiale cilësore dhe dizajn elegant.",
      de: "Komplette Badrenovierung mit neuen Fliesen, modernen Sanitärinstallationen und Feuchtigkeitsdämmung. Hochwertige Materialien und elegantes Design.",
    },
  },
  {
    id: "izolim-termik-augsburg",
    title: { al: "Izolim termik - Augsburg", de: "Wärmedämmung - Augsburg" },
    desc: { al: "Izolim i mureve të jashtme për kursim të energjisë.", de: "Außenwanddämmung für Energieeinsparung." },
    cover: project4,
    images: [project4, g6, g3, g1, g7, project1, g5, g2],
    details: {
      al: "Izolim termik profesional i mureve të jashtme të një shtëpie familjare në Augsburg. Përdorimi i materialeve izoluese premium për kursim maksimal të energjisë dhe komoditet të shtuar.",
      de: "Professionelle Wärmedämmung der Außenwände eines Einfamilienhauses in Augsburg. Verwendung von Premium-Dämmstoffen für maximale Energieeinsparung und erhöhten Komfort.",
    },
  },
  {
    id: "innenausbau-frankfurt",
    title: { al: "Innenausbau - Frankfurt", de: "Innenausbau - Frankfurt" },
    desc: { al: "Ndërtim i brendshëm komplet për një shtëpi të re.", de: "Kompletter Innenausbau für ein Neubauhaus." },
    cover: project5,
    images: [project5, g8, g2, g4, g1, g3, g7, project2, g5, beforeAfter],
    details: {
      al: "Ndërtim komplet i brendshëm i një shtëpie të re në Frankfurt. Përfshirë montimin e mureve, tavaneve, izolimin, lyerjen dhe përfundimin e plotë të hapësirave.",
      de: "Kompletter Innenausbau eines Neubauhauses in Frankfurt. Einschließlich Wand- und Deckenmontage, Dämmung, Malerarbeiten und vollständige Raumgestaltung.",
    },
  },
  {
    id: "para-pas-berlin",
    title: { al: "Para / Pas - Berlin", de: "Vorher / Nachher - Berlin" },
    desc: { al: "Transformim dramatik i një dhome të vjetër.", de: "Dramatische Verwandlung eines alten Zimmers." },
    cover: beforeAfter,
    images: [beforeAfter, g1, g7, g8, project5, g2, g4, g3, project1, g5],
    details: {
      al: "Transformim dramatik i një dhome të vjetër dhe të dëmtuar në Berlin. Puna përfshiu heqjen e mureve të vjetra, montimin e Trockenbau të ri, izolim, lyerje dhe përfundim profesional.",
      de: "Dramatische Verwandlung eines alten und beschädigten Zimmers in Berlin. Die Arbeiten umfassten den Abriss alter Wände, neue Trockenbaumontage, Dämmung, Malerarbeiten und professionelle Fertigstellung.",
    },
  },
];
