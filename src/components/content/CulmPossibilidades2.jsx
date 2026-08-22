"use client";

import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function CulmPossibilidades2() {
    const ref = useRef();
      const { markAsViewed } = useSidebar();
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              markAsViewed("culminancia-exemplos");
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
    <section ref={ref}
      id="culminancia-exemplos" className="scroll-mt-20 w-full py-12 bg-white rounded-2xl shadow-2xl mt-8">
      <div className="max-w-4xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent text-center py-4">
          Possibilidades de Culminância
        </h1>

        <p className="text-slate-600 mb-8 py-2">
          A culminância é a etapa final de um projeto. Veja abaixo algumas formas de trabalhar a apresentação de resultados:
        </p>

        <Accordion type="single" collapsible className="space-y-4">

          {/* PORTFÓLIO */}
          <AccordionItem value="portfolio">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              PORTFÓLIO
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Criar um portfólio com os registros do projeto. Este portfólio poderá ser físico ou digital.
              </p>

              <p>
                Um portfólio é uma coleção organizada de trabalhos que demonstra o processo e os resultados alcançados ao longo do projeto. Pode incluir fotografias, documentos, relatórios, desenhos, gráficos e outras evidências do desenvolvimento.
              </p>

              <p>
                Se físico, pode ser apresentado em pastas, caixas ou painéis. Se digital, pode ser criado em plataformas como Google Sites, Wix ou Canva, permitindo maior alcance e facilidade de compartilhamento.
              </p>

              <p>
                O portfólio não apenas registra o resultado final, mas documenta toda a jornada de aprendizagem, mostrando desafios enfrentados, soluções encontradas e evolução do pensamento crítico dos estudantes.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* EVENTO */}
          <AccordionItem value="evento">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              EVENTO
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Celebração da conclusão em um evento que apresente o projeto, e que pode incluir depoimentos orais, imagens, e vídeos para a comunidade escolar.
              </p>

              <p>
                Um evento de culminância pode ser organizado como uma apresentação formal, um seminário, uma mostra interativa ou uma festa comemorativa. Pode incluir depoimentos, exibição de vídeos, apresentações visuais e até dramatizações.
              </p>

              <p>
                A presença da comunidade escolar amplia o impacto e valoriza o trabalho realizado, podendo incluir espaços interativos e experiências práticas relacionadas ao projeto.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* MOSTRA DE VÍDEOS */}
          <AccordionItem value="mostra-videos">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              MOSTRA DE VÍDEOS OU PRODUÇÕES DIGITAIS
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Criação de uma Mostra Fotográfica com os registros em imagens do desenvolvimento do projeto.
              </p>

              <p>
                Uma mostra pode incluir documentários curtos, entrevistas, time-lapses, animações, podcasts e materiais para redes sociais.
              </p>

              <p>
                Esses materiais podem ser exibidos presencialmente, em plataformas online ou em blogs. Desenvolvem habilidades de comunicação, edição e pensamento crítico.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* SITES E REDES SOCIAIS */}
          <AccordionItem value="redes-sociais">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              SITES E REDES SOCIAIS
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                A divulgação em sites e redes sociais amplia o alcance da culminância, com posts, vídeos e notícias no site institucional.
              </p>

              <p>
                Cada plataforma tem sua força: redes sociais para engajamento, sites para credibilidade. Conteúdos com fotos, vídeos curtos e depoimentos são essenciais.
              </p>

              <p>
                Essa estratégia fortalece a conexão entre escola, comunidade e iniciativa do projeto.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* APRESENTAÇÃO ORAL */}
          <AccordionItem value="apresentacao-oral">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              APRESENTAÇÃO ORAL OU DRAMATIZADA
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Pode envolver teatro, roda de conversa, contação de histórias, entrevistas simuladas e outros formatos que colocam os estudantes como protagonistas.
              </p>

              <p>
                Desenvolve comunicação, confiança, criatividade e colaboração.
              </p>

              <p>
                Cria experiências memoráveis que conectam emocionalmente o público ao conhecimento construído.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* PUBLICAÇÃO EM AMBIENTES VIRTUAIS */}
          <AccordionItem value="ambientes-virtuais">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              PUBLICAÇÃO EM OUTROS AMBIENTES VIRTUAIS
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Como Padlet, blog da turma ou redes sociais da escola, com registros escritos, visuais ou sonoros.
              </p>

              <p>
                Esses ambientes permitem documentação colaborativa e interativa, com espaço para fotos, vídeos, textos e links.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* APRESENTAÇÕES NA SALA */}
          <AccordionItem value="apresentacoes-sala">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              APRESENTAÇÕES NA PRÓPRIA SALA
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Os grupos apresentam suas produções para os colegas, explicando escolhas e descobertas.
              </p>

              <p>
                Desenvolve escuta ativa, reflexão, comunicação e respeito entre pares.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* MURAL COLETIVO */}
          <AccordionItem value="mural-coletivo">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              MURAL COLETIVO
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Com cartazes, fotos, frases, produções textuais e gráficos, o mural conta a trajetória do projeto.
              </p>

              <p>
                Torna o processo visível para toda a escola e funciona como registro permanente.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* PRODUÇÃO FINAL */}
          <AccordionItem value="producao-final">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              PRODUÇÃO FINAL INDIVIDUAL OU EM GRUPO
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Pode ser texto, carta aberta, cartaz, vídeo, tirinha... O importante é representar a aprendizagem vivida.
              </p>

              <p>
                Permite expressão pessoal e consolida o conhecimento.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* RODA DE CONVERSA */}
          <AccordionItem value="roda-conversa">
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              RODA DE CONVERSA DE FECHAMENTO
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed space-y-4 px-2 pb-4">
              <p>
                Uma roda simples já pode funcionar como culminância: os alunos compartilham o que foi marcante e o que aprenderam.
              </p>

              <p>
                Desenvolve empatia, escuta ativa e reflexão profunda.
              </p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}
