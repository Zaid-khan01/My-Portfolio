// Skills Section Logo's
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/C_logo.png';
import cppLogo from './assets/tech_logo/cpp_logo.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import cssLogo from './assets/tech_logo/css_logo.png';
import drfLogo from './assets/tech_logo/drf_logo.png';
import firebaseLogo from './assets/tech_logo/firebase_logo.png';
import gitLogo from './assets/tech_logo/git_logo.png';
import githubLogo from './assets/tech_logo/github_logo.png';
import htmlLogo from './assets/tech_logo/html_logo.png';
import javaLogo from './assets/tech_logo/java_logo.jpg';
import javascriptLogo from './assets/tech_logo/js_logo.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postmanLogo from './assets/tech_logo/postman.png';
import pythonLogo from './assets/tech_logo/python_logo.jpg';
import reactjsLogo from './assets/tech_logo/react_logo.png';
import tailwindcssLogo from './assets/tech_logo/tailwind_logo.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import unifiedMentor from './assets/company_logo/unifiedMentor.png';

// Education Section Logo's
import msitLogo from './assets/education_logo/btech_logo.png';
import gtbpiLogo from './assets/education_logo/diploma_logo.jpg';
import gbsssLogo from './assets/education_logo/gbsssLogo.jpg';
import mmpsLogo from './assets/education_logo/school_logo.png';

// Project Section Logo's
import basicCalculatorLogo from './assets/work_logo/basic_calculator.jpg';
import imageSliderLogo from './assets/work_logo/image_slider.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Django Rest Framework', logo: drfLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: unifiedMentor,
      role: "Fullstack Developer",
      company: "Unified Mentor",
      date: "April 2024 - May 2024",
      desc: "Developed dynamic and scalable web applications using the Full Stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: msitLogo,
      school: "MSIT, Delhi",
      date: "Sept 2024 - Present",
      grade: "9.56 CGPA",
      desc: "I am doing BTech in Computer Applications from MSIT University, Delhi. Currently at MSIT, I am gaining a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participating in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "Bachelor's of Technology in CSE - BTech (CSE)",
    },
    {
      id: 1,
      img: gtbpiLogo,
      school: "GTBPI, Rajouri Garden",
      date: "Aug 2021 - March 2024",
      grade: "85%",
      desc: "I completed my Diploma degree in Computer Science & Engineering from GTBPI College, Delhi. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at GTBPI College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Diploma (Polytechnic) in CSE",
    },
    {
      id: 2,
      img: gbsssLogo,
      school: "Goverment Boys Senior Secondary School, Delhi",
      date: "Apr 2019 - March 2021",
      grade: "89%",
      desc: "I completed my class 10th education from GBSSS, Delhi, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
    {
      id: 3,
      img: mmpsLogo,
      school: "Moti Memorial Public School, Delhi",
      date: "Apr 2009 - March 2019",
      grade: "85%",
      desc: "I completed my class 8th education from Moti Memorial Public School, Delhi - 110096 , under the CBSE board.",
      degree: "CBSE class - 8th"
    },
  ];
  
 export const projects = [
    {
      id: 0,
      title: "Basic Calculator",
      description:
        "A sleek and intuitive calculator app built with HTML, CSS, and JavaScript, enabling users to perform basic arithmetic operations with ease and precision.",

      image: basicCalculatorLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Zaid-khan01/Calculator-Project",
    },
    {
      id: 1,
      title: "Image Slider",
      description:
        "A smooth and responsive image slider built with HTML, CSS, and JavaScript, allowing users to seamlessly navigate through a gallery of images with clean transitions and interactive controls.",
      image: imageSliderLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Zaid-khan01/Image_Slider-Project",
    },
  ];  