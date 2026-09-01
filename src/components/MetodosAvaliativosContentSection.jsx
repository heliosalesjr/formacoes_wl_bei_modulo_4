import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import MetAvaIntro from "@/components/content/MetAvaIntro"
import MAReflex from "@/components/content/MAReflex"
import MARubrica from "@/components/content/MARubrica"
import MAPorQue from "@/components/content/MAPorQue"
import MAHabilidades from "@/components/content/MAHabilidades"
import MAApplicacao from "@/components/content/MAAplicacao"
import MAPlanejamento from "@/components/content/MAPlanejamento"
import MAAvPares from "@/components/content/MAAVPares"
import MARelevanciaProfissional from "@/components/content/MARelevanciaProfissional"

export default function MetodosAvaliativosContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
            <MetAvaIntro />
          
            <FadeInWhenVisible>
              <MAReflex />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <MARubrica />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <MAPorQue />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <MAHabilidades />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <MAApplicacao />
            </FadeInWhenVisible>
              
            <FadeInWhenVisible>
              <MAPlanejamento />
            </FadeInWhenVisible>
              
            <FadeInWhenVisible>
              <MAAvPares />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <MARelevanciaProfissional />
            </FadeInWhenVisible>
          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/culminancia">Próxima Página: Culminância</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
