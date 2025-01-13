import Hero_person from "../assets/images/Hero/main_comp.json";

export { SOCIAL_MEDIA } from './socialMedia';
export { SKILLS_LIST } from './skillsList';
export { EXPERIENCES } from './experience';
export { EDUCATION_LIST } from './education';
export { PROJECTS } from './projects';

export const RESUME_LINK = "https://drive.google.com/file/d/1M4Bw_DNazkj2WBpESW50FWNcW_hVGCFD/view?usp=drive_link";
export const REPO_LINK = "https://github.com/adityabajajadi/PortFolio";

export const CONTENT = {
    navs: [
        {
            link: "#skills",
            title: "Skills & Experience",
        },
        {
            link: "#education",
            title: "Education",
        },
        {
            link: "#projects",
            title: "Projects",
        },
        {
            link: "#contact",
            title: "Contact Me",
        },
    ],
    hero: {
        title: `Hello,`,
        sub1: "there",
        sub2: "I am",
        firstName: "Aditya",
        LastName: "Bajaj",
        image: Hero_person,
        hero_content: [
            {
                count: "",
                text: "Developer based in India. Software Development Engineer.",
            },
        ],
    },

    Footer: {
        text: "All © Copy Right Reserved 2023",
    },
};

export const ABOUT_ME = {
    name: "Aditya Bajaj",
    tagLine: "Insanely ambitious coder",
    intro: CONTENT.hero.hero_content.text
};
