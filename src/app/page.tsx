import Button from "@/components/button";
import HydratedContent from "@/components/HydratedContent";

export default function Home() {
  return (
    <main className="bg-light text-dark font-sans px-6 md:px-24 py-16 space-y-32">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">Yackob Tamire</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl">
          Certified Scrum Master and Business Analyst with 5+ years across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="flex gap-4">
          <a href="/YT.pdf" download><Button>Resume</Button></a>
          <a href="https://www.linkedin.com/in/yackob-tamire/" target="_blank" rel="noopener noreferrer"><Button>LinkedIn</Button></a>
        </div>
        <div className="text-sm text-gray-500">
          <HydratedContent />
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto border-l border-primary pl-6 relative">
          {[
            ["DS Technologies Inc", "Integration Business Analyst", "Led EHR system integrations and created user manuals improving training efficiency by 40%."],
            ["CACI", "Business Analyst", "Enhanced Agile workflows and reduced sprint rework by 30%."],
            ["Spectrum Financial", "Business Systems Analyst", "Automated workflows and boosted efficiency by 25%."],
            ["CIM Group", "Business Systems Support Analyst", "Created reporting tools and supported lease operations for 500+ units."],
            ["Bell Partners", "Senior Leasing Manager", "Boosted occupancy by 10% and optimized team performance."]
          ].map(([company, role, desc], i) => (
            <div key={i} className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1.5"></div>
              <h3 className="text-xl font-semibold">{company}</h3>
              <span className="text-sm text-gray-500">{role}</span>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { title: "EHR System Integration", description: "Integrated EHR systems with validation scripts and training.", img: "/images/ehr-system.jpg" },
            { title: "Agile Workflow Optimization", description: "Improved sprint velocity and reduced rework.", img: "/images/agile-workflow.jpg" },
            { title: "Workflow Automation", description: "Automated financial operations and improved QA.", img: "/images/workflow-automation.jpg" },
            { title: "Property Reporting", description: "Built custom rent rolls and occupancy tools.", img: "/images/property-reporting.jpg" }
          ].map(({ title, description, img }, i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-10 text-lg text-gray-800 italic">
          <blockquote>
            “Yackob streamlined complex EHR workflows with ease. Outstanding partnership.”
            <br /><span className="block text-sm not-italic mt-2 text-gray-600">– Director, DS Technologies</span>
          </blockquote>
          <blockquote>
            “Our sprint velocity improvements were directly tied to Yackob’s facilitation.”
            <br /><span className="block text-sm not-italic mt-2 text-gray-600">– Scrum Master, CACI</span>
          </blockquote>
          <blockquote>
            “Yackob’s workflow automations saved us significant manual effort.”
            <br /><span className="block text-sm not-italic mt-2 text-gray-600">– Manager, Spectrum Financial</span>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm mt-20">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
