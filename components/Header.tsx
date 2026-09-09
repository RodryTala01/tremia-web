"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/Arrow";

const links = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Industrias", "#industrias"],
  ["Nosotros", "#nosotros"],
  ["Contacto", "#contacto"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const close = () => setOpen(false);
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) close();
    };
    desktop.addEventListener("change", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      desktop.removeEventListener("change", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);

  return (
    <header className="site-header" ref={header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <div className="shell header-inner">
        {/* TODO: incorporar el archivo oficial del logo de Tremia. */}
        <a className="wordmark" href="#inicio" aria-label="Tremia — Inicio" onClick={() => setOpen(false)}>Tremia</a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contacto">Hablemos <Arrow diagonal /></a>
        <button className="menu-toggle" ref={toggle} type="button" aria-expanded={open}
          aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}>
          <span>{open ? "Cerrar" : "Menú"}</span>
          <span className={`menu-symbol ${open ? "is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil" hidden={!open}>
        <div className="shell">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Arrow /></a>)}
          <a href="#contacto" className="mobile-cta" onClick={() => setOpen(false)}>Hablemos <Arrow diagonal /></a>
        </div>
      </nav>
    </header>
  );
}
