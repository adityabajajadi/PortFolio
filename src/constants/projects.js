import portfolio from '../assets/images/Projects/portfolio.jpg';
import netflix from "../assets/images/Projects/netflix.jpg";
import body from '../assets/images/Projects/body.jpeg';
import two from '../assets/images/Projects/two.webp';
import home from '../assets/images/Projects/homesecurity.avif';
import {
    AiFillHtml5,
    BsDiamond,
    BsDroplet,
    DiDatabase,
    FaStripe,
    GiDiamondTrophy,
    GrDiamond,
    GrStripe,
    RiDrizzleFill,
    RiDrizzleLine,
    SiCss3,
    SiDart,
    SiExpress,
    SiFlutter,
    SiGo,
    SiMaterialui,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiNpm,
    SiReact,
    SiRedux,
    SiStripe,
    SiSupabase,
    SiTailwindcss,
    SiVite,
    SiHtml5,
    SiJavascript,
    SiPython,
} from "react-icons/all";

export const PROJECTS = [
  {
    id: "project-200",
    title: "Netflix Clone",
    github: "https://github.com/adityabajajadi/Netflix-Clone",
    image: netflix,
    content:
      "Clone of Netflix with only frontend",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"  
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-201",
    title: "Body Language Detector",
    github: "https://github.com/adityabajajadi/Body-Language-Detector,",
    image: body,
    content:
      "Detects the emotion of the person in the image like sad, happy, angry etc.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
    ],
  },
  {
    id: "project-100",
    title: "Two Factor Authentication",
    github: "https://github.com/adityabajajadi/Two-Factor-Authentication",
    image: two,
    content:
      "Use face recogition and OTP for two factor authentication.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"  
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python"
      },
    ],
  },
  {
    id: "project-101",
    title: "Home Security",
    github: "https://github.com/adityabajajadi/Home_Security",
    image: home,
    content:
      "Home security system using face recognition and socket programming.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
    ],
  },
  {
    id: "project-8",
    title: "Personal Portfolio",
    github: "https://github.com/adityabajajadi/PortFolio",
    image: portfolio,
    content:
      "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
]