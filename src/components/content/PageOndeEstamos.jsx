"use client";
import { useEffect, useRef, useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, ClipboardCheck, Users, MessageCircle, Sparkles, ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    id: 'objetivos',
    Icon: Target,
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-50 dark:bg-blue-950/40',
    borderClass: 'border-blue-200 dark:border-blue-700',
    iconBg: 'bg-blue-100 dark:bg-blue-900/60',
    title: 'Revisitar os objetivos lá do começo',
    content: (
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        Vale reler com a turma aquilo que foi planejado no início: <strong>o que a gente queria entender, investigar ou transformar?</strong> Isso ajuda os estudantes a perceberem <strong>o quanto caminharam</strong> e a reconhecer <strong>o que foi construído</strong>, mesmo que parte do projeto tenha mudado de rumo no caminho.
      </p>
    ),
  },
  {
    id: 'autoavaliacao',
    Icon: ClipboardCheck,
    colorClass: 'text-emerald-500',
    bgClass: 'bg-emerald-50 dark:bg-emerald-950/40',
    borderClass: 'border-emerald-200 dark:border-emerald-700',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/60',
    title: 'Fazer uma autoavaliação com sentido',
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Em vez de algo genérico, proponha <strong>perguntas mais diretas</strong>, que façam sentido para a idade e para o grupo. Pode ser no caderno, em um formulário, ou até oralmente:
        </p>
        <ul className="space-y-2 pl-2">
          {['"O que eu aprendi nesse projeto?"', '"Como eu ajudei meu grupo?"', '"Qual foi o meu maior desafio?"'].map((q) => (
            <li key={q} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="italic">{q}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'grupo',
    Icon: Users,
    colorClass: 'text-violet-500',
    bgClass: 'bg-violet-50 dark:bg-violet-950/40',
    borderClass: 'border-violet-200 dark:border-violet-700',
    iconBg: 'bg-violet-100 dark:bg-violet-900/60',
    title: 'Avaliar em grupo também ajuda',
    content: (
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        Estimule que os estudantes conversem sobre como foi trabalhar juntos(as), o que funcionou bem, o que gerou conflitos, como se organizaram. Isso pode acontecer em <strong>rodas de conversa</strong>, em <strong>murais de feedback</strong> ou até por meio de <strong>bilhetes escritos entre colegas</strong>.
      </p>
    ),
  },
  {
    id: 'conversa',
    Icon: MessageCircle,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-50 dark:bg-orange-950/40',
    borderClass: 'border-orange-200 dark:border-orange-700',
    iconBg: 'bg-orange-100 dark:bg-orange-900/60',
    title: 'Promova uma conversa com a turma toda',
    content: (
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        É um bom momento para <strong>escutar o que eles e elas sentiram</strong> ao longo do projeto. Perguntas como <span className="italic">"O que foi mais difícil?"</span>, <span className="italic">"O que surpreendeu?"</span>, <span className="italic">"O que pode melhorar nos próximos projetos?"</span> ajudam a turma a <strong>elaborar o que viveu</strong> — e também trazem <strong>bons insights</strong> para o(a) professor(a).
      </p>
    ),
  },
  {
    id: 'culminancia-final',
    Icon: Sparkles,
    colorClass: 'text-rose-500',
    bgClass: 'bg-rose-50 dark:bg-rose-950/40',
    borderClass: 'border-rose-200 dark:border-rose-700',
    iconBg: 'bg-rose-100 dark:bg-rose-900/60',
    title: 'Organizem uma culminância com cara de fechamento',
    content: (
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        Isso não precisa ser algo grandioso. Pode ser um <strong>mural na escola</strong>, uma <strong>conversa com outra turma</strong>, uma <strong>apresentação breve para os responsáveis</strong> ou um <strong>post no Padlet</strong>. A ideia é <strong>dar visibilidade ao que foi feito</strong> e marcar que aquele processo teve <strong>começo, meio e fim</strong>.
      </p>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function PageOndeEstamos() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [openItem, setOpenItem] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('onde-estamos');
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const toggle = (id) => setOpenItem((prev) => (prev === id ? null : id));

  return (
    <div
      ref={ref}
      id="onde-estamos"
      className="scroll-mt-20 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-5xl"
    >
      {/* ── HERO IMAGE SECTION ── */}
      <div className="relative min-h-[380px] md:min-h-[460px]">
        <Image
          src="/teacho.jpg"
          alt="Onde estamos no projeto"
          fill
          sizes="(max-width: 768px) 100vw, 960px"
          className="object-cover object-center"
          priority
        />

        {/* Full gradient from dark (right) to transparent (left) */}
        <div className="absolute inset-0 bg-gradient-to-l from-slate-900/95 via-slate-900/75 md:via-slate-900/55 to-transparent" />
        {/* Extra bottom fade for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

        {/* Text — occupies right half on desktop, full width on mobile */}
        <div className="absolute inset-0 flex items-center justify-end">
          <motion.div
            className="w-full md:w-1/2 px-8 md:px-10 py-10 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-white leading-snug drop-shadow-lg`}>
              Onde estamos no projeto?
            </h2>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed">
              Ao longo dos módulos anteriores, você organizou seu planejamento, iniciou a aplicação do projeto com os estudantes, acompanhou o andamento das ações e pôde observar como eles foram se envolvendo com os conteúdos e desafios propostos. Agora, neste Módulo 4, entramos em uma nova etapa do processo: é hora de <strong className="text-white">avaliar os resultados do projeto</strong> e organizar a culminância.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── CONTENT SECTION ── */}
      <div className="bg-white dark:bg-slate-900 px-8 py-10 space-y-8">

        {/* Subtitle + intro paragraph */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full" />
            <h3 className={`${titleFont.className} text-2xl md:text-3xl font-bold text-slate-700 dark:text-white`}>
              O que isso significa na prática?
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed pl-4">
            Chegando nessa etapa final, é crucial ter esse <strong>momento de reflexão</strong>, para que a turma tenha esse espaço de <strong>olhar para o que foi feito</strong> e pensar sobre <strong>o que ficou de aprendizado</strong> disso tudo. Algumas <strong>ações simples, mas significativas</strong>, ajudam bastante nesse processo:
          </p>
        </motion.div>

        {/* Accordion items */}
        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {accordionItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`rounded-xl border ${item.borderClass} overflow-hidden transition-shadow duration-300 ${isOpen ? 'shadow-md' : 'hover:shadow-sm'}`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200 ${item.bgClass}`}
                  aria-expanded={isOpen}
                >
                  <span className={`flex-shrink-0 w-9 h-9 rounded-lg ${item.iconBg} flex items-center justify-center`}>
                    <item.Icon className={`w-5 h-5 ${item.colorClass}`} strokeWidth={1.8} />
                  </span>
                  <span className={`flex-1 font-semibold text-slate-700 dark:text-slate-100 text-base md:text-lg`}>
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-5 bg-white dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
