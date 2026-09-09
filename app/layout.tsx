import type { Metadata } from "next";
import { Exo_2, Montserrat, Open_Sans } from "next/font/google";
import "@/app/globals.css";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

// Texto aprobado en docs/content.md.
export const metadata: Metadata = {
  title: "Tremia | Tecnología aplicada",
  description:
    "Somos una empresa de servicios e ingeniería especializada en el desarrollo e implementación de soluciones tecnológicas para la industria.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${exo2.variable} ${openSans.variable} ${montserrat.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
