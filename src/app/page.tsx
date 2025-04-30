import Button from "@/components/button";
import HydratedContent from '@/components/HydratedContent';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-light text-dark font-sans px-6 md:px-24 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-dark mb-4 tracking-tight">Yackob Tamire</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Certified Scrum Master and Business Analyst with 5+ years of experience driving operational improvements, optimizing workflows, and ensuring technical success across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/YT.pdf" download>
            <Button>Download Resume</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/yackob-tamire/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button>LinkedIn</Button>
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <HydratedContent />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-light">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="relative border-l border-primary max-w-4xl mx-auto pl-6">

          {[
            {
              company: "DS Technologies Inc",
              role: "Integration Business Analyst",
              description: "Led EHR system integrations, streamlined validation testing, and produced user manuals that improved training efficiency by 40%."
            },
            {
              company: "CACI",
              role: "Business Analyst",
              description: "Enhanced Agile workflows, reduced sprint rework by 30%, and improved stakeholder alignment across projects."
            },
            {
              company: "Spectrum Financial",
              role: "Business Systems Analyst",
              description: "Automated financial workflows, maintained 98% QA pass rate, and drove a 25% boost in operational efficiency."
            },
            {
              company: "CIM Group",
              role: "Business Systems Support Analyst",
              description: "Supported lease/vendor operations for 500+ units, created rent roll reports, and improved renewal rates."
            },
            {
              company: "Bell Partners",
              role: "Senior Leasing Manager",
              description: "Boosted occupancy by 10%, ensured Fair Housing compliance, and optimized leasing team performance."
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-4 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-xl font-semibold text-dark">{job.company}</h3>
              <span className="text-sm text-gray-500">{job.role}</span>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </motion.div>
          ))}

        </div>
      </section>
    </main>
  );
}
