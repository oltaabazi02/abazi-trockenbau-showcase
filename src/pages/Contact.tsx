import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30),
  message: z.string().trim().min(1).max(2000),
});

const Contact = () => {
  const { t } = useLang();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Error", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    toast({ title: t(translations.contact.success) });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t(translations.contact.title)}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(translations.contact.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" placeholder={t(translations.contact.name)} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required />
            <input type="email" placeholder={t(translations.contact.email)} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} required />
            <input type="tel" placeholder={t(translations.contact.phone)} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
            <textarea placeholder={t(translations.contact.message)} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className={inputClass} required />
            <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity w-full justify-center">
              <Send size={18} /> {t(translations.contact.send)}
            </button>
          </form>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t(translations.contact.phone)}</p>
                  <p className="font-medium text-foreground">{translations.contact.info.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t(translations.contact.email)}</p>
                  <p className="font-medium text-foreground">{translations.contact.info.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t({ al: "Adresa", de: "Adresse" })}</p>
                  <p className="font-medium text-foreground">{t(translations.contact.info.address)}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d11.576!3d48.137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzEzLjIiTiAxMcKwMzQnMzMuNiJF!5e0!3m2!1sde!2sde!4v1!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
