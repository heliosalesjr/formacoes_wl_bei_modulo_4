import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import RegistrosContentSection from "@/components/RegistrosContentSection"

export default function Registros() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Registros"
          subtitle="Organize os registros produzidos ao longo deste módulo"
          tag="Módulo 4"
        />
        <RegistrosContentSection />
      </main>
      <Footer />
    </div>
  )
}
