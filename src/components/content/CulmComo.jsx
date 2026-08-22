"use client";
import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import React from "react";

const CulmComo = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("culminancia-como");
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
    <div
      ref={ref}
      id="culminancia-como"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100 space-y-12"
    >
      {/* Título Principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
            Como organizar?
          </h1>
          
        </div>
      </div>

      {/* Seção 1 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-800">
            1. Escolha um formato possível (e significativo)
          </h2>
        </div>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Você pode optar por algo mais simples, como uma roda de conversa com
            a turma, ou mais aberto, como uma exposição. Alguns exemplos:
          </p>
          <ul className="space-y-2 pl-4 list-disc marker:text-blue-500">
            <li>Apresentação para outras turmas ou para as famílias.</li>
            <li>Mural com fotos, cartazes e textos feitos pelos estudantes.</li>
            <li>Sarau, painel de ideias, roda de perguntas.</li>
            <li>Gravação de vídeos com depoimentos ou simulações.</li>
          </ul>
          <p>
            Não existe uma “forma certa” — o ideal é escolher um formato que
            seja viável no seu contexto e que permita que a turma se reconheça
            no que está apresentando.
          </p>
        </div>
      </div>

      {/* Seção 2 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-800">
            2. Pense no público
          </h2>
        </div>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            É algo só para a turma? Para outras turmas? Para a comunidade
            escolar?
          </p>
          <p>
            Saber quem vai ver ajuda a planejar a linguagem, o espaço e os
            materiais. Uma exposição aberta, por exemplo, exige organização e
            avisos prévios. Já uma apresentação interna pode ser mais simples,
            mas igualmente potente.
          </p>
        </div>
      </div>

      {/* Seção 3 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-800">
            3. Envolva os estudantes no processo
          </h2>
        </div>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Chame os estudantes para pensar junto! Eles podem escolher o que
            será apresentado, preparar os materiais, cuidar da organização do
            espaço, montar o convite… Isso ajuda a reforçar o sentimento de
            autoria e também faz parte da aprendizagem.
          </p>
        </div>
      </div>

      {/* Seção 4 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-800">
            4. Relembre os objetivos do projeto
          </h2>
        </div>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            É interessante retomar, junto com a turma, os objetivos definidos lá
            no começo. Algumas perguntas ajudam nesse fechamento:
          </p>
          <ul className="space-y-2 pl-4 list-disc marker:text-blue-500">
            <li>O que queríamos ter descoberto ou aprendido?</li>
            <li>O que conseguimos alcançar?</li>
            <li>O que ainda ficou em aberto?</li>
            <li>
              Como esse projeto impactou nossa forma de pensar ou agir?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CulmComo;
