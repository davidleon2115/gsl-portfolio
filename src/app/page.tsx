import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Servicios Profesionales de Topografía - Gestión Catastral, Diseño de Vías, Fotogrametría y LiDAR",

  description:
    "Descubre nuestro portafolio de servicios de topografía especializados: gestión catastral, diseño de vías, fotogrametría y LiDAR, georreferenciación y parcelaciones. Garantizamos precisión y calidad en cada proyecto para satisfacer tus necesidades de infraestructura y mapeo.",
  keywords:
    "Topografía, gestión catastral, diseño de vías, fotogrametría, LiDAR, georreferenciación, parcelaciones, servicios topográficos, mapeo, infraestructura, precisión topográfica",
};

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="snap-center" id="hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projets */}

      {/* Contact ME */}
    </div>
  );
}
