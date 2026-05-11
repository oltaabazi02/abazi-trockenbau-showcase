const Impressum = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-heading font-bold text-foreground mb-8">Impressum</h1>
      <div className="prose prose-sm text-muted-foreground space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
        <p>Abazi Trockenbau<br />Musterstraße 123<br />80331 München<br />Deutschland</p>
        <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
        <p>Telefon: +49 123 456 7890<br />E-Mail: info@abazi-trockenbau.de</p>
        <h2 className="text-lg font-semibold text-foreground">Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />DE XXX XXX XXX</p>
        <h2 className="text-lg font-semibold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>Abazi Trockenbau<br />Musterstraße 123<br />80331 München</p>
      </div>
    </div>
  </section>
);

export default Impressum;
