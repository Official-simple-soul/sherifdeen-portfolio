import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDocker,
  FaPager,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaCubes,
  FaForward,
} from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';
import {
  BsGit,
  BsWordpress,
  BsGithub,
  BsTwitter,
  BsFacebook,
} from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';
import { AiTwotoneMail } from 'react-icons/ai';

export const skill = [
  { id: 1, skill: 'HTML', color: '#E93E30', icon: FaHtml5, percentage: 95 },
  { id: 2, skill: 'CSS', color: '#307BE1', icon: FaCss3Alt, percentage: 85 },
  {
    id: 3,
    skill: 'JAVASCRIPT',
    color: '#EAD41D',
    icon: DiJavascript,
    percentage: 85,
  },
  {
    id: 4,
    skill: 'BOOTSTRAP',
    color: '#7711ED',
    icon: FaBootstrap,
    percentage: 95,
  },
  {
    id: 5,
    skill: 'TAILWIND',
    color: '#17ACB0',
    icon: SiTailwindcss,
    percentage: 98,
  },
  { id: 6, skill: 'REACTJS', color: '#5CD0EE', icon: FaReact, percentage: 98 },
  {
    id: 7,
    skill: 'NEXTJS',
    color: '#000000',
    icon: TbBrandNextjs,
    percentage: 96,
  },
  { id: 8, skill: 'VUEJS', color: '#3DAF7D', icon: FaVuejs, percentage: 95 },
  { id: 9, skill: 'NODEJS', color: '#619756', icon: FaNodeJs, percentage: 65 },
  { id: 10, skill: 'GIT', color: '#E44D30', icon: BsGit, percentage: 80 },
  {
    id: 11,
    skill: 'WORDPRESS',
    color: '#288EB7',
    icon: BsWordpress,
    percentage: 80,
  },
  {
    id: 12,
    skill: 'NICEPAGE',
    color: '#3C7BE8',
    icon: FaPager,
    percentage: 85,
  },
  { id: 13, skill: 'DOCKER', color: '#128EB9', icon: FaDocker, percentage: 45 },
  {
    id: 14,
    skill: 'REACT NATIVE',
    color: '#00CDF2',
    icon: TbBrandReactNative,
    percentage: 65,
  },
];

export const services = [
  {
    image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
    title: 'Web Devevelopement',
    text: `As a web developer, I offer comprehensive web development services to help bring your online presence to life. My expertise includes designing and coding web pages using HTML, CSS, and JavaScript to create visually appealing and interactive websites. `,
  },

  {
    image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
    title: 'Mobile App Development',
    text: 'As a mobile app developer, I specialize in creating cutting-edge mobile applications for various platforms such as iOS and Android. My services include designing and developing feature-rich and user-friendly mobile apps that cater to your specific needs. ',
  },

  {
    image: '<i class="fa-solid fa-laptop fs-1"></i>',
    title: 'Web Management',
    text: 'As a web and mobile app management expert, I provide comprehensive services to ensure the smooth operation and maintenance of your web and mobile applications. My offerings include monitoring and managing the performance, security, and updates of your web and mobile apps.',
  },

  {
    image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
    title: 'Mentorship',
    text: 'As a mentor, I offer guidance and support to help individuals achieve their personal and professional goals. My mentorship services include providing expert advice, sharing industry insights, and offering practical tips to help mentees excel in their chosen field, such as web development.',
  },

  {
    image: '<i class="fa-solid fa-laptop fs-1"></i>',
    title: 'Trainings',
    text: 'As a trainer, I provide comprehensive training programs to help individuals gain knowledge and skills in web development. My training services cover a wide range of topics, including HTML, CSS, JavaScript, front-end and back-end development, web frameworks, and other relevant technologies. ',
  },

  {
    image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
    title: 'Consultation',
    text: 'As a consultant, I provide expert advice and guidance in the field of web development. My consultation services encompass a wide range of areas, including website design, development methodologies, technology selection, project management, and best practices.',
  },
];

export const socialMedia = [
  { id: 1, icon: BsGithub, link: 'https://github.com/Official-simple-soul' },
  { id: 2, icon: BsTwitter, link: 'https://twitter.com/RoheemDeen' },
  {
    id: 3,
    icon: FaFacebookSquare,
    link: 'https://web.facebook.com/sherifdeenabdurroheem/',
  },
  { id: 4, icon: FaWhatsapp, link: 'https://wa.me/08139781147' },
  {
    id: 5,
    icon: AiTwotoneMail,
    link: 'mailto:abdurroheemsherifdeen@gmail.com',
  },
];

export const reviews = [
  {
    id: 1,
    name: "John Smith",
    title: "Great Service!",
    review: "I am extremely satisfied with the quality of service provided. The team was professional, responsive, and delivered beyond my expectations.",
    rating: 5,
    image: "/recom/1.jpg"
  },
  {
    id: 2,
    name: "Emma Johnson",
    title: "Excellent Experience!",
    review: "The service provided was exceptional. The team went above and beyond to address all my requirements and delivered on time.",
    rating: 4,
    image: "/recom/2.jpg"
  },
  {
    id: 3,
    name: "Michael Brown",
    title: "Highly Recommended!",
    review: "I had a great experience with this service. The team was knowledgeable, friendly, and the quality of work was outstanding.",
    rating: 5,
    image: "/recom/3.jpg"
  },
  {
    id: 4,
    name: "Sophia Lee",
    title: "Impressive Service!",
    review: "I was impressed with the level of professionalism and expertise shown by the team. They provided excellent service and exceeded my expectations.",
    rating: 4.5,
    image: "/recom/4.jpg"
  },
  {
    id: 5,
    name: "William Davis",
    title: "Top-notch Service!",
    review: "I received top-notch service from the team. They were prompt, efficient, and the quality of their work was outstanding.",
    rating: 5,
    image: "/recom/5.jpg"
  }
];

export const projects = [
    {
        id: 1,
        name: 'KodeBlog Project',
        desc: 'A web application built to serve as a blog website for kodecamp. Built during kodecamp bootcamp',
        image: '/projects/kodeblog.png',
        link: 'https://official-simple-soul.github.io/TeamKodecampBlog/',
        code: 'https://github.com/Official-simple-soul/TeamKodecampBlog'
    },

    {
        id: 2,
        name: 'Portfolio',
        image: '/projects/portfolio.png',
        desc: 'My first portfolio. This was built immediately after kodecamp bootcamp',
        link: 'https://official-simple-soul.github.io/myportfolio/',
        code: 'https://github.com/Official-simple-soul/myportfolio'
    },

    {
        id: 3,
        name: 'Livescore Project',
        desc: 'A football livescore web application. APi from RapidApi',
        image: '/projects/footballnow.png',
        link: 'https://official-simple-soul.github.io/livescore/',
        code: 'https://github.com/Official-simple-soul/livescore'
    },

    {
        id: 4,
        name: 'Daura Project',
        image: '/projects/daura.png',
        desc: 'The daura project was a project given to my team during kodecamp bootcamp to have an experience of team work',
        link: 'https://official-simple-soul.github.io/TeamZeusPage/',
        code: 'https://github.com/Official-simple-soul/TeamZeusPage'
    },

    {
        id: 5,
        name: 'FoodMania Project',
        desc: 'This is the project that made me master bootstrap css. Built during kodecamp bootcamp',
        image: '/projects/foodmania.png',
        link: 'https://official-simple-soul.github.io/foodmania.com/',
        code: 'https://github.com/Official-simple-soul/foodmania.com'
    },

    {
        id: 6,
        name: 'RestCountry Project',
        desc: 'This project was carried out to master API, and Promises. It was a training project',
        image: '/projects/restcountry.png',
        link: 'https://official-simple-soul.github.io/restCountry/',
        code: 'https://github.com/Official-simple-soul/restCountry'
    },

    {
        id: 7,
        name: 'FoodMania Project',
        desc: 'This is the project that made me master bootstrap css. Built during kodecamp bootcamp',
        image: '/projects/foodmania.png',
        link: 'https://official-simple-soul.github.io/KodeCampTask5/',
        code: 'https://github.com/Official-simple-soul/KodeCampTask5'
    },
    {
        id: 8,
        name: 'Book Store Project',
        desc: 'An environment where you can find and read all books of your choice',
        image: '/projects/bookStore.png',
        link: 'https://simple-book-store.netlify.app/',
        code: 'https://github.com/Official-simple-soul/bookStore.git'
    },
    {
        id: 9,
        name: 'RealEstate Project',
        desc: 'A web application built to ease the stress of real estate surveyors and potential client from moving up and down in search of properties. Properties can easily be identified and booked for inspection',
        image: '/projects/real-estate.png',
        link: 'realestate-trade.vercel.app',
        code: 'https://github.com/Official-simple-soul/realestate-trade.git'
    },
    {
        id: 10,
        name: 'DearLu Fashion Project',
        desc: 'DearLu Fashion web app is an application that offers commercial services of shopping for clothings, shoes and other fashions. It offers delivery to anywhere in the world. My biggest project',
        image: '/projects/dearlufashions.png',
        link: 'dearlu-fashion.vercel.app',
        code: 'https://github.com/Official-simple-soul/dearlu-fashion.git'
    },
    {
        id: 11,
        name: 'MovieTrailer Project',
        desc: 'In this app, you can search for any movie of your choice and get the trailers. My first Vue web application. The app was built to learn and master VueJs',
        image: '/projects/movietrailers.png',
        link: 'movie-trailer-eight.vercel.app',
        code: 'https://github.com/Official-simple-soul/MovieTrailer.git'
    },
]



