import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  Code2,
  Database,
  Layers,
  Settings,
  Zap,
  Bot,
  ExternalLink
} from "lucide-react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "publications", "resume"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY + 80 >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      role: "Principal Member of Technical Staff",
      company: "Slack",
      period: "Oct 2021 – Present",
      summary: "",
      responsibilities: [
        <><b>Technical Leadership & Architecture</b> – Led architecture and design for high-impact Slack modules, including AI-powered Email App, Calendar features, and enterprise AI add-on provisioning, ensuring scalability and reliability for millions of users.</>,
        <><b>Driving Business Impact</b> – Spearheaded enterprise provisioning automation integrated with Salesforce, enabling seamless onboarding and contributing to <b>30% revenue growth</b>.</>,
        <><b>Performance & Scalability Optimizations</b> – Optimized the fair billing engine, achieving <b>8× faster</b> calculations for billions of billing records, and streamlined tax configurations to eliminate manual intervention.</>,
        <><b>Cross-Team & Strategic Initiatives</b> – Directed third-party integrations (Files, Emails, Calendar) and enhanced distributed job queue architecture with robust monitoring and alerting, improving operational resilience.</>,
        <><b>Mentorship & Team Development</b> – Technically led a team of 5 backend engineers, mentoring them on system design, best practices, and delivery of complex, cross-functional projects.</>
      ]
    },
    {
          role: "CTO, Co-Founder",
          company: "DebugsBunny",
          period: "March 2020 – Sept 2021",
          summary: "",
          responsibilities: [
            <><b>End-to-End Product Development</b> – Built the initial MVP for DebugsBunny’s K12 coding education platform, enabling rapid product-market fit validation.</>,
            <><b>Technology Leadership</b> – Defined the tech stack and platform architecture, ensuring scalability and maintainability from the outset.</>,
            <><b>Performance & Scalability Optimizations</b> – Optimized the fair billing engine, achieving <b>8× faster</b> calculations for billions of billing records, and streamlined tax configurations to eliminate manual intervention.</>,
            <><b>Cross-Team & Strategic Initiatives</b> – Directed third-party integrations (Files, Emails, Calendar) and enhanced distributed job queue architecture with robust monitoring and alerting, improving operational resilience.</>,
            <><b>Mentorship & Team Development</b> – Technically led a team of 5 backend engineers, mentoring them on system design, best practices, and delivery of complex, cross-functional projects.</>
          ]
        },
    {
      role: "Platform Architect",
      company: "Dream11",
      period: "Dec 2017 – Feb 2020",
      summary: "",
      responsibilities: [
        <><b>Technical Leadership & Architecture</b> – Led a team of 8 backend engineers, architecting and scaling core Dream11 services: <b>Contest Service (10×+ throughput, 12K write RPS)</b> and <b>Wallet Service (100K write RPS)</b>, ensuring high availability under massive load. Architected Fantasy Tour and Contest Personalization services using Aerospike, Apache Ignite, and Amazon Aurora to deliver scalable, user-specific experiences.</>,
        <><b>Performance & Scalability</b> – Developed a reactive microservices framework using <b>Eclipse Vert.x</b>, now powering 20+ services, significantly improving responsiveness and reducing latency.</>,
        <><b>Revenue Growth Through Features</b> – Designed and delivered the Join Contest via Queue capability, boosting contest join rates and driving a <b>40% increase in revenue</b>.</>,
        <><b>Technology Enablement</b> – Drove adoption of scalable architectures and modern frameworks across the platform, mentoring engineers and fostering a high-performance engineering culture.</>
      ]
    },

  ];

  const earlierRoles = [
    {
      title: "Software Engineer",
      company: "Interactive Brokers",
      dates: "Sept 2016 – Dec 2017",
      points: ["At Interactive Brokers I was a part of the clearing team and worked as an individual contributor which handles Clearing System operations, a part of the trading platform."]
    },
    {
      title: "Tech Lead",
      company: "MedStudio Pvt. Ltd.",
      dates: "Feb 2015 – July 2016",
      points: ["MedStudio is a product development organization that provides solutions in the healthcare domain. I was the first engineer to build the product from scratch, provision, and deploy the application on the Google cloud. I was involved in scaling application from 0 to 100k requests per day."]
    },
    {
      title: "Associate Tech Lead",
      company: "Zycus Infotech Pvt. Ltd.",
      dates: "Sept 2013 – Jan 2015",
      points: []
    },
    {
      title: "Project Assistant",
      company: "IRCC, IIT-Bombay",
      dates: "Nov 2012 – Sept 2013",
      points: []
    },
    {
      title: "Software Test Engineer",
      company: "L&T Infotech",
      dates: "Aug 2011 – Oct 2012",
      points: []
    }
  ];

  const projects = [
    {
      title: "ParkOnGo",
      description:
        "Mobile application to find nearby car and bike parking with real-time availability for informed travel decisions.",
      tech: ["Flutter", "Java", "Firebase", "MySQL", "Google Guice", "Eclipse Vert.x"],
      link: "https://github.com/nileshborole/parkongo-backend",
    },
    {
      title: "MoneyXpert",
      description:
        "A finance website to allow users to search wealth managers and chartered accountants to get jobs done.",
      tech: ["Java", "SpringBoot", "MySQL", "Flutter", "React"],
      link: "https://github.com/nileshborole",
    },
    {
      title: "DB Persistence Framework",
      description:
        "An implementation of the Repository Pattern, abstracting database access for cleaner architecture.",
      tech: ["Java", "MyBatis", "MySQL"],
      link: "https://medium.com/@nileshborole/repository-pattern-6f8ccc1a7569",
    }
  ];

  return (
    <main
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen font-sans scroll-smooth transition-colors duration-300`}
    >
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 shadow-md z-50 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <nav className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4 text-sm">
          <div className="text-xl font-bold">Nilesh Borole</div>
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          <ul className={`md:flex gap-6 ${darkMode ? "text-gray-300" : "text-gray-700"} ${menuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-inherit px-6 pb-4" : "hidden md:flex"}`}>
            {[
              { id: "about", label: "About Me" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "publications", label: "Publications" },
              { id: "resume", label: "Resume" }
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block py-2 md:py-0 transition ${activeSection === id ? "text-blue-500 font-bold" : "hover:text-blue-400"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 pt-36 pb-24" id="about">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div>
          <table>
          <tr>
          <td>
          <img
                src="/nilesh.png"
                alt="Nilesh Borole"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-500"
              />
              </td> <td>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nilesh Borole</h1>
          </td>
          </tr>
          </table>
          </div>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-10">
            Principal Software Engineer at Slack | 13+ years of experience in building high-scale distributed systems
          </p>
          <div className="flex flex-wrap gap-4 text-gray-300">
            <a href="mailto:nilesh30490@gmail.com" className="hover:text-white flex items-center gap-2">
              <Mail className="w-5 h-5" /> Email
            </a>
            <a href="https://www.linkedin.com/in/nborole" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="https://github.com/nileshborole" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div className="grid md:grid-cols-2 gap-12 mt-20" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
          <div>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-400 leading-relaxed">
              I’m a dedicated engineer who thrives on solving complex problems, crafting designs, and architecting scalable systems. At Slack, I lead product development across billing, calendar, and email services, impacting millions of users. Previously at Dream11, I built high-throughput contest and wallet systems that scaled to 100K+ RPS.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="space-y-2 text-gray-400 leading-relaxed">
              <li className="flex items-center gap-2"><Code2 className="w-4 h-4" /> Languages: Java, PHP/Hacklang, SQL</li>
              <li className="flex items-center gap-2"><Zap className="w-4 h-4" /> Frameworks: Spring Boot, Vert.x, MyBatis</li>
              <li className="flex items-center gap-2"><Database className="w-4 h-4" /> Databases: MySQL, Redis, VoltDB, MongoDB, Apache Ignite</li>
              <li className="flex items-center gap-2"><Settings className="w-4 h-4" /> Tools: AWS, Docker, Kubernetes, Grafana, CloudWatch</li>
              <li className="flex items-center gap-2"><Layers className="w-4 h-4" /> Others: Reactive Systems, Distributed Architecture</li>
              <li className="flex items-center gap-2"><Bot className="w-4 h-4" /> AI: AI model integrations, Spring AI, RAG, MCP</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE
      <motion.section id="experience" className="max-w-5xl mx-auto px-6 py-24" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <ul className="space-y-8">
          {experiences.map((exp, idx) => (
            <li key={idx}>
              <h3 className="text-xl font-bold">{exp.role} – {exp.company}</h3>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                {exp.responsibilities?.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </motion.section>
      */}

      {/* Experience */}
        <motion.section
          id="experience"
          className="max-w-5xl mx-auto px-6 py-18"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="text-3xl font-semibold mb-10">Experience</h2>

          <div className="space-y-12">
            {experiences.map((role, idx) => (
              <ExperienceCard key={idx} {...role} />
            ))}

            <div>
              <h3 className="text-xl font-semibold mb-4">Earlier Roles</h3>
              <ul className="space-y-4 text-gray-400">
                {earlierRoles.map((role, idx) => (
                  <li key={idx}>
                    <p className="font-medium text-white">{role.title} — {role.company}</p>
                    <p className="text-sm text-gray-500">{role.dates}</p>
                    <ul className="list-disc list-inside text-sm mt-1">
                      {role.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>


      {/* PROJECTS */}
      <motion.section id="projects" className="max-w-5xl mx-auto px-6 py-24" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded bg-blue-600 text-white">{t}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-500">
                View <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PUBLICATIONS */}
      <motion.section id="publications" className="max-w-5xl mx-auto px-6 py-18" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
        <h2 className="text-3xl font-semibold mb-4">Publications</h2>
        <a href="https://github.com/nileshborole" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
          Multimodal Public Transit Trip Planner with Real-time Transit Data
        </a>
      </motion.section>

      {/* RESUME */}
      <motion.section id="resume" className="max-w-5xl mx-auto px-6 py-20 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <a href="/Nilesh_Borole_Resume.pdf" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition" download>
          Download Resume
        </a>
      </motion.section>

      {/* FOOTER */}
      <footer className={`${darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"} py-6 mt-12`}>
        <div className="max-w-5xl mx-auto px-6 text-center text-sm">
          Built using <span className="font-semibold">ChatGPT</span> © {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}

/* ExperienceCard Component */
function ExperienceCard({ role, company, period, summary, responsibilities }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-l-4 border-blue-500 pl-4"
    >
      <h3 className="text-xl font-semibold">{role} — {company}</h3>
      <p className="text-sm text-gray-500 mb-2">{period}</p>
      <p className="text-gray-400 mb-2">{summary}</p>
      <ul className="list-disc list-inside text-gray-400 text-sm">
        {responsibilities.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </motion.div>
  );
}
