import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, Moon, Sun } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useTheme } from "@/hooks/useTheme";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
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
          <div className="flex items-center border border-border rounded-xl overflow-hidden text-xs">
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

          <button onClick={toggle} className="p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-sm transition-all hover:scale-105 hover:border-primary/40 hover:bg-background">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-none border-l-0 bg-background/95 px-0 pt-0 backdrop-blur-2xl sm:max-w-none"
            >
              <div className="mobile-menu-gradient border-b border-border px-5 pb-6 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SheetTitle className="text-left font-heading text-2xl font-bold">
                      ABAZI <span className="text-primary">Trockenbau</span>
                    </SheetTitle>
                    <SheetDescription className="mt-2 max-w-xs text-left text-sm text-muted-foreground">
                      {lang === "de"
                        ? "Innenausbau, Trockenbau und Renovierung mit einem moderneren mobilen Einstieg."
                        : "Trockenbau, interior dhe renovim me një menu mobile më moderne dhe më dinamike."}
                    </SheetDescription>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={toggle}
                    className="flex items-center justify-between rounded-2xl border border-border bg-card/80 px-4 py-3 text-left text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span>{dark ? "Light Mode" : "Dark Mode"}</span>
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                  </button>

                  <div className="flex items-center rounded-2xl border border-border bg-card/80 p-1">
                    <button
                      onClick={() => setLang("al")}
                      className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${lang === "al" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      AL
                    </button>
                    <button
                      onClick={() => setLang("de")}
                      className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      DE
                    </button>
                  </div>
                </div>
              </div>

              <nav className="px-5 py-6">
                <div className="space-y-3">
                  {links.map((link, index) => (
                    <SheetClose asChild key={link.to}>
                      <Link
                        to={link.to}
                        className={`mobile-nav-item group flex items-center justify-between rounded-2xl border px-4 py-4 text-base font-medium transition-all ${
                          location.pathname === link.to
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "border-border bg-card/60 text-foreground hover:border-primary/20 hover:bg-card"
                        }`}
                        style={{ animationDelay: `${index * 70}ms` }}
                      >
                        <span>{link.label}</span>
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-border bg-card/70 p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground">
                    {lang === "de"
                      ? "Senden Sie uns direkt eine Anfrage für Ihr nächstes Projekt."
                      : "Na dërgoni menjëherë një kërkesë për projektin tuaj të ardhshëm."}
                  </p>
                  <SheetClose asChild>
                    <Button asChild className="mt-4 h-11 w-full">
                      <Link to="/contact">
                        {t(translations.nav.contact)} <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
