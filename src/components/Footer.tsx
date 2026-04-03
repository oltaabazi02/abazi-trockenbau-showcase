import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 flex items-center gap-3 text-lg font-heading font-bold text-foreground">
              <img
                src="/AT.jpeg"
                alt="AT logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span>
                ABAZI <span className="text-primary">Trockenbau</span>
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t({
                al: "Shërbime profesionale të ndërtimit të brendshëm me cilësi të lartë.",
                de: "Professionelle Innenausbau-Dienstleistungen in höchster Qualität.",
              })}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">
              {t(translations.nav.contact)}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <span>{translations.contact.info.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <span>{translations.contact.info.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-primary" />
                <span>{t(translations.contact.info.address)}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                to="/impressum"
                className="block text-muted-foreground transition-colors hover:text-primary"
              >
                {t(translations.footer.impressum)}
              </Link>
              <Link
                to="/datenschutz"
                className="block text-muted-foreground transition-colors hover:text-primary"
              >
                {t(translations.footer.datenschutz)}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Abazi Trockenbau. {t(translations.footer.rights)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
