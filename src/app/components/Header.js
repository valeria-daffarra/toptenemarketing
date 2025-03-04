"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { LuChevronsDown } from "react-icons/lu";


const Header = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="banner" className="flex justify-center items-center h-screen relative">
      <img src="/topten.svg" alt="Top Ten E Marketing" className="h-3/4" />

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[calc(50%+calc(3/8*100vh)+20px)]">
        {showButton && (
          <ScrollLink
            to="servizi"
            smooth={true}
            duration={800} // Adjust duration for smoother scrolling
            offset={-50} // Adjust offset if needed
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 1 },
                y: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
              }}
              className="bg-[#db0a6c] border-2 border-black text-3xl text-white px-10 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
            >
              <LuChevronsDown />
            </motion.button>
          </ScrollLink>
        )}
      </div>
    </div>
  );
};

export default Header;
