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
    // 🧠 JAVA (4)
    {
        id: 1,
        title: "Java POO e Estrutura de Dados",
        institution: "Udemy",
        description: "Fundamentos da linguagem Java com foco em POO e estruturas de dados.",
        image: java1,
        category: "java",
    },
    {
        id: 2,
        title: "Spring Boot REST API",
        institution: "FIAP",
        description: "Criação de APIs REST seguras e escaláveis com Spring Boot.",
        image: java2,
        category: "java",
    },
    {
        id: 3,
        title: "Java Avançado",
        institution: "FIAP",
        description: "Abordagem avançada de frameworks e boas práticas em Java.",
        image: java3,
        category: "java",
    },
    {
        id: 4,
        title: "Java Enterprise Edition",
        institution: "FIAP",
        description: "Aplicações corporativas com Java EE e integração de serviços.",
        image: java4,
        category: "java",
    },

    // 💜 KOTLIN (8)
    {
        id: 5,
        title: "Kotlin Essentials",
        institution: "JetBrains Academy",
        description: "Introdução à sintaxe moderna e concisa do Kotlin.",
        image: kotlin1,
        category: "kotlin",
    },
    {
        id: 6,
        title: "Kotlin Multiplatform",
        institution: "JetBrains",
        description: "Desenvolvimento multiplataforma com Kotlin para web, desktop e mobile.",
        image: kotlin2,
        category: "kotlin",
    },
    {
        id: 7,
        title: "Kotlin for Android",
        institution: "Google",
        description: "Criação de aplicativos Android modernos com Kotlin.",
        image: kotlin3,
        category: "kotlin",
    },
    {
        id: 8,
        title: "Kotlin Compose Desktop",
        institution: "JetBrains",
        description: "Criação de interfaces nativas desktop usando Jetpack Compose.",
        image: kotlin4,
        category: "kotlin",
    },
    {
        id: 9,
        title: "Kotlin Coroutines",
        institution: "JetBrains",
        description: "Gerenciamento eficiente de threads e tarefas assíncronas.",
        image: kotlin5,
        category: "kotlin",
    },
    {
        id: 10,
        title: "Kotlin Advanced Patterns",
        institution: "JetBrains",
        description: "Boas práticas e padrões avançados em Kotlin.",
        image: kotlin6,
        category: "kotlin",
    },
    {
        id: 11,
        title: "Clean Architecture with Kotlin",
        institution: "Alura",
        description: "Arquitetura limpa e manutenção eficiente de projetos Kotlin.",
        image: kotlin7,
        category: "kotlin",
    },
    {
        id: 12,
        title: "Compose Animations",
        institution: "JetBrains",
        description: "Técnicas de animação fluida com Jetpack Compose.",
        image: kotlin8,
        category: "kotlin",
    },

    // 🐍 PYTHON (1)
    {
        id: 13,
        title: "Python para Análise de Dados",
        institution: "FIAP",
        description: "Manipulação e visualização de dados com Python e Pandas.",
        image: python1,
        category: "python",
    },

    // 🧪 QA (2)
    {
        id: 14,
        title: "Fundamentos de Testes de Software",
        institution: "Udemy",
        description: "Estratégias de QA com foco em automação e testes funcionais.",
        image: qa1,
        category: "qa",
    },
    {
        id: 15,
        title: "Cypress e Test Automation",
        institution: "Udemy",
        description: "Criação de testes automatizados para aplicações web modernas.",
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
        title: "Frontend Moderno",
        institution: "FIAP",
        description: "Boas práticas e fundamentos do desenvolvimento web moderno.",
        image: web1,
        category: "web",
    },
    {
        id: 18,
        title: "Desenvolvimento com React.js",
        institution: "Udemy",
        description: "Criação de aplicações web escaláveis com React e Hooks.",
        image: web2,
        category: "web",
    },

    // 🧩 GITHUB (1)
    {
        id: 19,
        title: "Versionamento com Git e GitHub",
        institution: "FIAP",
        description: "Fluxos Git e boas práticas de versionamento e colaboração.",
        image: github1,
        category: "github",
    },
    {
        id: 20,
        title: "Soft Skill",
        institution: "FIAP",
        description: "Habilidades interpessoais e de liderança aplicadas à tecnologia.",
        image: soft1,
        category: "softskills",
    },
    {
        id: 21,
        title: "Soft Skill",
        institution: "FIAP",
        description: "Habilidades interpessoais e de liderança aplicadas à tecnologia.",
        image: soft2,
        category: "softskills",
    },
    {
        id: 22,
        title: "Soft Skill",
        institution: "FIAP",
        description: "Habilidades interpessoais e de liderança aplicadas à tecnologia.",
        image: soft3,
        category: "softskills",
    },
    {
        id: 23,
        title: "Soft Skill",
        institution: "FIAP",
        description: "Habilidades interpessoais e de liderança aplicadas à tecnologia.",
        image: soft4,
        category: "softskills",
    },
    {
        id: 24,
        title: "Soft Skill",
        institution: "FIAP",
        description: "Habilidades interpessoais e de liderança aplicadas à tecnologia.",
        image: soft5,
        category: "softskills",
    },
     {
        id: 25,
        title: "Soft Skill",
        institution: "FIAP",
        description: "Habilidades interpessoais e de liderança aplicadas à tecnologia.",
        image: soft6,
        category: "softskills",
    },
    {
        id: 26,
        title: "Soft Skill",
        institution: "FIAP",
        description: "Habilidades interpessoais e de liderança aplicadas à tecnologia.",
        image: soft7,
        category: "softskills",
    },
     {
        id: 27,
        title: "Soft Skill",
        institution: "FIAP",
        description: "Habilidades interpessoais e de liderança aplicadas à tecnologia.",
        image: soft8,
        category: "softskills",
    }
];
