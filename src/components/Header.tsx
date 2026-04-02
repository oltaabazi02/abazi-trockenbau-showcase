import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { dark, toggle } = useTheme();
  const location = useLocation();

  const links = [
    { to: "/", label: t(translations.nav.home) },
    { to: "/services", label: t(translations.nav.services) },
    { to: "/projects", label: t(translations.nav.projects) },
    { to: "/about", label: t(translations.nav.about) },
    { to: "/contact", label: t(translations.nav.contact) },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-heading font-bold text-foreground">
          ABAZI <span className="text-primary">Trockenbau</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-md overflow-hidden text-xs">
            <button
              onClick={() => setLang("al")}
              className={`px-2 py-1 transition-colors ${lang === "al" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              AL
            </button>
            <button
              onClick={() => setLang("de")}
              className={`px-2 py-1 transition-colors ${lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              DE
            </button>
          </div>

          <button onClick={toggle} className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-background border-b border-border">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
