"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const data = {
      nome: e.target.nome.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
      contact_method: e.target.contact_method.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Errore nell'invio del messaggio.");

      setStatus("Grazie per averci contattato! Ti risponderemo presto.");
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center   px-6 lg:px-8 ">
      
      {/* Title Section */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-center lg:pr-24 lg:mb-0">
        <h2 className="text-7xl my-10 lg:text-8xl font-cocoBold text-gray-900 text-center lg:text-right">
          Contatti
        </h2>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white/80 p-8 rounded-3xl shadow-lg">
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col space-y-6 ${submitted ? "hidden" : "block"}`}
        >
          <div>
            <label className="block text-gray-800 text-lg font-cocoBold">Nome e Cognome</label>
            <input
              type="text"
              name="nome"
              required
              className="w-full border-b font-cocoLight border-gray-400 focus:outline-none focus:border-black bg-transparent p-2 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-lg font-cocoBold">Telefono</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border-b font-cocoLight border-gray-400 focus:outline-none focus:border-black bg-transparent p-2 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-lg font-cocoBold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full font-cocoLight border-b border-gray-400 focus:outline-none focus:border-black bg-transparent p-2 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-lg font-cocoBold">Messaggio</label>
            <textarea
              name="message"
              required
              className="w-full border-b font-cocoLight border-gray-400 focus:outline-none focus:border-black bg-transparent p-2 h-24 resize-none text-gray-800"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-800 text-lg py-4 font-cocoBold">Preferenze di contatto:</label>
            <div className="flex space-x-4">
              <label className="flex text-gray-800 font-cocoLight items-center space-x-2">
                <input type="radio" name="contact_method" value="email" defaultChecked />
                <span>Email</span>
              </label>
              <label className="flex text-gray-800  font-cocoLight items-center space-x-2">
                <input type="radio" name="contact_method" value="telefono" />
                <span>Telefono</span>
              </label>
            </div>
          </div>
          <div className=" border-gray-400 pt-4">
            <button
              type="submit"
              className="text-[#db0a6c] text-lg font-cocoBold uppercase tracking-wide w-full py-3 text-center border-2 rounded-full hover-btn transition-all"
            >
              Invia
            </button>
          </div>
        </form>

        {submitted && (
          <div className="text-center">
            <p className="text-2xl font-cocoLight">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;