import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaAdjust,
  FaBootstrap,
  FaBrain,
  FaCode,
  FaCommentDots,
  FaCss3,
  FaCuttlefish,
  FaDatabase,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaUsers,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAwslambda,
  SiAwsorganizations,
  SiDart,
  SiDocker,
  SiFlutter,
  SiFramer,
  SiJira,
  SiKubernetes,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiRust,
  SiServerless,
  SiSwagger,
  SiTailwindcss,
  SiTrello,
  SiVercel,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaBootstrap, // Added Bootstrap
          SiTailwindcss, // Added Tailwind CSS
          SiFlutter, // Added Flutter
          SiDart, // Added Dart
        ],
      },
      {
        title: "Back-End",
        icons: [
          FaNodeJs, // Added Node.js
          FaJava, // Added Java
          FaCuttlefish, // C# icon (as there is no official one, this is a close match)
          SiRust, // Added Rust
          FaDatabase, // For Database (MongoDB, MySQL, PostgreSQL)
          SiNestjs, // Added Nest.js
          SiSwagger, // Added Swagger
        ],
      },
      {
        title: "Cloud & DevOps",
        icons: [
          SiAwslambda,
          SiAwsorganizations, // AWS
          SiDocker, // Docker
          SiKubernetes, // Kubernetes
          SiNetlify, // Netlify
          SiVercel, // Vercel
          SiServerless, // Serverless Architecture
        ],
      },
      {
        title: "Tools & Technologies",
        icons: [
          FaGithub, // GitHub
          FaGit, // Git
          SiTrello, // Trello
          SiJira, // Jira
          FaCode, // VS Code
        ],
      },
      {
        title: "Soft Skills",
        icons: [
          FaUsers, // Collaboration
          FaBrain, // Quick Learning
          FaAdjust, // Adaptive Behavior
          FaCommentDots, // Effective Communication
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer (Full Stack Web) - Codora Pvt. Ltd",
        stage: "Feb 2024 – Dec 2024",
        description: "Led the development of a sophisticated FinTech application, improving transaction security and scalability, optimizing backend performance, and automating workflows, enhancing team productivity by 20%. Implemented CI/CD pipelines, containerized applications using Docker, and optimized database queries, improving performance and reliability.",
      },
      {
        title: "Front-End Developer (Intern) - Kaboom Lab",
        stage: "July 2023 – August 2023",
        description: "Spearheaded the design of a Pet Shop website and collaborated on the development of a social media platform, enhancing user engagement and customer response time. Contributed to building a chatbot feature, improving user satisfaction.",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Master of Science in Data Science - University of Hertfordshire, England",
        stage: "January 2025 – January 2026",
      },
      {
        title: "Bachelor of Science in Software Engineering - Air University, Islamabad",
        stage: "September 2020 – June 2024",
        percentage: "72.25%",
      },
      {
        title: "Intermediate (FSC – Pre-Engineering) - Govt. Degree College, Chichawatni",
        stage: "July 2018 – August 2020",
        percentage: "75.6%",
      },
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "Axum Rust Starter Template",
        description: "Developed a high-performance Axum Rust Starter Template, optimizing backend performance with Rust and Axum, reducing response times and improving scalability. Implemented unit and integration testing with 90% coverage.",
      },
      {
        title: "Final Year Project: Timetable Optimization Web Application",
        description: "Created a web application using the MERN stack to optimize timetables via a genetic algorithm, reducing scheduling conflicts and improving efficiency. Developed an intuitive user interface that enhanced user experience.",
      },
      {
        title: "Departmental Application (Web & Desktop)",
        description: "Designed a website and desktop application in C# for departmental use, improving usability and ensuring a responsive design, reducing bounce rate and increasing user engagement.",
      },
      {
        title: "User Management System (Console Application)",
        description: "Developed a user management system in C++ and Java, incorporating encryption for secure password storage and optimizing database interaction using MySQL.",
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "Meta Front-End Professional Certification - Meta, Coursera",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -top-[20] -left-[320px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span>,
            Exceptional <span className="text-accent">Solutions</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            With over 1 year of experience as a Software Engineer in a leading
            multinational company, I’ve developed innovative digital solutions
            in fintech and full-stack development. I’ve worked on high-impact
            projects, collaborating with cross-functional teams to create
            scalable, high-performance applications for global markets.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  {/* <CountUp start={0} end={1+} duration={5} /> */}
                  <div>
                    <CountUp start={0} end={1} duration={5}>
                      {({ countUpRef }) => <span ref={countUpRef}>1</span>}
                    </CountUp>
                    <span>+</span>
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
