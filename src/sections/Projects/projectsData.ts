import qatoolboxDesktop from "../../assets/projects/qatoolbox_desktop.png";
import f1picksMobile from "../../assets/projects/f1picks_mobile.png";
import authApi from "../../assets/projects/auth.png";
import condoMobile from "../../assets/projects/condoconnect_mobile.png";

export const projects = [
  {
    id: 1,
    title: "QA Tool Box - Desktop",
    description:
      "Ferramenta desenvolvida para auxiliar analistas de QA na interação com terminais POS, oferecendo funcionalidades práticas de teste e automação nos modelos N910 (Newland) e GPOS 760 (Gertec). Otimiza o fluxo de validação e garante maior eficiência nas análises.",
    image: qatoolboxDesktop,
    github: "https://github.com/devjoshuadp14",
    technologies: ["Kotlin", "Compose Multiplatform", "POS SDK"],
  },
  {
    id: 2,
    title: "F1 Picks - Mobile",
    description:
      "Aplicativo voltado para fãs de Fórmula 1, onde os usuários fazem palpites e acompanham resultados em tempo real, competindo com amigos e monitorando o desempenho de pilotos durante a temporada.",
    image: f1picksMobile,
    github: "https://github.com/joshuadias06/f1_picks",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "API F1"],
  },
  {
    id: 3,
    title: "Auth API - Backend",
    description:
      "API construída em Java com Spring Boot, utilizando Spring Security e JWT para autenticação e autorização seguras. Inclui endpoints de cadastro e login, validação de tokens e controle de acesso baseado em perfis de usuário.",
    image: authApi,
    github: "https://github.com/joshuadias06/auth-API/tree/main",
    technologies: ["Java", "Spring Boot", "JWT", "H2 Database"],
  },
  {
    id: 4,
    title: "Condo Connect - Mobile",
    description:
      "Plataforma mobile para gestão inteligente de condomínios. Permite agendar áreas comuns, cadastrar moradores e produtos, além de acompanhar o uso dos espaços com dashboards interativos e dados em tempo real.",
    image: condoMobile,
    github: "https://github.com/joshuadias06/condo-connect",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Chart.js"],
  },
];
