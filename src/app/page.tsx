"use client";

import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 md:px-20 py-16 font-sans">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Yackob Tamire</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Certified Scrum Master and Business Analyst with 5+ years of experience driving operational improvements, optimizing workflows, and ensuring technical success across industries including FinTech and SaaS.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/YT.pdf" download>
            <Button>Download Resume</Button>
          </a>
          <a href="https://www.linkedin.com/in/yackob-tamire/" target="_blank" rel="noopener noreferrer">
            <Button>LinkedIn</Button>
          </a>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border p-6 rounded shadow">
            <Image src="/images/risk-dashboard.jpg" alt="Risk Dashboard" width={600} height={300} className="mb-4 rounded"/>
            <h3 className="text-xl font-semibold mb-2">Enterprise Risk Dashboard – Freddie Mac</h3>
            <p>Built and launched a risk alert monitoring system across critical models to increase compliance and reduce oversight delays.</p>
          </div>
          <div className="border p-6 rounded shadow">
            <Image src="/images/ses.jpg" alt="SES Launch" width={600} height={300} className="mb-4 rounded"/>
            <h3 className="text-xl font-semibold mb-2">SES Global Internet Rollout</h3>
            <p>Led product deployment of enterprise internet services across Europe & Asia, enhancing delivery with partner coordination.</p>
          </div>
          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Model Risk Governance Tool</h3>
            <p>Oversaw the creation of a model oversight platform to track FHFA feedback and internal threshold breaches.</p>
          </div>
          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Onboarding Automation</h3>
            <p>Designed and managed automated workflow for onboarding analysts, reducing ramp-up time by 40%.</p>
          </div>
          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Data Pipeline Revamp – FinTech</h3>
            <p>Improved data ingestion reliability and dashboard accuracy by optimizing backend processes and QA validation.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
          <blockquote className="border-l-4 border-blue-600 pl-6 italic">
            “Yackob brings a rare combination of strategy, heart, and execution. A true partner to stakeholders.”
            <footer className="mt-2 text-sm text-gray-500">– PM, Freddie Mac</footer>
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-6 italic">
            “He handled product strategy and international deployment like a seasoned consultant.”
            <footer className="mt-2 text-sm text-gray-500">– Director, SES Satellites</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-12 border-t">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
