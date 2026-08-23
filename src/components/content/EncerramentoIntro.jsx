"use client";
import { useState, useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const referencias = [
  {
    autores: 'BACICH, L; MORAN, J.',
    texto: '(Org.) Metodologias ativas para uma educação inovadora: uma abordagem teórico-prática. Porto Alegre: Penso, 2018.',
  },
  {
    autores: 'BENDER, W., N.',
    texto: 'Aprendizagem Baseada em Projetos. Porto Alegre: Penso, 2015.',
  },
  {
    autores: 'BRASIL.',
    texto: 'Ministério da Educação. Base Nacional Comum Curricular. Brasília, 2018.',
  },
  {
    autores: 'MOÇO, Anderson.',
    texto: '14 Perguntas e Respostas sobre Projetos Didáticos. Nova Escola, 2011.',
    link: 'https://novaescola.org.br/conteudo/424/14-perguntas-e-respostas-sobre-projetos-didaticos',
  },
  {
    autores: 'NAOMI, Aline.',
    texto: 'Aprendizagem Baseada em Projetos: entenda o que é e como funciona na prática. Nova Escola, 2021.',
    link: 'https://novaescola.org.br/conteudo/20407/aprendizagem-baseada-em-projetos-entenda-o-que-e-e-como-funciona-na-pratica',
  },
];

const EncerramentoIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('encerramento-intro');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="encerramento-intro" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 md:p-10 shadow-2xl space-y-8 text-center">

      <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-white`}>
        Finalizando o Módulo 4
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        <strong>Chegamos ao final do Módulo 4</strong> e, com ele, encerramos esta jornada formativa dedicada ao programa Aprendendo a Lidar com Dinheiro. Ao longo dos módulos, <strong>exploramos como o trabalho por projetos pode transformar o cotidiano da sala de aula</strong>, aproximando a aprendizagem da realidade dos estudantes. Neste último módulo, <strong>refletimos sobre os momentos de avaliação, culminância e continuidade</strong>, etapas que ajudam a reconhecer e valorizar o percurso vivido.
      </p>

      {/* Vídeo */}
      <div className="relative w-full pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/6QVRbZvtHfw"
          title="Encerramento Módulo 4"
          allowFullScreen
        />
      </div>

      {/* Referências */}
      <div className="text-left max-w-3xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors rounded-xl px-6 py-4 shadow border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold"
        >
          Acesse aqui as Referências Gerais de nosso conteúdo
          {isOpen ? <FaChevronUp className="text-slate-600 dark:text-slate-400 flex-shrink-0" /> : <FaChevronDown className="text-slate-600 dark:text-slate-400 flex-shrink-0" />}
        </button>

        {isOpen && (
          <div className="bg-white dark:bg-slate-800 border border-t-0 border-slate-200 dark:border-slate-700 rounded-b-xl px-6 py-5 space-y-4 text-sm text-slate-700 dark:text-slate-300">
            {referencias.map(({ autores, texto, link }) => (
              <p key={autores}>
                <strong className="dark:text-slate-200">{autores}</strong> {texto}
                {link && (
                  <> Disponível em: <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">{link}</a></>
                )}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EncerramentoIntro;
