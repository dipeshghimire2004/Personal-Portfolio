import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { RiJavaFill } from "react-icons/ri";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  {label:"Github", href:"#github"},
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "DIPESH GHIMIRE",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a year.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "",
  },
  {
    id: 3,
    name: "To Do List",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards,and task assignment.",
    image: projectImage3,
    githubLink: "https://github.com/dipeshghimire2004/To-Do-List",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with Javascript and CSS.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
];

export const BIO = [
  "Dipesh Ghimire studied Computer Engineering 'T-SLC' at the renown Shreee Siddhababa Sec. School. Following his education, he honed his craft and expertise for the betterment with creative and to spill innovative idea, where he immersed himself in the world of fronend development",
  "In 2023, drive by Suresh Khanal for the maintenance of Computer Hardware, software and networking issuses.",
  "later  as a passion for creating extraordinary user experiences Dipesh Ghimire serving as a member of development platform.",
  "As a multi-disciplinary frontend developer, Dipesh Ghimire brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Dipesh Ghimire possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <SiPhp className="text-4xl text-green-600 lg:text-5xl" />,
    name: "PHP",
    experience: "3+ months",
  },
  {
    icon: <BiLogoFigma className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Figma",
    experience: "1+ year",
  },
  {
    icon: <TbBrandJavascript className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Javascript",
    experience: "1+ years",
  },
  {
    icon: <FaPython className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Python",
    experience: "6+ months",
  },
  {
    icon: <RiJavaFill className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Java",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Junior Web Developer",
    company: "Dev-Corp Herald College Kathmandu",
    duration: "July 2024 - Present",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing reactJS, Taiwind, NextJS, Shadcn to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
  {
    title: "On-The Job Traning",
    company: "High-Speed",
    duration: "August 2022 - December 2022",
    description:
      "As the assistant service provider, I spearheaded the maintenance of Hardware devices and Networking maintenance, I have had the opportunity to expand my networking certification and gain knowledge of the inner workings of the entire computer system.",
  },
];

export const EDUCATION = [
  {
    degree: "+12 'Computer Engineering",
    institution: "Shree SIddhababa Sec. School",
    duration: "2019-2023",
    description:
      "Overview of contemporary technology along with development process. Completed a SRS on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development,Research, and data structures upto certain extents. Graduated with honors.",
  },
  {
    degree: "BC's Hons ( Computer Science )",
    institution: "Herald College Kathmandu",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and Devlopment Community, where I developed web applications using HTML, CSS, JavaScript,react, Tailwind, NextJS,AppWrite and PHP. Completed a senior project on developing an Workshop Tracking of Herald College.",
  },
];

export const GITHUB=[
  
]

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100058924517386",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/dipeshg2004/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/dipeshghimire2004",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/dipesh-ghimire-a72553272/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
