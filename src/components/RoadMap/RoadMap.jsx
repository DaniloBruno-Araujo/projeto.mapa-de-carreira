import "./RoadMap.css";
import Career from "../Career/Career";
import AsideSoftHard from "../AsideSoftHard/AsideSoftHard";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function RoadMap() {
  const mySkills = [
    { name: "HTML", level: 3 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 3 },
    { name: "Python", level: 3 },
    { name: "SQL", level: 3 },
    { name: "Git/Github", level: 3 },
  ];

  const mySkills2 = [
    { name: "React", level: 3 },
    { name: "NextJs", level: 2 },
  ];

  return (
    <section className="sectionS">
      <div className="sectionS-content roadmap">
        <div>
          <div className="roadmap-career">
            <h1>Mapa de Carreira</h1>
            <Career
              title="Estagio Como Desenvolvedor Front-end"
              content="Auxilia na criação da parte visual e interativa de sites e aplicações web. Utilizando tecnologias como HTML, CSS e JavaScript, ele colabora com designers e desenvolvedores para transformar layouts em interfaces funcionais, garantindo uma boa experiência para o usuário em diferentes dispositivos."
              list={[
                "Comunicação Clara",
                "Vontade de Aprender",
                "Resolução de Problemas",
                "Adaptabilidade",
                "Gerenciamento do Tempo",
              ]}
              topics={[
                "TypeScript",
                "JavaScript",
                "React",
                "Angular",
                "Vue.js",
                "GraphQL",
                "Jest/Vitest",
                "Webpack",
                "Sentry",
              ]}
            />

            <Career
              title="Desenvolvedor Front-end Júnior"
              content="Responsável por traduzir layouts (Figma, Sketch) em código HTML, CSS e JavaScript funcional. Colabora com desenvolvedores plenos e seniores para implementar novas features, corrigir bugs e garantir a responsividade e performance das aplicações, aprendendo e aplicando as boas práticas de código do time."
              list={[
                "Comunicação Clara",
                "Resolução de Problemas",
                "Trabalho em Equipe",
                "Atenção aos Detalhes",
                "Proatividade",
                "Vontade de Aprender",
              ]}
              topics={[
                "JavaScript",
                "React",
                "Vue.js",
                "Git",
                "Testes Unitários",
                "APIs",
                "Sass",
                "Styled-Components",
              ]}
            />
            <Career
              title="Desenvolvedor Full-stack Pleno"
              content='Possui autonomia para desenvolver funcionalidades "ponta a ponta" (end-to-end), desde a modelagem do banco de dados até a implementação da interface do usuário. É responsável pela qualidade, performance e integração contínua (CI/CD) de suas entregas, além de participar de decisões técnicas e mentorar desenvolvedores juniores.'
              list={[
                "Autogerenciamento",
                "Resolução de Problemas Complexos",
                "Mentoria",
                "Habilidade de Negociação (técnica)",
                "Comunicação Estratégica",
                "Proatividade",
              ]}
              topics={[
                "TypeScript",
                "Docker",
                "CI/CD",
                "Cloud",
                "SQL",
                "Arquitetura de APIs",
              ]}
            />
            <Career
              title="Desenvolvedor Full-stack Sênior"
              content="Lidera tecnicamente o desenvolvimento de projetos complexos, definindo a arquitetura da solução (front-end, back-end, banco de dados e infra). Garante a escalabilidade, segurança e performance da aplicação. Atua como principal mentor da equipe, define padrões de desenvolvimento e colabora com stakeholders (Gerentes de Produto, Designers)."
              list={[
                "Liderança Técnica",
                "Mentoria Avançada",
                "Visão Estratégica",
                "Arquitetura de Software",
                "Comunicação",
                "Tomada de Decisão",
              ]}
              topics={[
                "Arquitetura de Microsserviços",
                "Design Patterns",
                "Cloud",
                "Observabilidade",
                "Segurança",
                "DevOps",
                "Bancos NoSQL",
              ]}
            />
          </div>
        </div>
        <AsideSoftHard
          title="Linguagem & Ferramentas"
          skills={mySkills}
          topics={[
            "Trello",
            "Design",
            "Flexível",
            "Pacote Office",
            "Trabalho em equipe",
            "Aprendizado contínuo",
          ]}
          title1="Conceitos & bibliotecas"
          skills1={mySkills2}
          ltitle="Idiomas"
          content="Portugues"
          content1="Inglês"
        />
      </div>
    </section>
  );
}

export default RoadMap;
