"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const images = ['em.png', 'ef1.png', 'ef2.png'];

const PageApresentacao1 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('apresentacao-1');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl mx-auto max-w-5xl">

      {/* TÍTULO + PARÁGRAFOS + CARROSSEL */}
      <div ref={ref} id="apresentacao-1" className="scroll-mt-20 space-y-6">
        <h2 className={`${titleFont.className} text-4xl font-bold text-center bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Apresentação do Curso
        </h2>

        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
          Chegamos à <strong>etapa final do percurso</strong>, e talvez esse seja um bom momento para <strong>refletirmos com mais calma</strong> sobre tudo que foi feito até aqui: os <strong>caminhos percorridos</strong>, os <strong>ajustes no meio do caminho</strong> e, claro, as <strong>descobertas feitas com os estudantes</strong>.
        </p>

        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
          Aqui, conversaremos sobre como <strong>avaliar os resultados dos projetos</strong>. Mas não no sentido de <strong>dar nota</strong> ou encerrar um ciclo com apenas um número. A ideia é outra: pensar em formas de <strong>organizar o que foi aprendido</strong>, de <strong>valorizar os avanços</strong>, mesmo os pequenos, e de escutar como os próprios estudantes enxergam o que viveram. Por isso, vamos apresentar aqui algumas propostas de <strong>autoavaliação</strong> e <strong>avaliação entre pares</strong>, que ajudam a <strong>ampliar o olhar sobre o processo</strong> e a criar <strong>espaços de conversa e escuta</strong>.
        </p>

        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
          Também falaremos sobre <strong>culminância</strong>, que é aquele momento em que tudo se junta: as <strong>ideias</strong>, as <strong>produções</strong>, as <strong>experiências</strong> e as <strong>aprendizagens</strong>.
        </p>

        {/* Carrossel — imagens 1920×615 (≈3:1), container segue a mesma proporção */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ aspectRatio: '1920/615' }}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="w-full h-full"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full" style={{ aspectRatio: '1920/615' }}>
                  <Image
                    src={`/${img}`}
                    alt={`Slide ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 960px"
                    className="object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* BOX DE DESTAQUE */}
      <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 p-px shadow-lg">
        <div className="rounded-2xl bg-white/95 dark:bg-slate-900/95 px-8 py-7 flex gap-5 items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center shadow">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed italic">
            Este último módulo é um convite para <strong>celebrar o percurso</strong> e reconhecer o valor das <strong>experiências vividas</strong> ao longo da formação. Avaliar e culminar não significam apenas concluir, mas <strong>compreender o que foi construído</strong>, identificar os <strong>aprendizados que permanecem</strong> e projetar os <strong>próximos passos</strong>. Que este momento seja de <strong>troca</strong>, de <strong>reconhecimento mútuo</strong> e de <strong>inspiração</strong> para seguir aprimorando a <strong>prática pedagógica</strong> com propósito e significado.
          </p>
        </div>
      </div>

      {/* VÍDEO */}
      <section className='pt-8'>
        <h3 className="text-4xl font-bold text-slate-600 dark:text-white text-center pb-8">
          Vídeo de Apresentação
        </h3>
        <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/42BVLPl0xw8"
            title="Resumo Módulo 1"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default PageApresentacao1;
