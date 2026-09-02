"use client";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/SidebarContext";
import { titleFont } from "@/lib/fonts";

const perguntas = [
  {
    id: 1,
    enunciado: "Qual das opções abaixo descreve melhor o conceito de culminância em um projeto pedagógico?",
    opcoes: [
      "A) Um evento final com apresentações dos alunos para a comunidade",
      "B) Um momento isolado para encerrar o projeto com festa",
      "C) Uma etapa que integra apresentação, sistematização e reflexão sobre a experiência vivida",
      "D) Um produto final obrigatório para avaliação do desempenho",
    ],
    correta: 2,
    feedbacks: [
      "Incorreto. Embora possa envolver apresentações para a comunidade, a culminância é mais ampla que apenas um evento final.",
      "Incorreto. A culminância não é um momento isolado ou meramente festivo, mas sim um processo integrado.",
      "Exato! A culminância é uma etapa que integra apresentação, sistematização e reflexão sobre toda a experiência vivida no projeto.",
      "Incorreto. A culminância vai além de um produto final para avaliação, envolvendo reflexão e sistematização da experiência.",
    ],
  },
  {
    id: 2,
    enunciado: "O que caracteriza uma culminância significativa?",
    opcoes: [
      "A) Ter pais e gestores presentes no dia da apresentação",
      "B) Proporcionar que os estudantes reflitam sobre o que aprenderam e como aprenderam",
      "C) Usar materiais caros e apresentações elaboradas",
      "D) Avaliar o desempenho por meio de provas objetivas",
    ],
    correta: 1,
    feedbacks: [
      "Embora a presença de familiares seja importante, não é isso que caracteriza uma culminância significativa.",
      "Perfeito! Uma culminância significativa proporciona reflexão metacognitiva sobre o processo de aprendizagem.",
      "Incorreto. O valor da culminância não está nos recursos materiais, mas no processo de reflexão.",
      "Incorreto. Provas objetivas não caracterizam uma culminância significativa, que prioriza a reflexão sobre o processo.",
    ],
  },
  {
    id: 3,
    enunciado: "Durante a culminância, por que é importante envolver os próprios alunos nos registros do processo?",
    opcoes: [
      "A) Para garantir evidências visuais para a coordenação pedagógica",
      "B) Para substituir a avaliação escrita ao final do projeto",
      "C) Para fortalecer o protagonismo e incentivar a autorreflexão sobre a aprendizagem",
      "D) Para cumprir exigências burocráticas da escola",
    ],
    correta: 2,
    feedbacks: [
      "Embora possa gerar evidências, não é esse o objetivo principal do envolvimento dos alunos nos registros.",
      "Incorreto. O registro dos alunos não substitui outras formas de avaliação, mas as complementa.",
      "Correto! Envolver os alunos nos registros fortalece seu protagonismo e desenvolve a capacidade de autorreflexão.",
      "Incorreto. O objetivo não é burocrático, mas pedagógico, visando o desenvolvimento da autonomia dos estudantes.",
    ],
  },
  {
    id: 4,
    enunciado: "Entre os exemplos práticos a seguir, qual representa uma culminância que favorece reflexão e vínculo com a comunidade?",
    opcoes: [
      "A) Roda de conversa com especialistas da área",
      "B) Feira com jogos e comidas típicas",
      "C) Roda de conversa com familiares, em que os alunos compartilham o que aprenderam e como isso impactou suas vidas",
      "D) Entrega de certificados de participação",
    ],
    correta: 2,
    feedbacks: [
      "Embora seja enriquecedor, uma roda com especialistas não necessariamente favorece o vínculo com a comunidade familiar.",
      "Uma feira pode ser interessante, mas não necessariamente promove reflexão sobre a aprendizagem.",
      "Excelente! Esta modalidade combina reflexão sobre a aprendizagem com fortalecimento dos vínculos familiares e comunitários.",
      "A entrega de certificados é formal, mas não promove reflexão nem fortalece vínculos significativos.",
    ],
  },
  {
    id: 5,
    enunciado: "Qual recurso digital é geralmente sugerido para registros colaborativos ao longo do projeto?",
    opcoes: [
      "A) Canva",
      "B) Google Forms",
      "C) Padlet",
      "D) Scrumblr",
    ],
    correta: 2,
    feedbacks: [
      "O Canva é excelente para design gráfico, mas não é a ferramenta mais indicada para registros colaborativos.",
      "O Google Forms é útil para questionários, mas não é ideal para registros colaborativos ao longo do projeto.",
      "Correto! O Padlet é uma ferramenta ideal para registros colaborativos, funcionando como um mural digital interativo.",
      "Embora o Scrumblr seja colaborativo, o Padlet é mais amplamente sugerido para registros de projetos educacionais.",
    ],
  },
  {
    id: 6,
    enunciado: "A culminância precisa ser um evento formal e complexo?",
    opcoes: [
      "A) Sim, pois deve envolver toda a escola e comunidade externa",
      "B) Não, pode ser simples, desde que envolva sentido para os alunos e reflexão sobre o processo vivido",
      "C) Sim, para garantir que todos os estudantes sejam avaliados igualmente",
      "D) Não, mas deve ter caráter avaliativo exclusivamente somativo",
    ],
    correta: 1,
    feedbacks: [
      "Incorreto. A culminância não precisa ser formal ou envolver necessariamente toda a escola e comunidade externa.",
      "Perfeito! A culminância pode ser simples, o importante é que tenha significado para os alunos e promova reflexão.",
      "Incorreto. A formalidade e complexidade não garantem avaliação mais adequada ou igualitária.",
      "Incorreto. A culminância não deve ter caráter exclusivamente somativo, mas sim reflexivo sobre todo o processo.",
    ],
  },
];

export default function EncerramentoQuiz() {
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();
  const [respostas, setRespostas] = useState({});
  const [feedback, setFeedback] = useState({ open: false, perguntaId: null, mensagem: "", correta: false });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed("encerramento-quiz");
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const handleResposta = (perguntaIndex, opcaoIndex) => {
    const pergunta = perguntas[perguntaIndex];
    if (respostas[pergunta.id] === pergunta.correta) return;
    const correta = opcaoIndex === pergunta.correta;
    if (correta) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setRespostas((prev) => ({ ...prev, [pergunta.id]: correta ? opcaoIndex : prev[pergunta.id] }));
    setFeedback({ open: true, perguntaId: pergunta.id, mensagem: pergunta.feedbacks[opcaoIndex], correta });
  };

  const perguntasCorretas = perguntas.filter((p) => respostas[p.id] === p.correta).length;

  return (
    <div ref={ref} id="encerramento-quiz" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      <div className="text-center space-y-3">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Quiz: Culminância e Encerramento
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Para encerrar este módulo, que tal verificar o quanto absorveu do conteúdo? Responda ao quiz para consolidar sua aprendizagem e refletir sobre os principais pontos do módulo.
        </p>
      </div>

      {Object.keys(respostas).length > 0 && (
        <div className="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <p className="text-center text-blue-700 dark:text-blue-300 font-medium">
            Progresso: {perguntasCorretas} de {perguntas.length} perguntas corretas
          </p>
        </div>
      )}

      <div className="space-y-10 text-slate-700 dark:text-slate-300">
        {perguntas.map((pergunta, perguntaIndex) => {
          const respostaUsuario = respostas[pergunta.id];
          const jaAcertou = respostaUsuario === pergunta.correta;

          return (
            <div key={pergunta.id} className="space-y-4">
              <p className="text-lg font-medium dark:text-slate-200">
                <span className="text-blue-600 dark:text-blue-400 font-bold">{pergunta.id}.</span> {pergunta.enunciado}
              </p>
              <div className="space-y-3">
                {pergunta.opcoes.map((opcao, opcaoIndex) => {
                  const selecionada = respostaUsuario === opcaoIndex;
                  const cor = selecionada && opcaoIndex === pergunta.correta
                    ? "bg-green-100 dark:bg-green-900/40 border-green-400 dark:border-green-600 text-green-800 dark:text-green-300 font-semibold"
                    : selecionada && opcaoIndex !== pergunta.correta
                    ? "bg-red-100 dark:bg-red-900/40 border-red-400 dark:border-red-600 text-red-800 dark:text-red-300"
                    : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-600 dark:text-slate-200";

                  return (
                    <button
                      key={opcaoIndex}
                      onClick={() => handleResposta(perguntaIndex, opcaoIndex)}
                      disabled={jaAcertou}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-300 ${cor} ${jaAcertou ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      {opcao}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AlertDialog open={feedback.open}>
        <AlertDialogContent className="max-w-md dark:bg-slate-900 dark:border-slate-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="dark:text-white">
              {feedback.correta ? "✅ Resposta correta!" : "❌ Resposta incorreta"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 dark:text-slate-300 mt-2">
              {feedback.mensagem}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setFeedback({ open: false, perguntaId: null, mensagem: "", correta: false })}>
              Fechar
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
