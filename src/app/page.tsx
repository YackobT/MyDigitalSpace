"use client";

import Button from "@/components/button";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Yackob Tamire – Business Analyst Portfolio</title>
        <meta name="description" content="Certified Business Analyst and Scrum Master – Portfolio of Yackob Tamire showcasing professional experience, projects, and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Yackob Tamire – Business Analyst Portfolio" />
        <meta property="og:description" content="Explore Yackob Tamire's portfolio showcasing business analyst experience, key projects, and professional highlights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-digital-space.vercel.app" />
        <meta property="og:image" content="/images/portfolio-og.png" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-black font-sans">
        <SpeedInsights />

        {/* Hero */}
        <section className="text-center py-24">
          <h1 className="text-5xl font-bold mb-6">Yackob Tamire</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Certified Scrum Master and Business Analyst with 5+ years of experience driving operational improvements, optimizing workflows, and ensuring technical success across industries including FinTech, Healthcare, and Real Estate.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/YT.pdf" download>
              <Button>Download Resume</Button>
            </a>
            <a href="https://linkedin.com/in/yackob-tamire" target="_blank" rel="noopener noreferrer">
              <Button>LinkedIn</Button>
            </a>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-12 px-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">EHR System Integration – DS Technologies</h3>
              <p className="text-gray-600">
                Led full integration of Electronic Health Record systems, collaborated with SMEs to map workflows, supported UAT, and created training manuals that boosted adoption by 40%.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Agile Workflow Optimization – CACI</h3>
              <p className="text-gray-600">
                Conducted workshops reducing sprint rework by 30% and improved Agile team velocity by 15% through better sprint planning and continuous stakeholder alignment.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Financial Workflow Automation – Spectrum Financial</h3>
              <p className="text-gray-600">
                Automated complex financial workflows, improving operational efficiency by 25% and achieving a 98% QA pass rate through rigorous documentation and testing.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Property Reporting Enhancements – CIM Group</h3>
              <p className="text-gray-600">
                Built custom reporting tools including rent rolls and occupancy summaries, driving smarter leasing and property management decisions.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Leasing Operations Revamp – Bell Partners</h3>
              <p className="text-gray-600">
                Increased occupancy by 10% and trained leasing teams to optimize conversion rates while ensuring full Fair Housing compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <blockquote className="border-l-4 border-gray-400 pl-6 text-gray-600 italic">
              “Yackob streamlined complex EHR workflows with ease. Outstanding partnership.”
              <footer className="mt-2 text-sm font-semibold text-gray-500">– Director, DS Technologies</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-400 pl-6 text-gray-600 italic">
              “Our sprint velocity improvements were directly tied to Yackob’s facilitation.”
              <footer className="mt-2 text-sm font-semibold text-gray-500">– Scrum Master, CACI</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-400 pl-6 text-gray-600 italic">
              “Yackob’s workflow automations saved us significant manual effort.”
              <footer className="mt-2 text-sm font-semibold text-gray-500">– Manager, Spectrum Financial Services</footer>
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-sm text-gray-500 bg-gray-100">
          © 2025 Yackob Tamire. All rights reserved.
        </footer>
      </main>
    </>
  );
}
