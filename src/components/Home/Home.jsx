import "./Home.css";
import BlurText from "./BlurText";

function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="sectionS">
      <div className="sectionS-content">
        <div className="contentContainer">
          <div className="content">
            <BlurText
              text="Olá, eu sou o Dan. Prazer em te conhecer!"
              delay={250}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="title"
            />
            <p className="introRoadmap">
                  Este mapa de carreira detalha meus próximos passos para me
                  tornar um profissional altamente qualificado, com o objetivo
                  de aplicar minhas habilidades em projetos que gerem um impacto
                  positivo e significativo.
                </p>
            <div className="btns">
              <a href="../public/DaniloBrunoAraujoCV.pdf" target="_blank" className="btn">Baixe o meu CV</a>
            </div>
          </div>
          <img
            id="eu"
            src="../public/danilo.jpg"
            alt="Eu"
            title="Opa! Eu sou o Danilo."
          />
        </div>
      </div>
      <img id="bgHome" src="../public/bg-home.png" alt="bg" />
    </section>
  );
}

export default Home;
