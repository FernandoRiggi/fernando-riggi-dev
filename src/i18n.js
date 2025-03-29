import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      about_me: "About Me",
      about_text: "I am a passionate Software Engineering student currently pursuing my degree at IFSP, with a strong focus on backend development using Java. I have experience working with databases, APIs, and frameworks such as Spring, and I am eager to apply these skills to build efficient and scalable applications that solve real-world problems. My motivation lies in continuously learning new technologies and improving my problem-solving abilities to overcome challenges more easily",
      BACKEND_DEVELOPER: "Backend Developer",
      get_in_touch: "Get in Touch",
      technologies: "Technologies",
      contact: {
        address: "São Carlos, São Paulo, Brazil",
        email: "fernando_de_riggi@outlook.com"
      }
    }
  },
  pt: {
    translation: {
      about_me: "Sobre Mim",
      about_text: "Sou um estudante apaixonado por Engenharia de Software, atualmente cursando minha graduação no IFSP, com forte foco no desenvolvimento backend usando Java. Tenho experiência com bancos de dados, APIs e frameworks como Spring, e estou ansioso para aplicar essas habilidades na construção de aplicações eficientes e escaláveis que resolvam problemas do mundo real. Minha motivação está em aprender continuamente novas tecnologias e aprimorar minhas habilidades de resolução de problemas para superar desafios com mais facilidade.",
      BACKEND_DEVELOPER: "Desenvolvedor Backend",
      get_in_touch: "Entre em Contato",
      technologies: "Tecnologias",
      contact: {
        address: "São Carlos, São Paulo, Brasil",
        email: "fernando_de_riggi@outlook.com"
      },
      backend_developer: "Desenvolvedor Backend",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", // Idioma padrão
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
