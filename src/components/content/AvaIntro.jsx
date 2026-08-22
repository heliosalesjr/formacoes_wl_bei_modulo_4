"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const AvaIntro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('avaliacao-intro');
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
    <div ref={ref} id="avaliacao-intro" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent py-4">
            A culminância do projeto: o que é e para que serve?
          </h1>
          
        </div>
        <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
         Quando chegamos ao fim de um projeto, não se trata apenas de “terminar o conteúdo”. A culminância é o momento em que paramos para olhar para trás e pensar: o que fizemos juntos? O que aprendemos? O que queremos mostrar para os outros? Ela funciona como uma síntese, um encerramento com sentido, e ajuda os estudantes a enxergar o percurso que fizeram.
        </p> 
        <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
         Mais do que apresentar um produto pronto, a culminância é uma oportunidade de compartilhar o processo vivido. Isso inclui as descobertas, os desafios, os aprendizados e até o que não deu certo, porque tudo isso faz parte de aprender.

        </p>
      </div>

      {/* Seção 1: O Diário de Bordo como ferramenta central - Imagem à direita */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">
              Ela serve para:
            </h2>
          </div>
          
         
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-semibold text-slate-800">Valorizar a autoria dos estudantes</span>, permitindo que eles mostrem, com suas próprias palavras e produções, o que construíram ao longo do tempo;
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-semibold text-slate-800">Ajudar o grupo a perceber os aprendizados mais amplos do projeto</span>, inclusive aqueles que não cabem num formulário ou prova;
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-semibold text-slate-800">Registrar o processo vivido</span>, por meio de fotos, vídeos, falas, desenhos, relatos ou outras formas que façam sentido;
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-semibold text-slate-800">Encerrar o projeto de modo significativo</span>, criando uma sensação de fechamento que conecta todas as etapas anteriores.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center h-full order-2">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/culminancia.jpg"
              alt="Diário de Bordo como ferramenta central"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Seção 2: Rubricas de Avaliação - Imagem à esquerda */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="flex items-center justify-center h-full order-2 md:order-1">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/checky.jpg"
              alt="Rubricas de Avaliação"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1 md:order-2">
          <div className="flex items-center gap-3">
            
          </div>
          
          <p className="text-slate-700 text-base leading-relaxed">
            A culminância não precisa ser um grande evento ou envolver toda a escola. Em muitos casos, uma roda de conversa bem conduzida, um mural com reflexões ou uma apresentação simples feita entre as turmas já cumprem bem esse papel.

          </p>
          
          <p className="text-slate-700 text-base leading-relaxed">
            Com isso, cada escola pode encontrar sua forma de organizar esse momento. O importante é que ele seja viável e tenha relação com o que foi construído com a turma.
          </p>
        </div>
      </div>

    </div>
  )
}

export default AvaIntro