// src/components/skills/skillsData.ts
import nodeIcon from "./../../../public/assets/nodejs-logo.svg";
import angularIcon from "./../../../public/assets/angular.png";
import cssIcon from "./../../../public/assets/css3.jpeg";
import reactIcon from "./../../../public/assets/react.png";
import gitIcon from "./../../../public/assets/git.png";
import mysqlIcon from "./../../../public/assets/mysql.png";
import postgresIcon from "./../../../public/assets/postgresql.png";
import pythonIcon from "./../../../public/assets/python.jpeg";
import expressIcon from "./../../../public/assets/express.png";
import htmlIcon from "./../../../public/assets/html5.png";

export const skillIcons = [
  nodeIcon,
  angularIcon,
  cssIcon,
  htmlIcon,
  reactIcon,
  gitIcon,
  mysqlIcon,
  postgresIcon,
  pythonIcon,
  expressIcon,
];

export const skillDetails = [
  {
    label: "Front-End",
    items: ["HTML", "CSS", "JavaScript", "Typescript", "React", "NextJS", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Back-End",
    items: ["Node.js", "Python", "Django", "Express"],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Prisma"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Heroku", "Firebase", "Railway", "C-Panel", "Cloudinary"],
  },
  {
    label: "Others",
    items: ["RESTful APIs", "GraphQL", "Agile Methodologies", "CI/CD", "Unit Testing", "Web Accessibility (a11y)", "Responsive Design", "Cross-Browser Compatibility", "Version Control", "Code Review", "Debugging", "Performance Optimization", "SDLC", "Design Patterns", "CMS", "Google Analysis"],
  },
];
