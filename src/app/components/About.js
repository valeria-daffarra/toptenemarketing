"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingBlobs from './FloatingBlobs'

function RotatingStamp({ imageSrc }) {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1800]);

  return (
    <motion.img
      src={imageSrc}
      alt="Rotating Stamp"
      className="w-[300px] h-[250px] pointer-events-none"
      style={{ rotate }}
    />
  );
}

export default function About() {
  return (
    <section id="about" className=" relative w-full py-14 min-h-screen ">
      <FloatingBlobs />
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-16 relative">
        
        {/* Chi Siamo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-cocoBold my-10  text-gray-900">Chi Siamo</h2>
            <p className="mt-4 text-lg font-cocoLight text-gray-700">
              Top Ten <span className="text-[#db0a6c]">e</span>Marketing nasce dalla collaborazione di due aziende con un obiettivo comune: aiutare le piccole imprese locali ad attirare più clienti. Fondata nel 2022, Top Ten <span className="text-[#db0a6c]">e</span>Marketing vanta oltre 15 anni di esperienza nel lavorare con aziende di tutte le dimensioni, dalle piccole imprese ai marchi internazionali, operando in diversi settori.
              <br /><br />
              Grazie alla nostra esperienza e al nostro team internazionale con sede in Europa e negli Stati Uniti, comprendiamo le difficoltà nel catturare l'attenzione di clienti sfuggenti in un mondo sempre più frenetico. Il nostro team ha le competenze per trovare quei clienti e indirizzarli verso la tua attività.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <RotatingStamp imageSrc="/stamp-chi-siamo.svg" />
          </div>
        </div>
        
        {/* La Nostra Missione */}
        <div className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-12">
          <div className=" md:w-1/2 text-center md:text-left">
          
            <h2 className="text-5xl font-cocoBold my-10  text-gray-900">La Nostra Missione</h2>
            <p className="mt-4 text-lg font-cocoLight text-gray-700">
              La nostra missione in Top Ten <span className="text-[#db0a6c]">e</span>Marketing è fornire ai proprietari di aziende soluzioni di marketing ad alta crescita, supportate da anni di dati ed esperienza nel settore. Oggi offriamo con orgoglio oltre 20 strumenti di marketing, sia digitali che cartacei, che hanno dimostrato di generare risultati per settori come l’automotive, il fitness, l’odontoiatria e i servizi per la casa, e non solo.
              <br /><br />
              Contattaci per scoprire come i nostri servizi possono aiutarti a far crescere la tua attività.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <RotatingStamp imageSrc="/stamp-la-nostra-missione.svg" />
          </div>
        </div>

      </div>
    </section>
  );
}
