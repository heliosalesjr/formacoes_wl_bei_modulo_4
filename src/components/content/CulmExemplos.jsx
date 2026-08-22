"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'

const CulmExemplos = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('exemplos-praticos');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="exemplos-praticos" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold text-slate-600">
            Exemplos práticos
          </h1>
          
        </div>
      </div>

      {/* Accordion com os exemplos */}
      <div className="space-y-8">
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          {/* Exemplo 1 - Feira do consumo consciente */}
          <AccordionItem value="item-1" className="bg-white rounded-lg shadow-lg border border-slate-200">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <span className="text-xl font-bold text-blue-700">Feira do consumo consciente</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-6">

              {/* IMG NOVA */}
              <img src="/sustentabilidade.jpg" alt="Sustentabilidade" className="w-full rounded-lg mb-6" />

              <p className="text-slate-700 leading-relaxed">
                Professores organizaram com os estudantes uma feira com estandes temáticos sobre consumo, publicidade e sustentabilidade. Cada grupo apresentou:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <p className="text-slate-700">um problema pesquisado (ex: consumismo na moda),</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <p className="text-slate-700">os dados que levantaram,</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <p className="text-slate-700">e uma proposta de solução ou conscientização.</p>
                  </div>
                </div>
              </div>

              {/* Etapa reflexiva */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔎</span>
                  <h4 className="font-bold text-indigo-800">Etapa reflexiva posterior:</h4>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Após a realização da feira, foi promovido um momento de retomada e sistematização que permitiu aos estudantes compreenderem o que aprenderam, como aprenderam e de que forma o processo contribuiu para sua formação crítica. Para isso, os professores organizaram com eles a seguinte sequência de atividades:
                </p>

                {/* Subetapas */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-indigo-100">
                    <h5 className="font-semibold text-indigo-700 mb-2">1.1. Roda de conversa:</h5>
                    <p className="text-slate-700 text-sm mb-3">
                      Em sala de aula, os professores conduziram uma roda de conversa com perguntas disparadoras como:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-slate-700">– O que mais te surpreendeu durante a preparação da feira?</p>
                      <p className="text-slate-700">– Que tipo de dúvida ou comentário os visitantes trouxeram?</p>
                      <p className="text-slate-700">– Você mudou de opinião sobre algum tema após ver o estande de outro grupo?</p>
                    </div>
                    <p className="text-slate-700 text-sm mt-3 italic">
                      Essa roda favorece a escuta ativa, a valorização do protagonismo dos colegas e o exercício da argumentação.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-indigo-100">
                    <h5 className="font-semibold text-indigo-700 mb-2">1.2. Produção escrita individual ou em dupla:</h5>
                    <p className="text-slate-700 text-sm mb-3">
                      Depois, os alunos foram convidados a escrever um breve texto reflexivo com base em perguntas orientadoras, como:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-slate-700">– Qual foi sua maior dificuldade e maior aprendizado nesse processo?</p>
                      <p className="text-slate-700">– O que faria diferente se fosse repetir essa atividade?</p>
                      <p className="text-slate-700">– De que forma essa pesquisa se conecta com sua vida cotidiana?</p>
                    </div>
                    <p className="text-slate-700 text-sm mt-3 italic">
                      Essa escrita pode assumir o formato de relato de experiência, carta aberta ou parágrafo reflexivo.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-indigo-100">
                    <h5 className="font-semibold text-indigo-700 mb-2">1.3. Socialização e síntese coletiva:</h5>
                    <p className="text-slate-700 text-sm">
                      Após a produção individual, a turma pôde montar um painel/mural com trechos dos textos, frases de impacto ou destaques das rodas de conversa, uma etapa crucial que ajudou os alunos a reconhecerem padrões de pensamento e fortalece a ideia de construção conjunta do conhecimento.
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-green-500 pl-6 italic text-slate-600 bg-green-50 rounded-r-lg p-4">
                <strong>Ponto forte:</strong> Criou um espaço de troca entre estudantes e visitantes que valorizou o processo de aprendizagem e incentivou a escuta ativa, a oralidade e o senso de responsabilidade coletiva.
              </blockquote>
            </AccordionContent>
          </AccordionItem>

          {/* Exemplo 2 - Exposição de cartazes */}
          <AccordionItem value="item-2" className="bg-white rounded-lg shadow-lg border border-slate-200">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <span className="text-xl font-bold text-green-700">Exposição de cartazes e infográficos</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-6">

              {/* IMG NOVA */}
              <img src="/cartazes.png" alt="Cartazes" className="w-full rounded-lg mb-6" />

              <p className="text-slate-700 leading-relaxed">
                Algumas turmas montaram uma exposição com cartazes feitos em grupo sobre temas como:
              </p>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <p className="text-slate-700">propaganda infantil,</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <p className="text-slate-700">diferença entre desejo e necessidade,</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <p className="text-slate-700">impactos do endividamento.</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                A mostra ficou aberta na escola por uma semana, e cada grupo ficou responsável por apresentar seu tema para os visitantes durante um recreio.
              </p>

              {/* Etapa reflexiva */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔎</span>
                  <h4 className="font-bold text-emerald-800">Etapa reflexiva posterior:</h4>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  após o encerramento da exposição, os professores conduziram com as turmas uma sequência de atividades voltadas à análise do percurso e à consolidação do aprendizado. Essa etapa aconteceu em dois momentos complementares:
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <h5 className="font-semibold text-emerald-700 mb-2">2.1. Roda de conversa:</h5>
                    <p className="text-slate-700 text-sm mb-3">
                      As turmas participaram de uma roda de conversa mediada pelos professores, em que compartilharam suas impressões sobre o processo de construção dos cartazes, a escolha dos temas, a experiência de apresentar para os colegas durante o recreio e as reações dos visitantes. Essa conversa foi conduzida com perguntas disparadoras, como:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-slate-700">- O que mais chamou sua atenção enquanto pesquisavam e montavam o cartaz?</p>
                      <p className="text-slate-700">- Foi difícil explicar o tema para os colegas?</p>
                      <p className="text-slate-700">- Vocês perceberam interesse ou curiosidade por parte de quem passou pela exposição?</p>
                      <p className="text-slate-700">- O que fariam diferente em uma próxima vez?</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <h5 className="font-semibold text-emerald-700 mb-2">2.2. Registro escrito individual ou coletivo:</h5>
                    <p className="text-slate-700 text-sm mb-3">
                      Após a roda de conversa, os estudantes realizaram registros escritos sobre a experiência. Cada turma optou por formatos diferentes, como:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-slate-700">- relatos individuais sobre o que aprenderam e como se sentiram ao participar da mostra;</p>
                      <p className="text-slate-700">- autoavaliações em grupo, refletindo sobre a colaboração entre os colegas;</p>
                      <p className="text-slate-700">- ou textos opinativos avaliando o impacto da ação na escola.</p>
                    </div>
                    <p className="text-slate-700 text-sm mt-3 italic">
                      Esses registros serviram tanto como instrumento de avaliação quanto como forma de os alunos se apropriarem do percurso vivido, reconhecendo a importância de discutir temas sociais de maneira crítica e criativa dentro da escola.
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-green-500 pl-6 italic text-slate-600 bg-green-50 rounded-r-lg p-4">
                <strong>Ponto forte:</strong> Favoreceu a organização das ideias e a comunicação visual, ao exigir que os alunos selecionassem, sintetizassem e explicassem os conteúdos de forma acessível e coerente.
              </blockquote>
            </AccordionContent>
          </AccordionItem>

          {/* Exemplo 3 - Roda de conversa com comunidade */}
          <AccordionItem value="item-3" className="bg-white rounded-lg shadow-lg border border-slate-200">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <span className="text-xl font-bold text-purple-700">Roda de conversa com a comunidade escolar</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-6">

              {/* IMG NOVA */}
              <img src="/dialogo.png" alt="Diálogo" className="w-full rounded-lg mb-6" />

              <p className="text-slate-700 leading-relaxed">
                Alguns professores convidaram apenas os familiares dos estudantes para uma roda de conversa onde cada aluno compartilhou:
              </p>
              
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <p className="text-slate-700">algo que aprendeu;</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <p className="text-slate-700">como isso mudou seus hábitos em casa;</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <p className="text-slate-700">o que ainda tem dúvidas sobre o tema.</p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-purple-500 pl-6 italic text-slate-600 bg-purple-50 rounded-r-lg p-4">
                <strong>Ponto forte:</strong> Fortaleceu o vínculo entre família e escola, ao abrir espaço para diálogo, acolhimento e reflexão conjunta sobre práticas de consumo no cotidiano.
              </blockquote>
            </AccordionContent>
          </AccordionItem>

          {/* Exemplo 4 - Simulação financeira */}
          <AccordionItem value="item-4" className="bg-white rounded-lg shadow-lg border border-slate-200">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <span className="text-xl font-bold text-orange-700">Simulação de escolhas financeiras</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-6">

              {/* IMG NOVA */}
              <img src="/simula.png" alt="Simulação" className="w-full rounded-lg mb-6" />

              <p className="text-slate-700 leading-relaxed">
                Em uma escola rural, a culminância foi a realização de uma simulação prática. Cada grupo recebeu um "orçamento" fictício e precisou tomar decisões com base em uma planilha. Depois, apresentaram:
              </p>
              
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-slate-700">o que escolheram priorizar;</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-slate-700">em qual parte tiveram dificuldade;</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-slate-700">e como equilibraram os desejos e as necessidades.</p>
                  </div>
                </div>
              </div>

              {/* Etapa reflexiva */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔎</span>
                  <h4 className="font-bold text-red-800">Etapa reflexiva posterior:</h4>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Após a simulação, o professor conduziu uma etapa de sistematização dos aprendizados em grupo. Cada equipe foi incentivada a apresentar brevemente suas decisões e justificar os critérios usados para priorizar os gastos. Em seguida, o docente propôs uma roda de conversa com perguntas orientadoras, como:
                </p>

                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <div className="space-y-1 text-sm">
                    <p className="text-slate-700">- Quais escolhas foram mais difíceis de tomar?</p>
                    <p className="text-slate-700">- Em algum momento o grupo discordou sobre o que era mais importante? Como resolveram?</p>
                    <p className="text-slate-700">- Se pudessem refazer as escolhas, mudariam alguma coisa? Por quê?</p>
                    <p className="text-slate-700">- O que essa atividade nos ensinou sobre a diferença entre desejo e necessidade?</p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm">
                  A discussão permitiu que os estudantes percebessem os impactos de suas decisões, identificassem padrões de consumo e reconhecessem a importância do planejamento financeiro. O professor finalizou retomando os principais conceitos do projeto e propondo uma escrita coletiva de
                </p>
              </div>

              <blockquote className="border-l-4 border-orange-500 pl-6 italic text-slate-600 bg-orange-50 rounded-r-lg p-4">
                <strong>Ponto forte:</strong> Permitiu que os estudantes colocassem em prática conhecimentos discutidos em sala, exercitando o pensamento crítico diante de situações reais de decisão.
              </blockquote>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default CulmExemplos
