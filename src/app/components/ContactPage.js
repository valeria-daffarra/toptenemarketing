"use client";
import dynamic from "next/dynamic";

const NoSSRContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

export default function ContactPage() {
  return (
    <div id="contatti" className="relative w-full min-h-screen py-14">
      {/* Blobs Background */}
      <div className="blobs-container absolute inset-0">
        <div className="gradients-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
        </div>
      </div>

      {/* Contact Form Above the Background */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <NoSSRContactForm />
      </div>
    </div>
  );
}
