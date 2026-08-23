"use client";
import { useEffect, useRef, useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const exemplos = [
  {
    value: 'item-1',
    num: 1,
    numBg: 'bg-blue-500',
    title: 'Feira do consumo consciente',
    titleColor: 'text-blue-700 dark:text-blue-400',
    img: '/sustentabilidade.jpg',
    intro: 'Professores organizaram com os estudantes uma feira com estandes temáticos sobre consumo, publicidade e sustentabilidade. Cada grupo apresentou:',
    bullets: ['um problema pesquisado (ex: consumismo na moda),', 'os dados que levantaram,', 'e uma proposta de solução ou conscientização.'],
    bulletColor: 'text-blue-600 dark:text-blue-400',
    bulletBg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-800',
    reflexBg: 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 border-blue-200 dark:border-slate-700',
    reflexTitle: 'text-indigo-800 dark:text-indigo-300',
    subBorder: 'border-indigo-100 dark:border-indigo-900',
    subTitle: 'text-indigo-700 dark:text-indigo-400',
    quoteColor: 'border-green-500',
    quoteBg: 'bg-green-50 dark:bg-green-950/30',
    subetapas: [
      {
        titulo: '1.1. Roda de conversa:',
        intro: 'Em sala de aula, os professores conduziram uma roda de conversa com perguntas disparadoras como:',
        perguntas: [
          '– O que mais te surpreendeu durante a preparação da feira?',
          '– Que tipo de dúvida ou comentário os visitantes trouxeram?',
          '– Você mudou de opinião sobre algum tema após ver o estande de outro grupo?',
        ],
        nota: 'Essa roda favorece a escuta ativa, a valorização do protagonismo dos colegas e o exercício da argumentação.',
      },
      {
        titulo: '1.2. Produção escrita individual ou em dupla:',
        intro: 'Depois, os alunos foram convidados a escrever um breve texto reflexivo com base em perguntas orientadoras, como:',
        perguntas: [
          '– Qual foi sua maior dificuldade e maior aprendizado nesse processo?',
          '– O que faria diferente se fosse repetir essa atividade?',
          '– De que forma essa pesquisa se conecta com sua vida cotidiana?',
        ],
        nota: 'Essa escrita pode assumir o formato de relato de experiência, carta aberta ou parágrafo reflexivo.',
      },
      {
        titulo: '1.3. Socialização e síntese coletiva:',
        texto: 'Após a produção individual, a turma pôde montar um painel/mural com trechos dos textos, frases de impacto ou destaques das rodas de conversa — uma etapa crucial que ajudou os alunos a reconhecerem padrões de pensamento e fortalece a ideia de construção conjunta do conhecimento.',
      },
    ],
    quote: 'Criou um espaço de troca entre estudantes e visitantes que valorizou o processo de aprendizagem e incentivou a escuta ativa, a oralidade e o senso de responsabilidade coletiva.',
  },
  {
    value: 'item-2',
    num: 2,
    numBg: 'bg-green-500',
    title: 'Exposição de cartazes e infográficos',
    titleColor: 'text-green-700 dark:text-green-400',
    img: '/cartazes.png',
    intro: 'Algumas turmas montaram uma exposição com cartazes feitos em grupo sobre temas como:',
    bullets: ['propaganda infantil,', 'diferença entre desejo e necessidade,', 'impactos do endividamento.'],
    bulletColor: 'text-green-600 dark:text-green-400',
    bulletBg: 'bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-800',
    extraText: 'A mostra ficou aberta na escola por uma semana, e cada grupo ficou responsável por apresentar seu tema para os visitantes durante um recreio.',
    reflexBg: 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 border-green-200 dark:border-slate-700',
    reflexTitle: 'text-emerald-800 dark:text-emerald-300',
    subBorder: 'border-emerald-100 dark:border-emerald-900',
    subTitle: 'text-emerald-700 dark:text-emerald-400',
    quoteColor: 'border-green-500',
    quoteBg: 'bg-green-50 dark:bg-green-950/30',
    subetapas: [
      {
        titulo: '2.1. Roda de conversa:',
        intro: 'As turmas participaram de uma roda de conversa mediada pelos professores, com perguntas disparadoras como:',
        perguntas: [
          '– O que mais chamou sua atenção enquanto pesquisavam e montavam o cartaz?',
          '– Foi difícil explicar o tema para os colegas?',
          '– Vocês perceberam interesse ou curiosidade por parte de quem passou pela exposição?',
          '– O que fariam diferente em uma próxima vez?',
        ],
      },
      {
        titulo: '2.2. Registro escrito individual ou coletivo:',
        intro: 'Após a roda de conversa, os estudantes realizaram registros escritos. Cada turma optou por formatos diferentes, como:',
        perguntas: [
          '– relatos individuais sobre o que aprenderam e como se sentiram ao participar da mostra;',
          '– autoavaliações em grupo, refletindo sobre a colaboração entre os colegas;',
          '– ou textos opinativos avaliando o impacto da ação na escola.',
        ],
        nota: 'Esses registros serviram tanto como instrumento de avaliação quanto como forma de os alunos se apropriarem do percurso vivido, reconhecendo a importância de discutir temas sociais de maneira crítica e criativa dentro da escola.',
      },
    ],
    quote: 'Favoreceu a organização das ideias e a comunicação visual, ao exigir que os alunos selecionassem, sintetizassem e explicassem os conteúdos de forma acessível e coerente.',
  },
  {
    value: 'item-3',
    num: 3,
    numBg: 'bg-violet-500',
    title: 'Roda de conversa com a comunidade escolar',
    titleColor: 'text-violet-700 dark:text-violet-400',
    img: '/dialogo.png',
    intro: 'Alguns professores convidaram os familiares dos estudantes para uma roda de conversa onde cada aluno compartilhou:',
    bullets: ['algo que aprendeu;', 'como isso mudou seus hábitos em casa;', 'o que ainda tem dúvidas sobre o tema.'],
    bulletColor: 'text-violet-600 dark:text-violet-400',
    bulletBg: 'bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-800',
    quoteColor: 'border-violet-500',
    quoteBg: 'bg-violet-50 dark:bg-violet-950/30',
    quote: 'Fortaleceu o vínculo entre família e escola, ao abrir espaço para diálogo, acolhimento e reflexão conjunta sobre práticas de consumo no cotidiano.',
  },
  {
    value: 'item-4',
    num: 4,
    numBg: 'bg-orange-500',
    title: 'Simulação de escolhas financeiras',
    titleColor: 'text-orange-700 dark:text-orange-400',
    img: '/simula.png',
    intro: 'Em uma escola rural, a culminância foi a realização de uma simulação prática. Cada grupo recebeu um "orçamento" fictício e precisou tomar decisões com base em uma planilha. Depois, apresentaram:',
    bullets: ['o que escolheram priorizar;', 'em qual parte tiveram dificuldade;', 'e como equilibraram os desejos e as necessidades.'],
    bulletColor: 'text-orange-600 dark:text-orange-400',
    bulletBg: 'bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-800',
    reflexBg: 'bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-800 border-orange-200 dark:border-slate-700',
    reflexTitle: 'text-red-800 dark:text-red-300',
    subBorder: 'border-red-100 dark:border-red-900',
    subTitle: 'text-red-700 dark:text-red-400',
    quoteColor: 'border-orange-500',
    quoteBg: 'bg-orange-50 dark:bg-orange-950/30',
    subetapas: [
      {
        perguntas: [
          '– Quais escolhas foram mais difíceis de tomar?',
          '– Em algum momento o grupo discordou sobre o que era mais importante? Como resolveram?',
          '– Se pudessem refazer as escolhas, mudariam alguma coisa? Por quê?',
          '– O que essa atividade nos ensinou sobre a diferença entre desejo e necessidade?',
        ],
        intro: 'Após a simulação, o professor conduziu uma roda de conversa com perguntas orientadoras:',
        nota: 'A discussão permitiu que os estudantes percebessem os impactos de suas decisões, identificassem padrões de consumo e reconhecessem a importância do planejamento financeiro.',
      },
    ],
    quote: 'Permitiu que os estudantes colocassem em prática conhecimentos discutidos em sala, exercitando o pensamento crítico diante de situações reais de decisão.',
  },
];

const contentVariants = {
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

const CulmExemplos = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [openItem, setOpenItem] = useState(null);

  const toggle = (value) => setOpenItem(prev => prev === value ? null : value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('exemplos-praticos');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="exemplos-praticos" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      <div className="text-center">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-white`}>
          Exemplos práticos
        </h2>
      </div>

      <div className="w-full space-y-3">
        {exemplos.map(({ value, num, numBg, title, titleColor, img, intro, bullets, bulletColor, bulletBg, extraText, reflexBg, reflexTitle, subBorder, subTitle, subetapas, quoteColor, quoteBg, quote }) => {
          const isOpen = openItem === value;
          return (
            <div key={value} className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 overflow-hidden">

              {/* Trigger */}
              <button
                onClick={() => toggle(value)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 ${numBg} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>{num}</div>
                  <span className={`${titleFont.className} text-lg font-bold ${titleColor}`}>{title}</span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="flex-shrink-0 text-slate-400 dark:text-slate-500"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Animated content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={contentVariants}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-6 space-y-5 pt-1">

                      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow">
                        <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
                      </div>

                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{intro}</p>

                      <div className={`rounded-xl p-4 border space-y-2 ${bulletBg}`}>
                        {bullets.map((b) => (
                          <div key={b} className="flex items-start gap-2">
                            <span className={`font-bold mt-0.5 ${bulletColor}`}>•</span>
                            <p className="text-slate-700 dark:text-slate-300">{b}</p>
                          </div>
                        ))}
                      </div>

                      {extraText && <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{extraText}</p>}

                      {subetapas && (
                        <div className={`rounded-xl border p-5 space-y-4 ${reflexBg}`}>
                          <div className="flex items-center gap-2">
                            <span className="text-xl">🔎</span>
                            <h4 className={`font-bold ${reflexTitle}`}>Etapa reflexiva posterior:</h4>
                          </div>
                          <div className="space-y-3">
                            {subetapas.map((s, i) => (
                              <div key={i} className={`bg-white dark:bg-slate-900/60 rounded-xl p-4 border ${subBorder}`}>
                                {s.titulo && <h5 className={`font-semibold mb-2 ${subTitle}`}>{s.titulo}</h5>}
                                {s.intro && <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">{s.intro}</p>}
                                {s.perguntas && (
                                  <div className="space-y-1">
                                    {s.perguntas.map((p) => (
                                      <p key={p} className="text-slate-700 dark:text-slate-300 text-sm">{p}</p>
                                    ))}
                                  </div>
                                )}
                                {s.texto && <p className="text-slate-700 dark:text-slate-300 text-sm">{s.texto}</p>}
                                {s.nota && <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 italic">{s.nota}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <blockquote className={`border-l-4 ${quoteColor} pl-5 italic text-slate-600 dark:text-slate-400 ${quoteBg} rounded-r-xl p-4`}>
                        <strong className="dark:text-slate-200">Ponto forte:</strong> {quote}
                      </blockquote>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CulmExemplos;
