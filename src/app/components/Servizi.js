"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  { name: "Sviluppiamo una strategia", description: "Insieme al proprietario dell'azienda, determiniamo dove andare e soprattutto, come farlo.", image: "/2.png", price: "350€" },
  { name: "Restyling grafico del marchio e logo", description: "Analisi dell'impatto grafico e cromatico. Sviluppiamo il design e il posizionamento per il tuo prodotto o servizio.", image: "/1.png", price: "300€" },
  { name: "Attività di analisi del marketing dell'azienda", description: "Mostriamo i tuoi punti di forza e gli aspetti deboli dei canali di comunicazione sino ad ora utilizzati e ti aiutiamo a raggiungere un nuovo livello.", image: "/6.png", price: "350€" },
  { name: "Creiamo siti web, negozi online, e landing page", description: "Insieme a collaboratori internazionali, utilizziamo i più moderni sofisticati framework, per fornire un prodotto orientato alle vendite.", image: "/5.png", price: "300€" },
  { name: "Lead generation e SEO", description: "Portiamo i clienti da Internet. Impostiamo pubblicità mirata e contestuale per un ottimale posizionamento sui motori di ricerca.", image: "/7.png", price: "150€/mese" },
  { name: "Social media marketing", description: "Ci occupiamo di generare visibilità e interazioni su social media come Facebook, Instagram, TikTok, Youtube. Offriamo una gestione a 360° con creazione di campagne e contenuti.", image: "/12.png", price: "250€/mese" },
  { name: "Marketing offline", description: "Organizziamo eventi dal vivo, produciamo gadget, volantini, biglietti da visita, banner. Ci occupiamo della distribuzione e affissione, in rispetto delle normative.", image: "/3.png", price: "140€" },
  { name: "Creiamo i tuoi contenuti", description: "Copywriting, servizi fotografici, grafiche e design, progettazione e riprese video, una gestione professionale e omogenea per garantire i migliori risultati.", image: "/10.png", price: "200€" },
];


function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -150 : 150 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 border border-gray-300 rounded-lg shadow-md bg-white ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <img src={feature.image} alt={feature.name} className="w-64 h-64 md:w-96 md:h-96 object-contain" />
      
      <div className="flex flex-col text-center w-full">
        <h3 className="text-2xl font-cocoBold text-gray-900">{feature.name}</h3>
        <p className="mt-2 text-lg font-cocoLight text-gray-600">{feature.description}</p>
        
        {/* Price Box - Stays below text without overlap */}
        <div id="price" className="mt-4 self-end px-4 py-2 font-cocoLight rounded-lg">
          A partire da {feature.price}
        </div>
      </div>
    </motion.div>
  );
}


function Servizi() {
  return (
    <div id="servizi" className="w-full py-14 bg-neutral-100 overflow-hidden">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-6xl lg:text-8xl font-cocoBold my-10  text-gray-900">Servizi</h2>
        </div>

        <div className="mt-10 space-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.name} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servizi;