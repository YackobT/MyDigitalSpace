'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/button';
import HydratedContent from '@/components/HydratedContent';

export default function Home() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main className="bg-light text-dark font-sans px-6 md:px-24 pt-8 pb-16 space-y-32">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col justify-center items-center text-center mt-[-4rem]"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-4">Yackob Tamire</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-6 leading-relaxed">
          Certified Scrum Master and Business Analyst with 5+ years experience across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="flex gap-4 mb-2">
          <a href="/YT.pdf" download><Button>Resume</Button></a>
          <a href="https://www.linkedin.com/in/yackob-tamire/" target="_blank" rel="noopener noreferrer"><Button>LinkedIn</Button></a>
        </div>
        <span className="text-sm text-gray-500 mt-2"><HydratedContent /></span>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-10"
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
              desc: "Enhanced Agile workflows and reduced sprint rework by 30%. Facilitated backlog grooming, sprint planning, and sprint reviews. Coordinated with product owners to refine requirements."
            },
            {
              company: "Spectrum Financial",
              role: "Business Systems Analyst",
              desc: "Automated workflows and boosted efficiency by 25%. Maintained 98% QA pass rate. Developed internal dashboards for reporting."
            },
            {
              company: "CIM Group",
              role: "Business Systems Support Analyst",
              desc: "Created reporting tools and supported lease operations for 500+ units. Improved vendor system integrations and boosted lease compliance visibility."
            },
            {
              company: "Bell Partners",
              role: "Senior Leasing Manager",
              desc: "Boosted occupancy by 10% and optimized team performance. Managed training and regional marketing for underperforming units."
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

      {/* Case Studies w/ Expandable Details */}
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
              short: "Integrated Electronic Health Record systems and trained staff.",
              details: "Created validation scripts, supported clinical onboarding, and ensured HIPAA compliance during system rollout."
            },
            {
              title: "Agile Workflow Optimization",
              short: "Improved sprint velocity and reduced Agile process rework.",
              details: "Conducted retrospectives and cross-team feedback loops. Led sessions on Jira hygiene and process enhancements."
            },
            {
              title: "Workflow Automation",
              short: "Streamlined financial processes to reduce manual effort.",
              details: "Built automation for portfolio management, reducing processing time by 40% while increasing QA pass rate to 98%."
            },
            {
              title: "Property Reporting Enhancements",
              short: "Developed dynamic reports and improved compliance tracking.",
              details: "Created dashboards for occupancy, rent rolls, and renewals. Integrated external vendor feeds into BI reports."
            }
          ].map((cs, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-[1.02]">
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
                <p className="text-gray-600">{cs.short}</p>
              </button>
              {expanded === i && (
                <div className="px-6 pb-6 text-gray-700 text-sm border-t border-gray-200">
                  {cs.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials as Image Quote Cards */}
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
            {
              quote: "Yackob streamlined complex EHR workflows with ease. Outstanding partnership.",
              from: "Director, DS Technologies",
              bg: "/images/testimonial-bg-1.jpg"
            },
            {
              quote: "Our sprint velocity improvements were directly tied to Yackob&#39;s facilitation.",
              from: "Scrum Master, CACI",
              bg: "/images/testimonial-bg-2.jpg"
            },
            {
              quote: "Yackob&#39;s workflow automations saved us significant manual effort.",
              from: "Manager, Spectrum Financial",
              bg: "/images/testimonial-bg-3.jpg"
            }
          ].map((t, i) => (
            <div
              key={i}
              className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-md h-64 flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${t.bg})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 p-6 text-lg font-medium">
                “{t.quote}”
                <div className="text-sm mt-4 text-gray-200 not-italic font-normal">– {t.from}</div>
              </div>
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
