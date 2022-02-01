import { TThree } from "components/vertical-menu/vertical-menu.types";

export const MENUS: { id: number; label: string; link: string }[] = [
  {
    id: 1,
    label: "Incrições Siele",
    link: "https://google.com",
  },
  {
    id: 2,
    label: "Incrições MET",
    link: "https://google.com",
  },
  {
    id: 3,
    label: "Incrições MET",
    link: "https://google.com",
  },
  {
    id: 4,
    label: "Incrições MET",
    link: "https://google.com",
  },
  {
    id: 5,
    label: "Eventos",
    link: "https://google.com",
  },
  {
    id: 6,
    label: "Cyber ADM",
    link: "https://google.com",
  },
  {
    id: 7,
    label: "Testes",
    link: "https://google.com",
  },
  {
    id: 8,
    label: "Classificação",
    link: "https://google.com",
  },
  {
    id: 9,
    label: "WEBMAIL",
    link: "https://google.com",
  },
  {
    id: 10,
    label: "Pesquisas",
    link: "https://google.com",
  },
  {
    id: 11,
    label: "Curriculum",
    link: "https://google.com",
  },
  {
    id: 12,
    label: "Contacto",
    link: "https://google.com",
  },
  {
    id: 13,
    label: "Curriculum",
    link: "https://google.com",
  },
  {
    id: 14,
    label: "Treinamento e capacitação",
    link: "https://google.com",
  },
];

export const THREE: TThree[] = [
  {
    id: 1,
    label: 'Solicitações',
    childrens: [
      {
        id: 10,
        label: 'Solicitação 1',
      },
      {
        id: 11,
        label: 'Solicitação 2',
      }
    ]
  },
  {
    id: 2,
    label: 'Fisk web',
    childrens: []
  },
  {
    id: 3,
    label: 'Marketing',
    childrens: [
      {
        id: 20,
        label: 'Campanha 2022',
        childrens: [
          {
            id: 23,
            label: 'Canpanha 2022 1',
            childrens: []
          }
        ]
      },
      {
        id: 21,
        label: 'Borrado Infantil'
      }
    ]
  }
]