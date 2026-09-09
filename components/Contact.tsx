import Arrow from "@/components/Arrow";

export default function Contact() {
  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="shell">
        <p className="eyebrow section-label">¿Tenés un proyecto?</p>
        <h2 id="contact-title"><a href="mailto:info@tremia.com.ar">Hablemos <Arrow diagonal /></a></h2>
        <div className="contact-layout">
          <p className="contact-statement">Podemos ayudarte a transformar una necesidad en una solución.</p>
          <div className="contact-details">
            <a href="mailto:info@tremia.com.ar">info@tremia.com.ar <Arrow diagonal /></a>
            <a href="tel:+5491164948775">+54 9 11 6494-8775 <Arrow diagonal /></a>
            {/* TODO: validar las URLs oficiales de Instagram y LinkedIn antes de enlazarlas. */}
            <dl className="social-details"><div><dt>Instagram</dt><dd>TREMIA.AR</dd></div><div><dt>LinkedIn</dt><dd>TREMIA</dd></div></dl>
            <a className="contact-web" href="https://tremia.com.ar">tremia.com.ar <Arrow diagonal /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
