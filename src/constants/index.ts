import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  vscode,
  python,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Hakkımda",
  },
  {
    id: "work",
    title: "Deneyim",
  },
  {
    id: "contact",
    title: "İletişim",
  },
];

const services: TService[] = [
  {
    title: "Yazılım Geliştirici",
    icon: web,
  },
  {
    title: "Java Geliştirici",
    icon: mobile,
  },
  {
    title: "Python Geliştirici",
    icon: backend,
  },
  {
    title: "İçerik Üretici",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Java Geliştirici",
    companyName: "Freelance",
    icon: java,
    iconBg: "#383E56",
    date: "Ocak 2023 - Günümüz",
    points: [
      "Java kullanarak otomasyon botları ve veri analiz araçları geliştirme.",
      "Modern web teknolojileri ile entegre backend sistemleri kurma.",
      "Müşteri ihtiyaçlarına yönelik özel çözümler üretme.",
      "Temiz ve sürdürülebilir kod yazma prensiplerine uyma.",
    ],
  },
  {
    title: "React Native Geliştirici",
    companyName: "TechStartup",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Mart 2021 - Şubat 2022",
    points: [
      "iOS ve Android için çapraz platform mobil uygulamalar geliştirme.",
      "Kullanıcı deneyimini iyileştirmek için UI/UX tasarımcılarıyla işbirliği.",
      "Uygulama performansını optimize etme ve hataları giderme.",
    ],
  },
  {
    title: "Web Geliştirici",
    companyName: "Shopify Agency",
    icon: web,
    iconBg: "#383E56",
    date: "Ocak 2022 - Ocak 2023",
    points: [
      "E-ticaret siteleri için özel temalar ve eklentiler geliştirme.",
      "Müşteri taleplerine göre site performansını ve SEO uyumluluğunu artırma.",
      "Liquid, HTML, CSS ve JavaScript kullanarak responsive tasarımlar oluşturma.",
    ],
  },
  {
    title: "Full Stack Geliştirici",
    companyName: "Metaverse Projesi",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Ocak 2023 - Günümüz",
    points: [
      "Next.js ve Node.js kullanarak ölçeklenebilir web uygulamaları geliştirme.",
      "Web3 teknolojileri ve blockchain entegrasyonları üzerinde çalışma.",
      "Takım liderliği yaparak proje süreçlerini yönetme ve kod incelemeleri yapma.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Muhammed, karmaşık problemleri basit çözümlere dönüştürme konusunda harika bir yeteneğe sahip.",
    name: "Ahmet Yılmaz",
    designation: "CTO",
    company: "TeknoSoft",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Projelerimizdeki detaylara verdiği önem ve hızlı teslimatı ile bizi çok etkiledi.",
    name: "Ayşe Demir",
    designation: "Proje Yöneticisi",
    company: "Dijital Ajans",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Hem backend hem de frontend tarafında yetkinliği sayesinde tam donanımlı bir geliştirici.",
    name: "Mehmet Kaya",
    designation: "Kurucu",
    company: "StartUp X",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "E-Ticaret Platformu",
    description:
      "Kullanıcıların ürünleri arayabileceği, sepete ekleyebileceği ve sipariş verebileceği kapsamlı bir web tabanlı e-ticaret uygulaması.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "İş Takip Sistemi",
    description:
      "Takımların görevlerini organize etmelerini, ilerlemeyi takip etmelerini sağlayan modern bir proje yönetim arayüzü.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Seyahat Rehberi",
    description:
      "Popüler destinasyonlar hakkında bilgi veren, otel ve uçuş önerileri sunan kullanıcı dostu bir seyahat planlama uygulaması.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
