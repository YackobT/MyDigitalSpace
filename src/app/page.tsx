'use client';
import { motion } from 'framer-motion';
import Button from '@/components/button';
import HydratedContent from '@/components/HydratedContent';

export default function Home() {
  return (
    <main className="bg-light text-dark font-sans px-4 md:px-20 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Yackob Tamire</h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-10 leading-relaxed">
          Certified Scrum Master and Business Analyst with 5+ years experience across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
        className="py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto border-l border-primary pl-6 relative">
          {[
            {
              company: "DS Technologies Inc",
              role: "Integration Business Analyst",
              desc: "Led EHR system integrations and created user manuals improving training efficiency by 40%."
            },
            {
              company: "CACI",
              role: "Business Analyst",
              desc: "Enhanced Agile workflows and reduced sprint rework by 30%."
            },
            {
              company: "Spectrum Financial",
              role: "Business Systems Analyst",
              desc: "Automated workflows and boosted efficiency by 25%."
            },
            {
              company: "CIM Group",
              role: "Business Systems Support Analyst",
              desc: "Created reporting tools and supported lease operations for 500+ units."
            },
            {
              company: "Bell Partners",
              role: "Senior Leasing Manager",
              desc: "Boosted occupancy by 10% and optimized team performance."
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
        className="py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
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
            },
            {
              title: "Leasing Operations Strategy",
              description: "Boosted occupancy via marketing, training, and compliance.",
              img: "/images/leasing-operations.jpg",
            },
          ].map((study, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <img src={study.img} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials as image cards */}
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
            "/images/testimonial-bg-3.jpg"
          ].map((imgPath, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img src={imgPath} alt={`Testimonial ${i + 1}`} className="w-full h-80 object-cover" />
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
