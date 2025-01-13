import KalkiNi from '../assets/images/Experience/KalkiNi.jpg';

import {
    SiAntdesign,
    SiMaterialui,
    SiNestjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiTypescript,
    TbBrandReactNative
} from "react-icons/all";


export const EXPERIENCES = [
  {
    organisation: "KalkiNi",
    logo: KalkiNi,
    positions: [
      {
        title: "Backend Developer (Remote)",
        duration: "Dec-2024 - Current",
        content: [
          {
            text: "Working on Backend part and designed and implemented RESTful APIs, improving system performance.",
            tech: [
              {
                id: "f-2",
                icon: SiTypescript,
                name: "TypeScript",
              },
              {
                id: "f-1",
                icon: SiReact,
                name: "ReactJS",
              },
              {
                id: "f-3",
                icon: SiAntdesign,
                name: "Antd",
              },
              {
                id: "f-4",
                icon: TbBrandReactNative,
                name: "React Native",
              },
              {
                id: "f-5",
                icon: SiNestjs,
                name: "NestJS",
              },
              {
                id: "f-6",
                icon: SiPostgresql,
                name: "Postgres",
              },
              {
                id: "f-7",
                icon: SiPrisma,
                name: "Prisma ORM",
              },
            ]
          },
        ],
      },
    ],
  },
]