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
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  lifehash,
  openClassrooms,
  mysql,
  threadsapp,
  githubsearch,
  memorygame,
  issuetracker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Junior Developer",
    company_name: "Lifehash",
    icon: lifehash,
    iconBg: "#ffffff",
    date: "September 2021 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Built an interactive website for the Zinnia Block explorer site",
      "using React, including creating and maintaining the UI components, managing state using Redux, and consuming RESTful APIs to display data dynamically.",
      "Developed custom reusable components and templates to improve development efficiency and maintain consistency across multiple projects.",
    ],
  },
  {
    title: "Frontend Web Developer Bootcamp",
    company_name: "OpenClassrooms",
    icon: openClassrooms,
    iconBg: "#7f5bee",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Threads App",
    description:
      "A social media app that allows users to create and share threads. Users can also like and comment on posts, and join communities.",
    tags: [
      { name: "nextjs", color: "text-white" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: threadsapp,
    source_code_link: "https://github.com/Fables7/threads_app",
    live_demo_link: "https://threads-app-snowy-beta.vercel.app/",
  },
  {
    name: "Github Search",
    description:
      "A small website that allows users to search for Github users and view their profile information.",
    tags: [
      { name: "nextjs", color: "text-white" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: githubsearch,
    source_code_link: "https://github.com/Fables7/github-user-search-app",
    live_demo_link: "https://fables7-github-search-user.netlify.app/",
  },
  {
    name: "Memory Game",
    description:
      "A web memory game with different levels and can be played with multiple people.",
    tags: [
      { name: "nextjs", color: "text-white" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: memorygame,
    source_code_link: "https://github.com/Fables7/memory-game",
    live_demo_link: "https://fables7-memory-game.netlify.app/",
  },
  {
    name: "Issue Tracker",
    description:
      "An issue tracker web application that allows users to create, update, and delete issues.",
    tags: [
      { name: "nextjs", color: "text-white" },
      { name: "mysql", color: "orange-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: issuetracker,
    source_code_link: "https://github.com/Fables7/issue-tracker",
    live_demo_link: "https://issue-tracker-delta-sage.vercel.app/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
