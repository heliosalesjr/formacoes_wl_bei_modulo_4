import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import AvaIntro from "@/components/content/AvaIntro"
import CulmComo from "@/components/content/CulmComo"
import CulmExemplos from "@/components/content/CulmExemplos"
import CulmPossibilidades2 from "@/components/content/CulmPossibilidades2"

export default function CulminanciaContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <AvaIntro />

          <FadeInWhenVisible>
            <CulmComo />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CulmExemplos />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CulmPossibilidades2 />
          </FadeInWhenVisible>

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/registros">Próxima Página: Registros</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
