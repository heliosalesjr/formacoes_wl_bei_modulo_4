"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';

const secoes = [
  {
    side: 'right',
    img: '/stu.png',
    imgAlt: 'Estudantes após a culminância',
    titleColor: 'text-blue-700 dark:text-blue-400',
    border: 'border-slate-200 dark:border-slate-700',
    bg: 'bg-white dark:bg-slate-800',
    quoteColor: 'border-blue-500',
    quoteBg: 'bg-blue-50 dark:bg-blue-950/30',
    title: 'O que se faz com o que foi vivido?',
    text: 'Alguns registros podem ser arquivados, mas será que precisam ser esquecidos? Uma roda de conversa com a turma, uma devolutiva pública com a comunidade, uma reinterpretação do projeto em formato de portfólio ou mural permanente na escola… Tudo isso ajuda a tornar os aprendizados mais duradouros, vivos e significativos.',
    quote: 'Mais do que um encerramento, o pós-culminância pode ser um espaço de fortalecimento da autoria dos alunos e da coletividade.',
  },
  {
    side: 'left',
    img: '/grow.png',
    imgAlt: 'Crescimento e continuidade',
    titleColor: 'text-green-700 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    bg: 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800',
    innerBg: 'bg-white dark:bg-slate-900/60 border border-green-100 dark:border-green-900',
    title: 'O que ficou? O que segue? O que reverbera?',
    text: 'É nesse momento que os conteúdos escolares ganham outra espessura: não só o que se aprendeu, mas como se aprendeu. O grupo pode resgatar as habilidades desenvolvidas ao longo do caminho — colaboração, autonomia, escuta, organização — e nomeá-las.',
    inner: 'Ao fazer isso, a turma aprende também a reconhecer seus próprios processos de crescimento.',
  },
  {
    side: 'right',
    img: '/manda.png',
    imgAlt: 'Comunicando o projeto',
    titleColor: 'text-violet-700 dark:text-violet-400',
    border: 'border-slate-200 dark:border-slate-700',
    bg: 'bg-white dark:bg-slate-800',
    innerBg: 'bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900',
    title: 'E como isso chega a outras pessoas?',
    text: 'A comunicação sobre o projeto — com outras turmas, com as famílias, com a comunidade escolar — é mais do que um relatório ou uma postagem: é uma forma de ampliar o impacto do que foi feito.',
    inner: 'Ao compartilhar, a turma reafirma o valor do percurso e contribui para inspirar novas práticas.',
  },
];

const RegistroCulm = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('depois-culminancia');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="depois-culminancia" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-10">

      {/* Título */}
      <div className="text-center space-y-4">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          E depois da culminância?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
          A culminância marca o fim de uma etapa, mas não o fim do projeto. É depois dela que começam outras camadas igualmente importantes: <strong>dar visibilidade ao que foi vivido</strong>, transformar o aprendido em memória e, sobretudo, alimentar novos caminhos a partir da experiência construída.
        </p>
      </div>

      {/* Seções */}
      <div className="space-y-8">
        {secoes.map(({ side, img, imgAlt, titleColor, border, bg, quoteColor, quoteBg, innerBg, title, text, quote, inner }) => {
          const imgEl = (
            <div className="relative w-full min-h-[240px] rounded-xl overflow-hidden shadow-md">
              <Image src={img} alt={imgAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
            </div>
          );
          const textEl = (
            <div className={`rounded-xl border ${border} ${bg} p-6 space-y-4 h-full flex flex-col justify-center`}>
              <h3 className={`${titleFont.className} text-xl font-bold ${titleColor} border-b border-current/20 pb-3`}>
                {title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{text}</p>
              {quote && (
                <blockquote className={`border-l-4 ${quoteColor} pl-5 italic text-slate-600 dark:text-slate-400 ${quoteBg} rounded-r-xl p-4`}>
                  {quote}
                </blockquote>
              )}
              {inner && (
                <div className={`rounded-xl p-4 ${innerBg}`}>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{inner}</p>
                </div>
              )}
            </div>
          );

          return (
            <div key={title} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {side === 'left' ? <>{imgEl}{textEl}</> : <>{textEl}{imgEl}</>}
            </div>
          );
        })}
      </div>

      {/* Conclusão */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-orange-200 dark:border-slate-700 p-8 text-center space-y-3">
        <p className={`${titleFont.className} text-slate-700 dark:text-slate-200 text-xl leading-relaxed italic font-medium`}>
          Ou seja: depois da culminância, vem a continuidade.
        </p>
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
          Não a repetição do que foi feito, mas a <strong>expansão do que foi aprendido</strong>.
        </p>
      </div>
    </div>
  );
};

export default RegistroCulm;
