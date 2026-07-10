import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import CulminanciaContentSection from "@/components/CulminanciaContentSection"

export default function Culminancia() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Culminância"
          subtitle="Conheça a culminância proposta para este módulo"
          tag="Módulo 4"
        />
        <CulminanciaContentSection />
      </main>
      <Footer />
    </div>
  )
}
