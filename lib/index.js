import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";


export const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 8,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 100,
    text: "Code Commits",
  },
];

export const services = [
  {
    num: "01",
    title: "Web Development",
    description: "lorem ipsum dolor sit amet ",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "lorem ipsum dolor sit amet ",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description: "lorem ipsum dolor sit amet ",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "lorem ipsum dolor sit amet ",
    href: "",
  },
];

//about data
export const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ea maxime perferendis consectetur, pariatur sunt repudiandae eum. Dolor hic, nemo explicabo quaerat maxime ipsam laudantium ipsa culpa. Dignissimos, perferendis perspiciatis.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kelly Mweu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+254) 703 206 460",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },

    {
      fieldName: "Email",
      fieldValue: "mweukelly@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

//experience
export const experience = {
  icon: 1,
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi similique nostrum eaque ducimus facilis iusto magni perferendis, rerum voluptatibus repudiandae, ipsum unde repellendus mollitia quis nihil vel, neque quidem.",
  items: [
    {
      company: "Company Name 1",
      position: "Full Stack Developer",
      duration: "20xx - Present",
    },
    {
      company: "Company Name 2",
      position: "Position 2",
      duration: "20xx - 20xx",
    },
    {
      company: "Company Name 3",
      position: "Position 3",
      duration: "20xx - 20xx",
    },
  ],
};

//education
export const education = {
  icon: 1,
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi similique nostrum eaque ducimus facilis iusto magni perferendis, rerum voluptatibus repudiandae, ipsum unde repellendus mollitia quis nihil vel, neque quidem.",
  items: [
    {
      instituition: "University of Nairobi",
      degree: "Civil Engineering",
      duration: "2018 - 2023",
    },
    {
      instituition: "School 2",
      degree: "degree 2",
      duration: "20xx - 20xx",
    },
    {
      instituition: "School 3",
      degree: "degree 3",
      duration: "20xx - 20xx",
    },
  ],
};


export const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptate facere accusamus quam optio ducimus. Quo, quod magni. Unde dolor voluptates possimus eveniet optio, aliquam suscipit natus architecto id aspernatur!",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/thumbnail",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptate facere accusamus quam optio ducimus. Quo, quod magni. Unde dolor voluptates possimus eveniet optio, aliquam suscipit natus architecto id aspernatur!",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "TailwindCSS 3",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/thumbnail2",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptate facere accusamus quam optio ducimus. Quo, quod magni. Unde dolor voluptates possimus eveniet optio, aliquam suscipit natus architecto id aspernatur!",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: "/thumbnail3",
    live: "",
    github: "",
  },
];