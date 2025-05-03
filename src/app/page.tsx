'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/button';
import HydratedContent from '@/components/HydratedContent';

export default function Home() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <main className="bg-light text-dark font-sans px-6 md:px-24 pt-10 space-y-28">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center text-center"
      >
        <div className="absolute top-4 left-6 text-3xl font-bold">YT</div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-4 mt-10">Yackob Tamire</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-6 leading-relaxed">
          Certified Scrum Master and Business Analyst with 5+ years experience across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="flex gap-4 mb-4">
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
        className="pt-8"
      >
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto border-l border-primary pl-6 relative">
          {[
            {
              company: "DS Technologies Inc",
              role: "Integration Business Analyst",
              desc: "Led EHR system integrations and created user manuals improving training efficiency by 40%. Streamlined testing scripts and collaborated with clinical teams for validation. Helped ensure HIPAA compliance in transition."
            },
            {
              company: "CACI",
              role: "Business Analyst",
              desc: "Enhanced Agile workflows and reduced sprint rework by 30%. Facilitated backlog grooming, sprint planning, and sprint reviews with cross-functional teams. Worked closely with developers and testers to clarify business requirements."
            },
            {
              company: "Spectrum Financial",
              role: "Business Systems Analyst",
              desc: "Automated workflows and boosted efficiency by 25%. Maintained 98% QA pass rate across financial tools. Collaborated with engineers to implement efficient data structures for portfolio insights."
            },
            {
              company: "CIM Group",
              role: "Business Systems Support Analyst",
              desc: "Created reporting tools and supported lease operations for 500+ units. Improved renewal reporting and lease compliance tracking. Worked on vendor systems integration for streamlined operations."
            },
            {
              company: "Bell Partners",
              role: "Senior Leasing Manager",
              desc: "Boosted occupancy by 10% and optimized team performance. Trained junior leasing staff and ensured Fair Housing Act compliance. Led regional marketing strategy for underperforming assets."
            }
          ].map((item, idx) => (
            <div key={idx} className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-xl font-semibold">{item.company}</h3>
              <span className="text-sm text-gray-500">{item.role}</span>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Case Studies with Dropdown */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24"
      >
        <h2 className="text-3xl font-bold text-center mb-16">Case Studies</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              title: "Workflow Automation",
              summary: "Automated financial operations to increase QA pass rates and efficiency.",
              details: (
                <>
                  <p><strong>Overview:</strong> At Spectrum Financial, I led a project to automate several manual operational workflows. This helped reduce error rates, increase speed, and improve month-end reporting consistency.</p>
                  <p><strong>Tools:</strong> Excel Macros, SQL, Power BI, Python, ServiceNow.</p>
                  <p><strong>Steps:</strong> Identified repetitive tasks, built automation scripts, integrated SQL, and deployed Power BI dashboards for visibility.</p>
                  <p><strong>Results:</strong> Boosted efficiency by 25%, achieved 98% QA pass rates, and reduced analyst burden.</p>
                </>
              )
            },
            {
              title: "Agile Workflow Optimization",
              summary: "Improved sprint velocity and reduced rework across Agile teams.",
              details: (
                <>
                  <p><strong>Overview:</strong> At CACI, I streamlined Agile ceremonies, restructured grooming processes, and created shared documentation templates that improved sprint consistency.</p>
                  <p><strong>Tools:</strong> Jira, Confluence, MS Teams, Figma for collaborative refinement.</p>
                  <p><strong>Steps:</strong> Partnered with scrum masters, redefined story templates, conducted retrospectives and velocity audits.</p>
                  <p><strong>Results:</strong> 30% drop in sprint rework, clearer developer expectations, and faster iteration cycles.</p>
                </>
              )
            }
          ].map((item, idx) => (
            <div key={idx} className="border rounded-xl overflow-hidden shadow">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-xl font-semibold"
              >
                {item.title}
                <span className="float-right">{expanded === idx ? '−' : '+'}</span>
              </button>
              <div className={`px-6 pb-4 pt-2 transition-all text-gray-700 ${expanded === idx ? 'block' : 'hidden'}`}>
                <p className="mb-2">{item.summary}</p>
                {item.details}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials – Text Only */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              quote: "Yackob streamlined complex EHR workflows with ease. Outstanding partnership.",
              from: "Director, DS Technologies"
            },
            {
              quote: "Our sprint velocity improvements were directly tied to Yackob’s facilitation.",
              from: "Scrum Master, CACI"
            },
            {
              quote: "Yackob’s workflow automations saved us significant manual effort.",
              from: "Manager, Spectrum Financial"
            }
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
            >
              <p className="text-lg italic mb-4">“{t.quote}”</p>
              <p className="text-sm text-gray-600">– {t.from}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm mt-20">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
