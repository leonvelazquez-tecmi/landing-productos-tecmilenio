import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Productos y Servicios | Tecmilenio",
  description:
    "Programas diseñados para que tu título, tu trabajo y tu bienestar estén integrados desde el día uno. MAPS, FIT, IPBI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased font-sans`}
        style={{
          // Corbel no está en Google Fonts; fallback similar
          fontFamily: '"Corbel", "Lucida Sans", "Segoe UI", sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
