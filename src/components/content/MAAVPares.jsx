"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';

const ferramentas = [
  {
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    from: 'from-indigo-500', to: 'to-purple-500',
    title: 'Padlet',
    desc: 'para escrever e trocar feedbacks de forma anônima ou assinada.',
    border: 'border-indigo-100 dark:border-indigo-900',
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    from: 'from-green-500', to: 'to-emerald-500',
    title: 'Formulário Google',
    desc: 'com escalas + perguntas abertas.',
    border: 'border-green-100 dark:border-green-900',
  },
  {
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    from: 'from-blue-500', to: 'to-cyan-500',
    title: 'Diário de bordo',
    desc: 'com seção específica para autorreflexão e comentários do grupo.',
    border: 'border-blue-100 dark:border-blue-900',
  },
  {
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    from: 'from-teal-500', to: 'to-cyan-500',
    title: 'Entrevistas entre colegas',
    desc: 'guiadas por roteiro simples.',
    border: 'border-teal-100 dark:border-teal-900',
  },
];

const MAAvPares = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('ma-av-pares');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="ma-av-pares" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      {/* Título */}
      <div className="text-center">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-white`}>
          Avaliação entre pares: como fazer?
        </h2>
      </div>

      {/* Intro + imagem */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            A avaliação entre pares é uma <strong>etapa importante</strong> para que os estudantes compreendam o <strong>valor do feedback</strong> como parte do processo de aprendizagem. Ao observar e comentar o trabalho do colega, buscando fazer isso com <strong>respeito e objetividade</strong>, começam a desenvolver a <strong>capacidade de argumentar</strong>, justificar suas observações e <strong>acolher diferentes pontos de vista</strong>.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-5 italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 rounded-r-xl p-4">
            Assim, a prática da avaliação entre pares se torna também um exercício de preparação para os desafios da vida adulta e do mundo do trabalho.
          </blockquote>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg border border-blue-200 dark:border-blue-800 min-h-[280px]">
          <Image
            src="/alunes.jpg"
            alt="Estudantes trabalhando em grupo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-green-500/40" />
        </div>
      </div>

      {/* Ambiente adequado */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 p-6 space-y-4">
        <h3 className={`${titleFont.className} text-xl font-bold text-violet-700 dark:text-violet-400 border-b border-violet-100 dark:border-violet-900 pb-3`}>
          Criando o ambiente adequado
        </h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Para que essa estratégia funcione bem, é importante que a turma já tenha desenvolvido uma <strong>cultura de respeito mútuo</strong>, escuta atenta e confiança. Quando esse ambiente está minimamente estabelecido, os estudantes tendem a acolher melhor os comentários e sugestões dos colegas, percebendo esse momento não como uma crítica, mas como parte do <strong>aprendizado coletivo</strong>.
        </p>
        <div className="bg-violet-50 dark:bg-violet-950/30 rounded-xl p-4 border border-violet-100 dark:border-violet-800">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            No entanto, sabemos que isso não acontece de forma automática. É necessário <strong>orientar os estudantes</strong> sobre qual é a proposta da avaliação entre pares e como ela deve ser conduzida.
          </p>
        </div>
      </div>

      {/* Cuidados */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 p-6 space-y-4">
        <h3 className={`${titleFont.className} text-xl font-bold text-green-700 dark:text-green-400`}>
          Cuidados para garantir um processo produtivo e respeitoso:
        </h3>
        <div className="space-y-3">
          {[
            { color: 'bg-blue-500', text: <><strong>Esclareça o objetivo:</strong> não é julgar, e sim contribuir para o crescimento do colega.</> },
            { color: 'bg-green-500', text: <><strong>Definam juntos os critérios:</strong> como clareza na fala, pontualidade, cooperação e escuta.</> },
            {
              color: 'bg-violet-500',
              text: (
                <div className="space-y-2">
                  <p><strong>Ofereça frases de apoio para guiar a devolutiva com cuidado, como:</strong></p>
                  <div className="ml-4 space-y-1">
                    {['"Achei interessante quando você…"', '"Senti falta de…"', '"Uma sugestão seria…"'].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <span className="text-violet-600 dark:text-violet-400 font-bold">–</span>
                        <p className="text-slate-700 dark:text-slate-300">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },
          ].map(({ color, text }, i) => (
            <div key={i} className="bg-white dark:bg-slate-900/60 rounded-xl p-5 shadow border border-white dark:border-slate-700">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 ${color} rounded-full mt-2 flex-shrink-0`} />
                <div className="text-slate-700 dark:text-slate-300">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exemplo de aplicação */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 p-6 space-y-5">
        <h3 className={`${titleFont.className} text-xl font-bold text-orange-700 dark:text-orange-400 border-b border-orange-100 dark:border-orange-900 pb-3`}>
          Exemplo de aplicação
        </h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Após uma apresentação de grupo, cada estudante pode receber uma ficha simples com três perguntas:
        </p>
        <div className="bg-orange-50 dark:bg-orange-950/30 rounded-xl p-5 border border-orange-100 dark:border-orange-800 space-y-3">
          {['O que o colega fez bem?', 'O que poderia ser aprimorado?', 'De que forma ele(a) contribuiu para o trabalho em grupo?'].map((q, i) => (
            <div key={q} className="bg-white dark:bg-slate-900/60 rounded-xl p-4 shadow border border-orange-200 dark:border-orange-800 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
              <p className="text-slate-700 dark:text-slate-200 font-medium">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ferramentas */}
      <div className="bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 p-6 space-y-5">
        <h3 className={`${titleFont.className} text-2xl font-bold text-blue-600 dark:text-blue-400 text-center`}>
          Ferramentas que podem ajudar:
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {ferramentas.map(({ icon, from, to, title, desc, border }) => (
            <div key={title} className={`bg-white dark:bg-slate-900/60 rounded-xl p-5 shadow border ${border} hover:shadow-md transition-shadow duration-300`}>
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 bg-gradient-to-br ${from} ${to} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${title === 'Padlet' ? 'text-indigo-700 dark:text-indigo-400' : title === 'Formulário Google' ? 'text-green-700 dark:text-green-400' : title === 'Diário de bordo' ? 'text-blue-700 dark:text-blue-400' : 'text-teal-700 dark:text-teal-400'}`}>{title}</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusão */}
      <p className="text-slate-700 dark:text-slate-300 text-center text-lg leading-relaxed pb-2">
        A avaliação entre pares é uma <strong>etapa importante</strong> para que os estudantes compreendam o <strong>valor do feedback</strong> como parte do processo de aprendizagem. Ao observar e comentar o trabalho do colega, buscando fazer isso com <strong>respeito e objetividade</strong>, começam a desenvolver a <strong>capacidade de argumentar</strong>, justificar suas observações e <strong>acolher diferentes pontos de vista</strong>.
      </p>
    </div>
  );
};

export default MAAvPares;
