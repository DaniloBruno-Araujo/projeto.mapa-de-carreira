import "./NavBar.css";
import Icon from "../Icon/Icon";
import { ListIcon, X, LinkedinLogo, GithubLogo, Envelope } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const ScrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For a smooth scrolling animation
    });
    setMenuAberto(!menuAberto);
  };

  const ScrollToAboutMe = () => {
    window.scrollTo({
      top: 948,
      behavior: "smooth", // For a smooth scrolling animation
    });
    setMenuAberto(!menuAberto);
  };

  const ScrollToRoadMap = () => {
    window.scrollTo({
      top: 1894,
      behavior: "smooth", // For a smooth scrolling animation
    });
    setMenuAberto(!menuAberto);
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const IconSwitch = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  };

  return (
    <header>
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3 },
              filter: "none",
            }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
          >
            <nav className="menu-opcoes">
              <a href="#inicio" onClick={ScrollToHome}>
                Início
              </a>
              <a href="#sobre" onClick={ScrollToAboutMe}>
                Sobre mim
              </a>
              <a href="#projetos" onClick={ScrollToRoadMap}>
                Mapa de Carreira
              </a>

              <div className="socialIcons">
                <a href="https://www.linkedin.com/in/danilobrunodearaujo/" target="_blank">
                  <LinkedinLogo size={48} color="#ffffff" weight="fill" />
                </a>
                <a href="https://github.com/DaniloBruno-Araujo" target="_blank">
                  <GithubLogo size={48} color="#ffffff" weight="fill" />
                </a>
                <a href="mailto:danilobruno.araujo@outlook.com" target="_blank">
                  <Envelope size={48} color="#ffffff" weight="fill" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <Icon />
      <div className="name">
        <h3>Danilo "Dan" Bruno de Araujo</h3>
        <p>Desenvolvedor Web Python</p>
      </div>

      <motion.div className="menuIcon">
        <AnimatePresence>
          {menuAberto ? (
            <motion.span key={"x"} {...IconSwitch}>
              <X
                size={48}
                color="#ffffff"
                weight="bold"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              />
            </motion.span>
          ) : (
            <motion.span key={"Menu"} {...IconSwitch}>
              <ListIcon
                size={48}
                color="#fff"
                weight="bold"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

export default NavBar;
