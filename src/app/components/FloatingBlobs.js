"use client";
import { motion } from "framer-motion";

const FloatingBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#db0a6c] opacity-10 rounded-full"
        initial={{ x: 0, y: 0 }}
        animate={{ x: ["10%", "60%", "30%"], y: ["20%", "70%", "40%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute top-10 left-20 w-[250px] h-[250px] bg-[#df7915] opacity-10 rounded-full"
        initial={{ x: 0, y: 0 }}
        animate={{ x: ["70%", "20%", "50%"], y: ["10%", "60%", "30%"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute top-20 left-40 w-[200px] h-[200px] bg-[#02a9f5] opacity-10 rounded-full"
        initial={{ x: 0, y: 0 }}
        animate={{ x: ["40%", "90%", "20%"], y: ["90%", "40%", "70%"] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      {/* Bottom Right Blobs (Higher on Mobile) */}
      <motion.div
        className="absolute right-0 w-[300px] h-[300px] bg-[#02a9f5] opacity-10 rounded-full bottom-[30%] md:bottom-0"
        initial={{ x: 0, y: 0 }}
        animate={{ x: ["-10%", "-60%", "-30%"], y: ["-20%", "-70%", "-40%"] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute right-20 w-[250px] h-[250px] bg-[#df7915] opacity-10 rounded-full bottom-[25%] md:bottom-10"
        initial={{ x: 0, y: 0 }}
        animate={{ x: ["-70%", "-20%", "-50%"], y: ["-10%", "-60%", "-30%"] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute right-40 w-[200px] h-[200px] bg-[#db0a6c] opacity-10 rounded-full bottom-[30%] md:bottom-20"
        initial={{ x: 0, y: 0 }}
        animate={{ x: ["-30%", "-80%", "-50%"], y: ["-30%", "-50%", "-60%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
    </div>
  );
};

export default FloatingBlobs;

