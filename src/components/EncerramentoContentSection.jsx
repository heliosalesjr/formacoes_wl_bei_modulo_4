import FadeInWhenVisible from "./FadeInWhenVisible"
import EncerramentoIntro from "@/components/content/EncerramentoIntro"
import EncerramentoAprendi from "@/components/content/EncerramentoAprendi"
import EncerramentoQuiz from "@/components/content/EncerramentoQuiz"
import EncerramentoAdeus from "@/components/content/EncerramentoAdeus"

export default function EncerramentoContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <EncerramentoIntro />

          <FadeInWhenVisible>
            <EncerramentoAprendi />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <EncerramentoQuiz />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <EncerramentoAdeus />
          </FadeInWhenVisible>

        </div>
      </div>
    </section>
  )
}
