"use client"; 
import { useState, useEffect } from "react";
import classNames from "classnames";
import { Link as LinkScroll } from "react-scroll";
import { Home, Boxes, UserRound, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("banner");

  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <>
      {/* Desktop Navbar - hidden on small/medium screens */}
      <nav
        className={classNames(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-20 bg-white/80 backdrop-blur-md rounded-full shadow-md transition-shadow",
          "hidden lg:block", // Hide on mobile, show on lg screens and up
          "w-[70%] max-w-[900px]",
          { "shadow-lg": scrollPosition > 0 }
        )}
      >
        <div className="flex justify-between items-center w-full h-16 px-6 lg:px-12">
          <div className="font-cocoBold w-full flex justify-evenly items-center uppercase">
            {menuItems.map(({ path, label }) => (
              <LinkScroll
                key={path}
                to={path}
                smooth
                spy
                offset={-80}
                duration={500}
                activeClass="bg-[#db0a6c] text-white"
                onSetActive={() => setActiveSection(path)}
                className="flex justify-evenly items-center cursor-pointer transition px-4 py-2 rounded-full text-gray-800"
              >
                {label}
              </LinkScroll>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu - fixed at the top and centered */}
      <nav className="fixed top-4 left-0 right-0 mx-auto flex justify-center lg:hidden z-20">
        <div className="bg-white/80 backdrop-blur-md rounded-full shadow-md w-[90vw] max-w-[400px] flex justify-around py-3 px-2">
          {menuItems.map(({ path, label, icon: Icon }) => (
            <LinkScroll
              key={path}
              to={path}
              smooth
              spy
              offset={-80}
              duration={500}
              onSetActive={() => setActiveSection(path)}
              className="flex flex-col items-center text-xs transition"
            >
              <div 
                className={classNames(
                  "rounded-full p-1",
                  activeSection === path ? "bg-[#db0a6c]" : ""
                )}
              >
                {activeSection === path ? (
                  <Icon className="w-8 h-8 text-white stroke-[2]" />
                ) : (
                  <Icon className="w-8 h-8 text-[#db0a6c] stroke-[2]" />
                )}
              </div>
              <span 
                className={classNames(
                  "font-cocoBold",
                  activeSection === path ? "text-[#db0a6c]" : "text-gray-800"
                )}
              >
                {label}
              </span>
            </LinkScroll>
          ))}
        </div>
      </nav>
    </>
  );
}

const menuItems = [
  { path: "banner", label: "Home", icon: Home },
  { path: "servizi", label: "Servizi", icon: Boxes },
  { path: "about", label: "Chi Siamo", icon: UserRound },
  { path: "contatti", label: "Contatti", icon: MessageCircle },
];