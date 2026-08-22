"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';

const AvaIntro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('avaliacao-intro');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const items = [
    { text: <><strong>Valorizar a autoria dos estudantes</strong>, permitindo que eles mostrem, com suas próprias palavras e produções, o que construíram ao longo do tempo;</> },
    { text: <><strong>Ajudar o grupo a perceber os aprendizados mais amplos do projeto</strong>, inclusive aqueles que não cabem num formulário ou prova;</> },
    { text: <><strong>Registrar o processo vivido</strong>, por meio de fotos, vídeos, falas, desenhos, relatos ou outras formas que façam sentido;</> },
    { text: <><strong>Encerrar o projeto de modo significativo</strong>, criando uma sensação de fechamento que conecta todas as etapas anteriores.</> },
  ];

  return (
    <div ref={ref} id="avaliacao-intro" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-10">

      {/* Título + intro */}
      <div className="text-center space-y-5">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          A culminância do projeto: o que é e para que serve?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed">
          Quando chegamos ao fim de um projeto, não se trata apenas de "terminar o conteúdo". A culminância é o momento em que paramos para olhar para trás e pensar: <strong>o que fizemos juntos? O que aprendemos? O que queremos mostrar para os outros?</strong> Ela funciona como uma síntese, um encerramento com sentido, e ajuda os estudantes a enxergar o percurso que fizeram.
        </p>
        <p className="text-slate-700 dark:text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed">
          Mais do que apresentar um produto pronto, a culminância é uma oportunidade de <strong>compartilhar o processo vivido</strong>. Isso inclui as descobertas, os desafios, os aprendizados e até o que não deu certo, porque tudo isso faz parte de aprender.
        </p>
      </div>

      {/* Ela serve para + imagem */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="md:col-span-2 space-y-5 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-green-500 to-blue-500 rounded-full" />
            <h3 className={`${titleFont.className} text-2xl font-bold text-slate-700 dark:text-white`}>
              Ela serve para:
            </h3>
          </div>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg min-h-[260px]">
          <Image
            src="/culminancia.jpg"
            alt="Culminância do projeto"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Bloco complementar + imagem */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="relative rounded-xl overflow-hidden shadow-lg min-h-[220px] order-2 md:order-1">
          <Image
            src="/checky.jpg"
            alt="Avaliação do projeto"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="md:col-span-2 flex flex-col justify-center space-y-4 order-1 md:order-2">
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            A culminância <strong>não precisa ser um grande evento</strong> ou envolver toda a escola. Em muitos casos, uma roda de conversa bem conduzida, um mural com reflexões ou uma apresentação simples feita entre as turmas já cumprem bem esse papel.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            Com isso, cada escola pode encontrar sua forma de organizar esse momento. O importante é que ele seja <strong>viável</strong> e tenha <strong>relação com o que foi construído</strong> com a turma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvaIntro;
