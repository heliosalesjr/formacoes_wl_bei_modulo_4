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
          title="Módulo 4"
          tag="Módulo 4"
          subtitle="Este é o curso autoinstrucional da BEĨ Educação sobre a aplicação da coleção Aprendendo a Lidar com Dinheiro"
        />
        <Modulo4ContentSection />
      </main>
      <Footer />
    </div>
  )
}
