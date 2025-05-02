'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/button';
import HydratedContent from '@/components/HydratedContent';

export default function Home() {
  return (
    <main className="bg-light text-dark font-sans px-6 md:px-24 py-16 space-y-32">
      {/* Hero Section */}
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
              description: "Integrated Electronic Health Record systems with validation scripts and user training.",
              img: "/images/ehr-system.jpg",
            },
            {
              title: "Agile Workflow Optimization",
              description: "Improved sprint velocity and reduced rework across Agile teams.",
              img: "/images/agile-workflow.jpg",
            },
            {
              title: "Workflow Automation",
              description: "Automated financial operations to increase QA pass rates and efficiency.",
              img: "/images/workflow-automation.jpg",
            },
            {
              title: "Property Reporting Enhancements",
              description: "Developed custom reports like rent rolls and occupancy tools.",
              img: "/images/property-reporting.jpg",
            }
          ].map((study, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <Image
                src={study.img}
                alt={study.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600">{study.description}</p>
              </div>
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
