"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';
import { FaAward, FaBook, FaUsers } from "react-icons/fa";

const etapas = [
  {
    icon: <FaUsers className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
    border: "hover:border-blue-300 dark:hover:border-blue-600",
    titulo: "Diagnóstico Inicial",
    descricao: "Realizamos o diagnóstico inicial da turma, analisando perfis, necessidades e potencialidades"
  },
  {
    icon: <FaBook className="w-8 h-8 text-green-600 dark:text-green-400" />,
    iconBg: "bg-green-50 dark:bg-green-950/50",
    border: "hover:border-green-300 dark:hover:border-green-600",
    titulo: "Monitoramento e Plano de Ação",
    descricao: "Desenvolvemos o monitoramento contínuo das ações e estruturamos o plano de ação com base nas metas estabelecidas"
  },
  {
    icon: <FaAward className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    iconBg: "bg-indigo-50 dark:bg-indigo-950/50",
    border: "hover:border-indigo-300 dark:hover:border-indigo-600",
    titulo: "Avaliação e Culminância",
    descricao: "Abordamos a avaliação e a culminância como momentos fundamentais de síntese, devolutiva e visibilidade das aprendizagens"
  }
];

export default function EncerramentoAdeus() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('encerramento-obrigado');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="encerramento-obrigado" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-12">

      {/* Título Principal */}
      <div className="text-center space-y-4">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white pb-1`}>
          Parabéns por Concluir esta Jornada!
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
          <strong>Chegar até aqui é, por si só, um grande marco</strong>! Ao longo deste percurso, você <strong>revisitou práticas, explorou novas formas de avaliação e vivenciou o potencial da Aprendizagem Baseada em Projetos</strong> para transformar o cotidiano escolar. Cada reflexão, registro e experiência compartilhada contribuiu para fortalecer uma <strong>educação mais significativa, colaborativa e conectada</strong> à realidade dos estudantes.
        </p>
      </div>

      {/* Imagem Inspiracional */}
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/proud.png"
          alt="Educadores em formação"
          fill
          className="object-cover"
        />
      </div>

      {/* Seção com Cards das Etapas */}
      <div className="space-y-8">
        <h3 className={`${titleFont.className} text-2xl md:text-3xl font-bold text-slate-800 dark:text-white text-center`}>
          Percurso
        </h3>

        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
          Nesta formação, <strong>percorremos etapas centrais para a implementação qualificada do projeto</strong>: realizamos o <strong>diagnóstico inicial</strong> da turma, analisando perfis, necessidades e potencialidades; desenvolvemos o <strong>monitoramento contínuo das ações</strong>, acompanhando como os desafios eram vivenciados pelos estudantes; <strong>estruturamos o plano de ação</strong> com base nas metas estabelecidas; utilizamos o <strong>Diário de Bordo</strong> como instrumento de registro e análise; e, por fim, abordamos a <strong>avaliação e a culminância</strong> como momentos fundamentais de síntese, devolutiva e visibilidade das aprendizagens. Cada etapa foi pensada para apoiar o trabalho docente de forma <strong>prática, sistematizada e alinhada às diretrizes pedagógicas da rede</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {etapas.map((etapa, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 ${etapa.border}`}
            >
              <div className="flex justify-center mb-4">
                <div className={`${etapa.iconBg} rounded-full p-4`}>
                  {etapa.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-3">
                {etapa.titulo}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mensagem Final */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-2xl p-8 md:p-10 border-2 border-blue-200 dark:border-blue-800">
        <div className="text-center space-y-6">
          <div className="inline-block bg-blue-600 dark:bg-blue-700 rounded-full p-3">
            <FaAward className="w-12 h-12 text-white" />
          </div>
          <h3 className={`${titleFont.className} text-2xl md:text-3xl font-bold text-slate-800 dark:text-white`}>
            Agradecimento Especial
          </h3>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            A equipe da <span className="font-bold text-blue-700 dark:text-blue-400">BEĨ Educação</span> parabeniza e agradece sua dedicação, sensibilidade e compromisso com a construção de práticas inovadoras. Que os aprendizados deste curso continuem orientando suas decisões pedagógicas e ampliando o impacto do seu trabalho na escola e na vida dos alunos.
          </p>
        </div>
      </div>
    </div>
  );
}
