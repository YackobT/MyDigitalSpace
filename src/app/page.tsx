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
      <section className="py-16 bg-white rounded-lg shadow-lg max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "EHR System Integration – DS Technologies",
              desc: "Led full integration of EHR systems, collaborated with SMEs to map workflows, supported UAT, and created training manuals that boosted adoption by 40%."
            },
            {
              title: "Agile Workflow Optimization – CACI",
              desc: "Reduced sprint rework by 30% and improved Agile velocity by 15% via better sprint planning and continuous stakeholder alignment."
            },
            {
              title: "Financial Workflow Automation – Spectrum Financial",
              desc: "Automated financial workflows, improving efficiency by 25% and achieving a 98% QA pass rate through strong documentation and testing."
            },
            {
              title: "Property Reporting Enhancements – CIM Group",
              desc: "Built custom reports like rent rolls and occupancy summaries, improving leasing decisions for a 500+ unit property."
            },
            {
              title: "Leasing Operations Revamp – Bell Partners",
              desc: "Boosted occupancy by 10% and optimized the leasing process while ensuring full Fair Housing compliance."
            }
          ].map(({ title, desc }) => (
            <div key={title} className="bg-gray-50 p-6 rounded shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2 text-primary">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
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
