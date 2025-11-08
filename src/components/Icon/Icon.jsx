import "./Icon.css";
import React, { useState, useEffect } from "react";
import { CaretUp } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

const SCROLL_THRESHOLD = 500;

function Icon() {
  const [isScrollTopMode, setIsScrollTopMode] = useState(false);

  useEffect(() => {
    const ScrollVerificacao = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsScrollTopMode(true);
      } else {
        setIsScrollTopMode(false);
      }
    };

    window.addEventListener("scroll", ScrollVerificacao);

    return () => {
      window.removeEventListener("scroll", ScrollVerificacao);
    };
  }, []);

  const IconDefault = () => {
    alert("Opa! Desça para me conhecer.");
  };

  const IconSeta = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

  

  const IconAnime = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  return (
    <>
      <motion.button
        className="icon"
        initial={{ scale: 0, }}
        animate={{ scale: 1, borderRadius: isScrollTopMode ? 100 : 10}}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        onClick={isScrollTopMode ? IconSeta : IconDefault}
        
      >
        <AnimatePresence>
          {isScrollTopMode ? (
            <motion.span key={"seta"} {...IconAnime}>
              <CaretUp size={32} weight="fill" />
            </motion.span>
          ) : (
            <motion.span key={"dan"} {...IconAnime}>
              <p>Dan</p>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}

export default Icon;
