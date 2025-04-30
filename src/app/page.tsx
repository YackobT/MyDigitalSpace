import Button from "@/components/button";
import HydratedContent from '@/components/HydratedContent';

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

      {/* Case Studies */}
      {/* Case Studies Section */}
<section className="py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
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
    ].map((caseStudy, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={caseStudy.img}
          alt={caseStudy.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
          <p className="text-gray-600">{caseStudy.description}</p>
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
