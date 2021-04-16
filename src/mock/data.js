import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jason | Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jason',
  subtitle: 'I am a Fullstack JavaScript Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'jason.jpg',
  paragraphOne: `Hi, I'm Jason. I'm originally from upsate New York before moving out west to the mountains of California and later Seattle. Growing up, my dad worked in software and I have loved all kinds of technology for as long as I can remember. I'm always trying to use technology to help people and to solve problems. I've worked in the security, customer service, and labor industries my entire life and it was while working in these industries that I realized how important company values were to me. I want my work to be representative of my own values.`,
  paragraphTwo: `I'm a software developer with a strong eye for detail, ethical motvation, and a knack for troubleshooting of all kinds. I believe this makes me a uniquely suited fit for a career in tech and I'm stoked to be working towards these goals.`,
  paragraphThree: `Passionately looking for a position that will provide me with the opportunities to grow and problem solve through collaboration.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sinkyShip.png',
    title: 'Sinky Ship',
    info: 'CLI game akin to battleship',
    info2: '',
    url: '',
    repo: 'https://github.com/High-Seas-Computer-Company/sinky-ships', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'superSimpleAgent.png',
    title: 'SuperSimpleAgent',
    info: 'Dev tool app that reads and outputs JSON data in a simple format',
    info2: 'Feb 2021',
    url: 'http://www.supersimpleagent.xyz/',
    repo: 'https://github.com/jquaglia/super-simple-agent', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Flight Facts',
    info: 'Web quiz game that asks you questions about different countries around the world',
    info2: 'Dec 2020',
    url: '',
    repo: 'https://shaybrow.github.io/flight-facts/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jqugali@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/SirJasonTyler',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/stubtail42',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jason-quaglia/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jquaglia',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
