'use client';

import Button from "@/components/button";
import HydratedContent from '@/components/HydratedContent';

export default function Home() {
  return (
    <main className="min-h-screen bg-light text-dark font-sans px-6 md:px-24 py-16">
      
      {/* Hero Section */}
      <section className="relative text-center mb-20">
        {/* Top-right Buttons */}
        <div className="absolute right-0 top-0 mt-4 mr-4 flex gap-3">
          <a href="/YT.pdf" download>
            <Button>Download Resume</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/yackob-tamire/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>LinkedIn</Button>
          </a>
        </div>

        {/* Centered Name & Intro */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-dark mb-4 tracking-tight">Yackob Tamire</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Certified Scrum Master and Business Analyst with 5+ years of experience driving operational improvements, optimizing workflows, and ensuring technical success across FinTech, Healthcare, and Real Estate.
        </p>

        <div className="mt-6 text-sm text-gray-500">
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
              title: "Integration Business Analyst",
              details: "Led EHR system integrations, streamlined validation testing, and produced user manuals that improved training efficiency by 40%."
            },
            {
              company: "CACI",
              title: "Business Analyst",
              details: "Enhanced Agile workflows, reduced sprint rework by 30%, and improved stakeholder alignment across projects."
            },
            {
              company: "Spectrum Financial",
              title: "Business Systems Analyst",
              details: "Automated financial workflows, maintained 98% QA pass rate, and drove a 25% boost in operational efficiency."
            },
            {
              company: "CIM Group",
              title: "Business Systems Support Analyst",
              details: "Supported lease/vendor operations for 500+ units, created rent roll reports, and improved renewal rates."
            },
            {
              company: "Bell Partners",
              title: "Senior Leasing Manager",
              details: "Boosted occupancy by 10%, ensured Fair Housing compliance, and optimized leasing team performance."
            }
          ].map((job, i) => (
            <div key={i} className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1.5" />
              <h3 className="text-xl font-semibold text-dark">{job.company}</h3>
              <span className="text-sm text-gray-500">{job.title}</span>
              <p className="mt-2 text-gray-700">{job.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
          ].map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200">
              <img
                src={caseStudy.img}
                alt={caseStudy.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{caseStudy.title}</h3>
                <p className="text-gray-600 text-sm">{caseStudy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary text-center">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <div className="max-w-4xl mx-auto grid gap-10 text-lg text-gray-800 italic">
          <blockquote>“Yackob streamlined complex EHR workflows with ease. Outstanding partnership.”<br /><span className="block text-sm not-italic mt-2 text-gray-600">– Director, DS Technologies</span></blockquote>
          <blockquote>“Our sprint velocity improvements were directly tied to Yackob’s facilitation.”<br /><span className="block text-sm not-italic mt-2 text-gray-600">– Scrum Master, CACI</span></blockquote>
          <blockquote>“Yackob’s workflow automations saved us significant manual effort.”<br /><span className="block text-sm not-italic mt-2 text-gray-600">– Manager, Spectrum Financial</span></blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm mt-16">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
