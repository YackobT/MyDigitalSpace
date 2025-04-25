"use client";

import Button from "@/components/button";
import { motion } from "framer-motion";
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
        <meta property="og:image" content="https://source.unsplash.com/featured/?business,portfolio" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-white text-black px-4 md:px-20 py-16 font-sans"
      >
        <SpeedInsights />

        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Yackob Tamire</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
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

        {/* Case Studies Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-xl shadow border">
              <img src="/images/risk-dashboard.jpg" alt="Risk Dashboard" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise Risk Dashboard</h3>
              <p className="text-sm text-gray-600">
                Launched an enterprise tool at Freddie Mac to monitor risk, alerts, and model compliance across business-critical models.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border">
              <img src="/images/ses-launch.jpg" alt="SES Launch" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">SES Product Launch</h3>
              <p className="text-sm text-gray-600">
                Spearheaded the rollout of enterprise-grade internet services across Europe and Asia with SES.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border">
              <img src="/images/tableau-report.jpg" alt="Tableau Reporting" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tableau Reporting</h3>
              <p className="text-sm text-gray-600">
                Developed analytical dashboards improving model oversight at Freddie Mac.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border">
              <img src="/images/compliance-automation.jpg" alt="Compliance Automation" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compliance Automation</h3>
              <p className="text-sm text-gray-600">
                Automated compliance tasks and reduced turnaround time by 30% using Agile methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border">
              <img src="/images/roadmap-strategy.jpg" alt="Roadmap Strategy" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Roadmap Strategy</h3>
              <p className="text-sm text-gray-600">
                Led multi-team collaboration sessions to align product goals with business objectives at SES Satellites.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <blockquote className="border-l-4 border-gray-300 pl-6 text-gray-700 italic">
              “Yackob consistently delivered insights that shaped strategic decision-making for model risk management.”
              <footer className="mt-2 text-sm font-medium text-gray-500">– Manager, Freddie Mac</footer>
            </blockquote>

            <blockquote className="border-l-4 border-gray-300 pl-6 text-gray-700 italic">
              “An exceptional partner bridging technical teams and business units seamlessly.”
              <footer className="mt-2 text-sm font-medium text-gray-500">– Director, SES Satellites</footer>
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 text-sm text-gray-500">
          © 2025 Yackob Tamire. All rights reserved.
        </footer>
      </motion.div>
    </>
  );
}
