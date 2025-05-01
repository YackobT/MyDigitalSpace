import Button from "@/components/button";
import HydratedContent from "@/components/HydratedContent";

export default function Home() {
  return (
    <main className="bg-light text-dark font-sans px-6 md:px-32 py-24 space-y-36">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-6xl font-bold tracking-tight">Yackob Tamire</h1>
        <p className="text-lg max-w-xl text-gray-700">
          Certified Scrum Master and Business Analyst with 5+ years of experience optimizing workflows across FinTech, Healthcare, and Real Estate.
        </p>
        <div className="flex gap-6 mt-4">
          <a href="/YT.pdf" download><Button>Resume</Button></a>
          <a href="https://www.linkedin.com/in/yackob-tamire/" target="_blank" rel="noopener noreferrer"><Button>LinkedIn</Button></a>
        </div>
        <HydratedContent />
      </section>

      {/* Experience Section */}
      <section className="space-y-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">Experience</h2>
        {[
          { role: "Integration Business Analyst", company: "DS Technologies", desc: "Led EHR integrations, streamlined validation, and created manuals boosting training by 40%." },
          { role: "Business Analyst", company: "CACI", desc: "Improved Agile workflows and reduced sprint rework by 30%." },
          { role: "Business Systems Analyst", company: "Spectrum Financial", desc: "Automated processes and lifted QA pass rates to 98%." },
          { role: "Business Systems Support Analyst", company: "CIM Group", desc: "Generated reports and supported 500+ units' lease ops." },
          { role: "Senior Leasing Manager", company: "Bell Partners", desc: "Increased occupancy by 10% and led compliance initiatives." }
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <h3 className="text-lg font-medium">{item.role} <span className="text-gray-500">@ {item.company}</span></h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Case Studies Section */}
      <section className="space-y-12">
        <h2 className="text-2xl font-semibold text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { title: "EHR Integration", img: "/images/ehr-system.jpg", desc: "Built validation workflows and trained clinical teams." },
            { title: "Agile Optimization", img: "/images/agile-workflow.jpg", desc: "Improved sprint velocity and sprint planning." },
            { title: "Workflow Automation", img: "/images/workflow-automation.jpg", desc: "Reduced manual ops through financial automations." },
            { title: "Property Reporting", img: "/images/property-reporting.jpg", desc: "Custom rent roll and portfolio occupancy tools." }
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="space-y-10 text-gray-700 italic text-sm">
          <blockquote>“Yackob streamlined complex EHR workflows with ease.” <br /><span className="not-italic text-gray-500">– Director, DS Technologies</span></blockquote>
          <blockquote>“Sprint velocity improved directly from his leadership.” <br /><span className="not-italic text-gray-500">– Scrum Master, CACI</span></blockquote>
          <blockquote>“Workflow automation saved us countless hours.” <br /><span className="not-italic text-gray-500">– Manager, Spectrum Financial</span></blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-xs pt-24">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
