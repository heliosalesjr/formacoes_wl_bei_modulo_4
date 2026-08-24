import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo4ContentSection from "@/components/Modulo4ContentSection"

export default function Modulo4() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          eyebrow="Curso de Formação"
          title="Coleção Aprendendo a Lidar com Dinheiro"
          tag="Módulo 4"
          subtitle="Avaliação dos Resultados e Culminância do Projeto"
        />
        <Modulo4ContentSection />
      </main>
      <Footer />
    </div>
  )
}
