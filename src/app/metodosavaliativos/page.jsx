import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MetodosAvaliativosContentSection from "@/components/MetodosAvaliativosContentSection"

export default function MetodosAvaliativos() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Métodos Avaliativos"
          subtitle="Conheça os métodos avaliativos trabalhados neste módulo"
          tag="Módulo 4"
        />
        <MetodosAvaliativosContentSection />
      </main>
      <Footer />
    </div>
  )
}
