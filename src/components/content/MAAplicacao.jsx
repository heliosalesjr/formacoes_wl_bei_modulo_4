"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from "next/image";
import { titleFont } from '@/lib/fonts';

const MAApplicacao = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('ma-aplicacao');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="ma-aplicacao" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      {/* Título */}
      <div className="text-center space-y-4">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold text-slate-700 dark:text-white`}>
          Como aplicar a autoavaliação?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
          A autoavaliação pode acontecer de diferentes formas, e a escolha vai depender do <strong>tempo disponível</strong>, da <strong>maturidade da turma</strong> e da <strong>cultura de avaliação</strong> já construída. Abaixo, listamos algumas formas possíveis de conduzir esse momento:
        </p>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-3">

        <AccordionItem value="item-1" className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline dark:text-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <span className={`${titleFont.className} text-lg font-bold text-blue-700 dark:text-blue-400`}>Roda de conversa</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 space-y-4">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Uma opção simples é abrir um espaço de conversa com a turma, em que cada estudante possa falar um pouco sobre sua experiência.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/40 rounded-xl p-4 border border-blue-100 dark:border-blue-800 space-y-2">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Algumas perguntas que podem ajudar:</h4>
              {['Qual foi a sua principal contribuição para o projeto?', 'Se tivesse mais tempo, o que você faria diferente?'].map((q) => (
                <div key={q} className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">–</span>
                  <p className="text-slate-700 dark:text-slate-300">{q}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline dark:text-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <span className={`${titleFont.className} text-lg font-bold text-green-700 dark:text-green-400`}>Formulário com perguntas abertas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 space-y-4">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Se preferir um momento mais individual e silencioso, pode propor que os estudantes respondam por escrito, no caderno ou em uma folha.
            </p>
            <div className="bg-green-50 dark:bg-green-950/40 rounded-xl p-4 border border-green-100 dark:border-green-800 space-y-2">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Perguntas que ajudam nessa reflexão:</h4>
              {['O que você aprendeu com este projeto?', 'O que achou mais difícil?', 'Como se organizou para cumprir as tarefas?', 'Como foi trabalhar em grupo?'].map((q) => (
                <div key={q} className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">–</span>
                  <p className="text-slate-700 dark:text-slate-300">{q}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline dark:text-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <span className={`${titleFont.className} text-lg font-bold text-violet-700 dark:text-violet-400`}>Quadro de metacognição</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 space-y-4">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Essa é uma ferramenta visual simples: os estudantes preenchem uma folha dividida em três colunas.
            </p>
            <div className="w-full rounded-xl overflow-hidden border border-violet-100 dark:border-violet-900 shadow">
              <Image
                src="/folha.png"
                alt="Folha de reflexão"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              É uma forma direta de incentivar a <strong>autorreflexão</strong>, principalmente com turmas mais jovens.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline dark:text-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
              <span className={`${titleFont.className} text-lg font-bold text-orange-700 dark:text-orange-400`}>Escala avaliativa</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 space-y-4">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Outra possibilidade é montar uma escala de 1 a 4 para que os estudantes avaliem a si mesmos em alguns aspectos combinados previamente:
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/40 rounded-xl p-4 border border-orange-100 dark:border-orange-800 space-y-2">
              {['Participação nas atividades', 'Organização', 'Colaboração com o grupo', 'Clareza ao apresentar o que aprendeu'].map((item, i) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5">{i + 1} —</span>
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Depois da escala, vale pedir que escrevam brevemente o motivo de suas escolhas.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline dark:text-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
              <span className={`${titleFont.className} text-lg font-bold text-pink-700 dark:text-pink-400`}>Para Refletir</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 space-y-4">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              E você? Ao longo de seus estudos e sua carreira, cremos que já realizou ou participou de momentos de culminância que foram significativos, mesmo que não tivessem esse nome. Que tal relembrar esses momentos, pensar em o que funcionou bem, o que você acha que poderia ser melhor, e assim se inspirar para organizar o momento com a turma que trabalha atualmente?
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Rodapé */}
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 p-5 text-center">
          <p className="text-slate-700 dark:text-slate-300">
            <span className="font-semibold">Veja um modelo de autoavaliação</span>{' '}
            <a href="https://docs.google.com/spreadsheets/d/1MiURYq-POgLMpV0m1FziWequAOgn8HHyyAvb_upzepQ/copy" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">clicando aqui!</a>
          </p>
        </div>
        <blockquote className="border-l-4 border-green-500 pl-6 italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-r-xl p-4">
          <strong className="dark:text-slate-200">Essas práticas não precisam ser usadas todas de uma vez.</strong> O mais importante é criar um ambiente em que o estudante possa parar, pensar e se perceber no processo.
        </blockquote>
      </div>
    </div>
  );
};

export default MAApplicacao;
