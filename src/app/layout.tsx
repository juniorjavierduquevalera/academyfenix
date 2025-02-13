import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Academy fenix",
  description:
    "Descubre estrategias de venta probadas por expertos para triplicar tus ingresos y liderar con impacto. Únete a nuestro webinar gratuito y aprende cómo cerrar ventas de alto valor, construir equipos exitosos y alcanzar el éxito financiero en tiempo récord. ¡Regístrate ahora y transforma tu futuro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
