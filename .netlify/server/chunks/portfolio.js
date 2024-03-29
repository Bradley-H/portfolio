const data = [
  {
    id: 0,
    title: "Portfolio App",
    img: "portfolio",
    git: "https://github.com/Bradley-H/portfolio",
    tech: [
      {
        id: 0,
        name: "Svelte",
        img: "svelte"
      },
      {
        id: 1,
        name: "Sass",
        img: "sass"
      },
      {
        id: 2,
        name: "Node",
        img: "node"
      }
    ],
    information: "This is Bradley's personal portfolio website, it has all his portfolio projects he made, It contains information about himself, his projects, his resume and his contact information."
  },
  {
    id: 1,
    title: "Invoice App",
    img: "invoice",
    git: "https://github.com/Bradley-H/invoice-app",
    demo: "https://glittery-flan-c268d3.netlify.app/",
    tech: [
      {
        id: 0,
        name: "Svelte",
        img: "svelte"
      },
      {
        id: 1,
        name: "Sass",
        img: "sass"
      }
    ],
    information: "This is an invoice App that Bradley made, the idea came from FrontEndMentor.io, It's a CRUD app, you can Create, View, Edit, and Delete Invoices"
  },
  {
    id: 1,
    title: "Password Generator",
    img: "password",
    git: "https://github.com/Bradley-H/passwordGen",
    demo: "https://startling-heliotrope-e1f733.netlify.app/",
    tech: [
      {
        id: 0,
        name: "Vue",
        img: "vue"
      },
      {
        id: 1,
        name: "Sass",
        img: "sass"
      },
      {
        id: 2,
        name: "TypeScript",
        img: "TS"
      }
    ],
    information: "This is a password generator that Bradley made, app that generates a password"
  },
  {
    id: 2,
    title: "Simon",
    img: "simon",
    git: "https://github.com/Bradley-H/Simon",
    demo: "https://bradley-h.github.io/Simon/",
    tech: [
      {
        id: 0,
        name: "TypeScript",
        img: "TS"
      },
      {
        id: 1,
        name: "Sass",
        img: "sass"
      }
    ],
    information: "This is a Simon Game, the old 90's memory game. You have to repeat the pattern of flashing lights, If you get the pattern right after 10 rounds, you win, otherwise after three tries you lose."
  }
];
export {
  data as d
};
