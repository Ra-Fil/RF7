import React from 'react';
import { Project, Skill } from './types';
import ReactIcon from './components/icons/ReactIcon';
import TypeScriptIcon from './components/icons/TypeScriptIcon';
import TailwindIcon from './components/icons/TailwindIcon';
import HtmlIcon from './components/icons/HtmlIcon';
import CssIcon from './components/icons/CssIcon';
import JavaScriptIcon from './components/icons/JavaScriptIcon';
import NodeJSIcon from './components/icons/NodeJSIcon';
import PythonIcon from './components/icons/PythonIcon';

export const MY_NAME = "Radka";
export const MY_ROLE = "Učím se tvořit přehledné a vizuálně atraktivní webové aplikace.";

export const ABOUT_ME = {
  title: "O mně",
  description: (
    <>
      <p className="mb-4">
        Jsem grafická designérka s dlouholetými zkušenostmi v oblasti vizuální komunikace, která se nyní cíleně přesouvá do světa IT. Programování mě začalo bavit natolik, že se mu chci věnovat naplno a hledám pracovní příležitost v oblasti <strong className="text-text-primary">webového vývoje</strong>.
      </p>
      <p className="mb-4">
        Aktivně se vzdělávám v technologiích frontendu (HTML, CSS, JavaScript, React) i v základech backendu a databází (Express, Node.js, PostgreSQL). Mám za sebou kurz <strong className="text-text-primary">Pythonu</strong> (Engento.cz) a aktuálně procházím kurzem <strong className="text-text-primary">Reactu</strong>. Kromě toho využívám ITnetwork a online zdroje k praktickému rozvoji, včetně práce s nástroji umělé inteligence.
      </p>
      <p className="mb-4">
        Díky provozování vlastního e-shopu mám široký záběr – od online marketingu a UX designu přes analytiku (GA4, Looker Studio) až po úpravy kódu v prostředí <strong className="text-text-primary">Shoptet</strong> (HTML, CSS, kódování bannerů, úpravy šablon).
      </p>
      <p className="mb-4">
        Spojuji <strong className="text-text-primary">kreativitu designéra s analytickým a technickým myšlením vývojáře</strong>. Baví mě hledat funkční a esteticky čistá řešení, učit se nové technologie a chápat projekty v širších souvislostech.
      </p>
      <p>
        Hledám pozici <strong className="text-text-primary">junior frontend developerky</strong> (případně fullstack) s možností profesního růstu, ideálně <strong className="text-text-primary">remote nebo on-site v Brně a okolí</strong>.
      </p>
    </>
  )
};

export const SKILL_CATEGORIES: { [key: string]: { title: string; skills: Skill[] } } = {
  frontend: {
    title: 'Hlavní frontend dovednosti',
    skills: [
      { name: 'HTML', icon: <HtmlIcon className="h-12 w-12" /> },
      { name: 'CSS', icon: <CssIcon className="h-12 w-12" /> },
      { name: 'JavaScript', icon: <JavaScriptIcon className="h-12 w-12" /> },
      { name: 'React', icon: <ReactIcon className="h-12 w-12" /> },
      { name: 'TypeScript', icon: <TypeScriptIcon className="h-12 w-12" /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon className="h-12 w-12" /> },
    ],
  },
  backend: {
    title: 'Základy backendu',
    skills: [
      { name: 'Node.js', icon: <NodeJSIcon className="h-5 w-5" /> },
      { name: 'Python', icon: <PythonIcon className="h-5 w-5" /> },
      { name: 'PostgreSQL' },
    ],
  },
  graphics: {
    title: 'Grafika',
    skills: [
      { name: 'Adobe Photoshop' },
      { name: 'Illustrator' },
      { name: 'InDesign' },
      { name: 'After Effects' },
      { name: 'CorelDRAW' },
      { name: 'Canva' },
    ],
  },
  marketing: {
    title: 'Marketing',
    skills: [
      { name: 'Ecomail' },
      { name: 'Leadhub' },
      { name: 'Boldem' },
      { name: 'Google Analytics 4' },
      { name: 'Looker Studio' },
      { name: 'SEO' },
      { name: 'reklamy Meta' },
    ],
  },
  other: {
    title: 'Další',
    skills: [
      { name: 'Shoptet' },
      { name: 'Responsivní design' },
      { name: 'UX/UI základy' },
      { name: 'Git & GitHub' },
    ],
  },
};


export const PROJECTS: Project[] = [
  {
    title: "Půjčovna outdoorového vybavení",
    description: "Komplexní e-commerce řešení s administrací produktů, správou objednávek a odesíláním emailových potvrzení. Kontrola dostupnosti položek na základě zadaného počtu vybavení a kalendáře.",
    imageUrl: "https://placehold.co/600x400/0D1117/C9D1D9?text=Outdoor+Půjčovna",
    tags: ["React", "Node.js", "PostgreSQL", "GitHub", "UX"],
    liveUrl: "https://pujcovnaoutdooru-8382.rostiapp.cz/",
    repoUrl: "https://github.com/radkafilipova/pujcovna-outdooru"
  },
  {
    title: "Sekce vložených bannerů pro Shoptet",
    description: "Vlastní řešení pro jednoduché vkládání a správu responzivních bannerů do různých sekcí e-shopu na platformě Shoptet, vytvořené pomocí čistého JavaScriptu.",
    imageUrl: "https://placehold.co/600x400/0D1117/C9D1D9?text=Shoptet+Bannery",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Nástroj pro scrapping",
    description: "Projekt v rámci kurzu Engeto. Scrapuje výsledky z webových stránek a ukládá je do strukturovaného souboru (např. CSV).",
    imageUrl: "https://placehold.co/600x400/0D1117/C9D1D9?text=Web+Scraper",
    tags: ["Python"],
    repoUrl: "https://github.com/radkafilipova/engeto-scraper"
  }
];

export const CONTACT = {
  email: "r.filipova@email.cz",
  github: "https://github.com/radkafilipova",
  linkedin: "https://linkedin.com/in/radka-filipova"
};