export interface Certification {
    id: number;
    title: string;
    institution: string;
    description: string;
    image: string;
    category: "java" | "kotlin" | "python" | "qa" | "web" | "cloud" | "github" | "softskills";
}

import cloud1 from "../../assets/certifications/certificado_cloud_fiap.jpg";
import soft1 from "../../assets/certifications/certificado_cx_fiap.jpg"
import qa1 from "../../assets/certifications/certificado_cypress_udemy.jpg"
import github1 from "../../assets/certifications/certificado_github.jpg"
import java1 from "../../assets/certifications/certificado_java_fiap.jpg"
import java2 from "../../assets/certifications/certificado_java_rocketseat.jpg"
import java3 from "../../assets/certifications/certificado_java_udemy.jpg"
import java4 from "../../assets/certifications/certificado_microservicos_rocketseat.jpg"
import kotlin1 from "../../assets/certifications/certificado_kotlin1.jpg"
import kotlin2 from "../../assets/certifications/certificado_kotlin2.jpg"
import kotlin3 from "../../assets/certifications/certificado_kotlin3.jpg"
import kotlin4 from "../../assets/certifications/certificado_kotlin4.jpg"
import kotlin5 from "../../assets/certifications/certificado_kotlin5.jpg"
import kotlin6 from "../../assets/certifications/certificado_kotlin6.jpg"
import kotlin7 from "../../assets/certifications/certificado_kotlin7.jpg"
import kotlin8 from "../../assets/certifications/certificado_kotlin8.jpg"
import python1 from "../../assets/certifications/certificado_python_huawei.jpg"
import qa2 from "../../assets/certifications/certificado_qa_ebac.jpg"
import soft2 from "../../assets/certifications/certificado_softskills1.jpg"
import soft3 from "../../assets/certifications/certificado_softskills2.jpg"
import soft4 from "../../assets/certifications/certificado_softskills3.jpg"
import soft5 from "../../assets/certifications/certificado_softskills4.jpg"
import soft6 from "../../assets/certifications/certificado_softskills5.jpg"
import soft7 from "../../assets/certifications/certificado_softskills6.jpg"
import soft8 from "../../assets/certifications/certificado_softskills7.jpg"
import web1 from "../../assets/certifications/certificado_web1.png"
import web2 from "../../assets/certifications/certificado_web2.png"



export const certificationsData: Certification[] = [
    {
        id: 1,
        title: "Java Fundamentals - Data Structures",
        institution: "FIAP",
        description: "Fundamentos da linguagem Java com foco em POO e estruturas de dados.",
        image: java1,
        category: "java",
    },
    {
        id: 2,
        title: "Java Completo e POO + Projetos",
        institution: "Udemy",
        description: "Do básico ao avançado em Java com ênfase em POO e boas práticas.",
        image: java3,
        category: "java",
    },
    {
        id: 3,
        title: "Serverless Aplication with Java - AWS S3",
        institution: "Rocketseat",
        description: "Criação de aplicações serverless utilizando Java, Spring Boot e AWS S3.",
        image: java2,
        category: "java",
    },
    {
        id: 4,
        title: "Microservices com Spring Cloud e Docker ",
        institution: "Rocketseat",
        description: "Desenvolvimento de microserviços utilizando Spring Cloud, Docker.",
        image: java4,
        category: "java",
    },
    {
        id: 5,
        title: "Compose: Mantendo estados com ViewModel",
        institution: "Alura",
        description: "Gerenciamento de estados em aplicações Android utilizando ViewModel.",
        image: kotlin1,
        category: "kotlin",
    },
    {
        id: 6,
        title: "Crinado Deep Links e testando o Navigation",
        institution: "Alura",
        description: "Implementação de Deep Links e testes de navegação em apps Android.",
        image: kotlin2,
        category: "kotlin",
    },
    {
        id: 7,
        title: "Armazenamento de Dados Internos",
        institution: "Alura",
        description: "Técnicas para armazenar dados localmente em aplicações Android.",
        image: kotlin3,
        category: "kotlin",
    },
    {
        id: 8,
        title: "Criando um app Android com Compose",
        institution: "Alura",
        description: "Desenvolvimento de aplicações Android modernas utilizando Jetpack Compose.",
        image: kotlin4,
        category: "kotlin",
    },
    {
        id: 9,
        title: "Gerenciamento de estados com Compose",
        institution: "Alura",
        description: "Gerenciamento avançado de formulários e estados em Compose.",
        image: kotlin5,
        category: "kotlin",
    },
    {
        id: 10,
        title: "Navigation com Type-Safety",
        institution: "Alura",
        description: "Navegação segura entre telas utilizando argumentos tipados em Compose.",
        image: kotlin6,
        category: "kotlin",
    },
    {
        id: 11,
        title: "Navegando entre telas com Navigation",
        institution: "Alura",
        description: "Implementação de navegação entre diferentes telas em aplicações Android.",
        image: kotlin7,
        category: "kotlin",
    },
    {
        id: 12,
        title: "Utilizando Lazy Layouts e estados",
        institution: "Alura",
        description: "Criação UI performáticas com Lazy Layouts, e gerenciamento de estados.",
        image: kotlin8,
        category: "kotlin",
    },
    {
        id: 13,
        title: "Python Basic Module",
        institution: "FATEC + Huawei",
        description: "Conceitos básicos de Python, estruturas de dados e programação orientada a objetos.",
        image: python1,
        category: "python",
    },

    {
        id: 14,
        title: "Testes de Aplicações Modernas com Cypress",
        institution: "Udemy",
        description: "Automatização de testes end-to-end para aplicações web utilizando Cypress.",
        image: qa1,
        category: "qa",
    },
    {
        id: 15,
        title: "Jornada de QA: Testes Automatizados",
        institution: "EBAC",
        description: "Jornada completa testes automatizados com foco em qualidade de software.",
        image: qa2,
        category: "qa",
    },

    // ☁️ CLOUD (1)
    {
        id: 16,
        title: "Cloud Fundamentals",
        institution: "FIAP",
        description: "Fundamentos de computação em nuvem e arquitetura de soluções.",
        image: cloud1,
        category: "cloud",
    },

    // 🌐 WEB (2)
    {
        id: 17,
        title: "Firebase, jQuery e Bootstrap",
        institution: "Programador BR",
        description: "Desenvolvimento com foco em front-end utilizando Firebase, jQuery e Bootstrap.",
        image: web1,
        category: "web",
    },
    {
        id: 18,
        title: "Desenvolvimento com HTML, CSS e JavaScript",
        institution: "Programador BR",
        description: "Fundamentos de desenvolvimento web com HTML, CSS e JavaScript.",
        image: web2,
        category: "web",
    },

    // 🧩 GITHUB (1)
    {
        id: 19,
        title: "GitHub Foundations",
        institution: "GitHub",
        description: "Fundamentos do GitHub para controle de versão e colaboração em projetos.",
        image: github1,
        category: "github",
    },
    {
        id: 20,
        title: "Customer Experience Management",
        institution: "FIAP",
        description: "Gerenciamento da experiência do cliente com foco em tecnologia.",
        image: soft1,
        category: "softskills",
    },
    {
        id: 21,
        title: "Comunicação Não Violenta 2",
        institution: "Alura",
        description: "Aprimoramento das habilidades de comunicação no ambiente de trabalho.",
        image: soft2,
        category: "softskills",
    },
    {
        id: 22,
        title: "Aprender a Aprender: Autodesenvolvimento",
        institution: "Alura",
        description: "Técnicas de autodesenvolvimento e aprendizado contínuo para profissionais",
        image: soft3,
        category: "softskills",
    },
    {
        id: 23,
        title: "Design Thinking - Inove e crie soluções efetivas",
        institution: "Alura",
        description: "Metodologias de Design Thinking para inovação e resolução de problemas.",
        image: soft4,
        category: "softskills",
    },
    {
        id: 24,
        title: "Comunicação Não Violenta 1",
        institution: "Alura",
        description: "Aprimoramento das habilidades de comunicação no ambiente de trabalho.",
        image: soft5,
        category: "softskills",
    },
     {
        id: 25,
        title: "Feedback Efetivo no Ambiente de Trabalho",
        institution: "Alura",
        description: "Aprimoramento das habilidades de comunicação no ambiente de trabalho.",
        image: soft6,
        category: "softskills",
    },
    {
        id: 26,
        title: "Produtividade: Melhore seu foco e desempenho",
        institution: "Alura",
        description: "Técnicas para aumentar a produtividade e eficiência no trabalho.",
        image: soft7,
        category: "softskills",
    },
     {
        id: 27,
        title: "Relacionamento Interpessoal",
        institution: "Alura",
        description: "Desenvolvimento de habilidades para o relacionamento interpessoal no trabalho.",
        image: soft8,
        category: "softskills",
    }
];
