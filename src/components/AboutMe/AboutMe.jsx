import "./AboutMe.css";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function AboutMe() {
  return (
    <section className="sectionS">
      <div className="sectionS-content">
        <div className="contentContainer">
          <img id="bulb" src="./public/bulb.png" alt="" title="Criatividade" />
          <div className="content">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Sobre mim
            </ScrollFloat>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              Meu nome é Danilo Bruno de Araujo, tenho 21 anos e sou um
              entusiasta de tecnologia e do universo 3D. Atualmente, estou em
              formação como Desenvolvedor Web com foco em Python pelo Instituto
              Proa. Minhas experiências anteriores em Suporte Técnico e na área
              Administrativa foram fundamentais para desenvolver competências
              essenciais como comunicação, organização e resolução de problemas.
            </ScrollReveal>
          </div>
        </div>
      </div>
      <img id="bg-About" src="../public/bg-about-me.png" alt="background" />
    </section>
  );
}

export default AboutMe;
