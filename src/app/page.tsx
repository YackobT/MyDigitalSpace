'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/button';
import HydratedContent from '@/components/HydratedContent';

export default function Home() {
  return (
    <main className="bg-light text-dark font-sans px-6 md:px-24 py-16 space-y-32 relative overflow-hidden">
      {/* Decorative Vector Art */}
      <Image src="/images/vector-top.svg" alt="" width={150} height={150} className="absolute top-0 left-0 opacity-20" />
      <Image src="/images/vector-bottom.svg" alt="" width={200} height={200} className="absolute bottom-0 right-0 opacity-20" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-10 flex flex-col justify-center items-center text-center"
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

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-28"
      >
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto border-l border-primary pl-6 relative">
          {[
            {
              company: "DS Technologies Inc",
              role: "Integration Business Analyst",
              bullets: [
                "Led EHR system integrations for multi-site clinics.",
                "Created detailed user manuals that improved training efficiency by 40%.",
                "Collaborated with clinical and compliance teams to ensure HIPAA alignment."
              ]
            },
            {
              company: "CACI",
              role: "Business Analyst",
              bullets: [
                "Reduced sprint rework by 30% by improving Agile backlog processes.",
                "Facilitated refinement, planning, and review ceremonies.",
                "Created business requirements and worked closely with dev teams."
              ]
            },
            {
              company: "Spectrum Financial",
              role: "Business Systems Analyst",
              bullets: [
                "Automated finance workflows to improve QA pass rates by 25%.",
                "Maintained data integrity for loan origination tools.",
                "Provided insight dashboards for portfolio performance."
              ]
            },
            {
              company: "CIM Group",
              role: "Business Systems Support Analyst",
              bullets: [
                "Supported lease operations for 500+ multi-unit properties.",
                "Improved reporting tools like rent roll and renewal trackers.",
                "Handled third-party system integration for lease compliance."
              ]
            },
            {
              company: "Bell Partners",
              role: "Senior Leasing Manager",
              bullets: [
                "Boosted occupancy by 10% through new marketing strategies.",
                "Trained new leasing consultants and improved close rates.",
                "Implemented tools for better resident engagement and retention."
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-xl font-semibold">{item.company}</h3>
              <span className="text-sm text-gray-500">{item.role}</span>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                {item.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
          {[
            {
              title: "EHR System Integration",
              description: "Integrated Electronic Health Record systems and streamlined user onboarding.",
              img: "/images/icon-ehr.png",
            },
            {
              title: "Agile Workflow Optimization",
              description: "Improved sprint velocity and product quality with workflow changes.",
              img: "/images/icon-agile.png",
            },
            {
              title: "Workflow Automation",
              description: "Built automated pipelines for finance reports and QA validation.",
              img: "/images/icon-automation.png",
            },
            {
              title: "Property Reporting Enhancements",
              description: "Designed custom dashboards to monitor rent, renewals, and occupancy.",
              img: "/images/icon-property.png",
            }
          ].map((study, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] text-left">
              <Image
                src={study.img}
                alt={study.title}
                width={80}
                height={80}
                className="m-6 mb-0"
              />
              <div className="p-6 pt-4">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-secondary text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-10 text-lg text-gray-800 italic">
          <blockquote>
            “Yackob streamlined complex EHR workflows with ease. Outstanding partnership.”
            <br />
            <span className="block text-sm not-italic mt-2 text-gray-600">– Director, DS Technologies</span>
          </blockquote>
          <blockquote>
            “Our sprint velocity improvements were directly tied to Yackob’s facilitation.”
            <br />
            <span className="block text-sm not-italic mt-2 text-gray-600">– Scrum Master, CACI</span>
          </blockquote>
          <blockquote>
            “Yackob’s workflow automations saved us significant manual effort.”
            <br />
            <span className="block text-sm not-italic mt-2 text-gray-600">– Manager, Spectrum Financial</span>
          </blockquote>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm mt-20">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
