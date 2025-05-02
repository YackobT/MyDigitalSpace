'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/button';
import HydratedContent from '@/components/HydratedContent';

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "EHR System Integration",
      description: "Integrated Electronic Health Record systems with validation scripts and user training.",
      details: [
        "Collaborated with cross-functional teams to align technical workflows with compliance needs.",
        "Developed automation scripts for testing key integration points, reducing errors by 35%.",
        "Led end-user onboarding sessions, significantly improving adoption and satisfaction."
      ],
      img: "/images/ehr-system.jpg",
    },
    {
      title: "Agile Workflow Optimization",
      description: "Improved sprint velocity and reduced rework across Agile teams.",
      details: [
        "Redesigned backlog grooming processes, reducing cycle time by 25%.",
        "Facilitated retrospective improvements that boosted team morale and velocity.",
        "Built reports for sprint trends and bottlenecks using Jira & Confluence."
      ],
      img: "/images/agile-workflow.jpg",
    },
    {
      title: "Workflow Automation",
      description: "Automated financial operations to increase QA pass rates and efficiency.",
      details: [
        "Created automated audit scripts that increased testing coverage by 60%.",
        "Reduced manual processing by integrating rule-based automation tools.",
        "Trained internal teams on using Power Automate & custom dashboards."
      ],
      img: "/images/workflow-automation.jpg",
    },
    {
      title: "Property Reporting Enhancements",
      description: "Developed custom reports like rent rolls and occupancy tools.",
      details: [
        "Designed Tableau dashboards for real-time rent and occupancy metrics.",
        "Worked with stakeholders to align KPIs with business needs.",
        "Improved report refresh times by optimizing SQL queries."
      ],
      img: "/images/property-reporting.jpg",
    },
  ];

  return (
    <main className="bg-light text-dark font-sans px-6 md:px-24 py-16 space-y-32">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">Yackob Tamire</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-10 leading-relaxed">
          Certified Scrum Master and Business Analyst with 5+ years experience across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="flex gap-4 mb-6">
          <a href="/YT.pdf" download><Button>Resume</Button></a>
          <a href="https://www.linkedin.com/in/yackob-tamire/" target="_blank" rel="noopener noreferrer"><Button>LinkedIn</Button></a>
        </div>
        <span className="text-sm text-gray-500"><HydratedContent /></span>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24"
      >
        <h2 className="text-3xl font-bold text-center mb-16">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img src={study.img} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3
                  className="text-xl font-semibold cursor-pointer mb-2 hover:text-primary transition"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {study.title}
                </h3>
                <p className="text-gray-600">{study.description}</p>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-sm text-gray-700 mt-4 space-y-2 overflow-hidden"
                    >
                      {study.details.map((point, idx) => (
                        <li key={idx}>• {point}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials (unchanged) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-secondary text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "/images/testimonial-bg-1.jpg",
            "/images/testimonial-bg-2.jpg",
            "/images/testimonial-bg-3.jpg",
          ].map((bg, i) => (
            <div
              key={i}
              className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-md h-64 flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 p-6 text-lg font-medium">
                <p>“Yackob's impact was immediate and measurable.”</p>
                <div className="text-sm mt-4 text-gray-200 not-italic font-normal">– {["DS Technologies", "CACI", "Spectrum Financial"][i]}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <footer className="text-center text-gray-400 text-sm mt-20">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
