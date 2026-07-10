import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import EncerramentoContentSection from "@/components/EncerramentoContentSection"

export default function Encerramento() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Encerramento"
          subtitle="Concluir o Módulo 4 e revisar o que aprendemos até aqui"
          tag="Módulo 4"
        />
        <EncerramentoContentSection />
      </main>
      <Footer />
    </div>
  )
}
