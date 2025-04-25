"use client";

import Button from "../components/button";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yackob Tamire – Business Analyst Portfolio</title>
        <meta
          name="description"
          content="Certified Business Analyst and Scrum Master – Portfolio of Yackob Tamire showcasing professional experience, projects, and skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Yackob Tamire – Business Analyst Portfolio" />
        <meta
          property="og:description"
          content="Explore Yackob Tamire's portfolio showcasing business analyst experience, key projects, and professional highlights."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-digital-space.vercel.app" />
        <meta
          property="og:image"
          content="https://source.unsplash.com/featured/?business,portfolio"
        />
      </Head>

      <main className="min-h-screen font-sans text-black bg-white">
        <SpeedInsights />

        {/* Hero Section */}
        <section className="text-center py-20 px-6 md:px-20 bg-gradient-to-r from-gray-50 to-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Yackob Tamire
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Certified Scrum Master and Business Analyst with 5+ years of experience driving
            operational improvements, optimizing workflows, and ensuring technical success
            across industries including FinTech and SaaS.
          </p>
          <div className="mt-8 flex justify-center gap-4">
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
        </section>

        {/* Skills */}
        <section className="py-24 px-6 md:px-20 bg-white border-t">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-sm text-gray-800">
            <span className="bg-gray-100 py-2 rounded">Agile & Scrum</span>
            <span className="bg-gray-100 py-2 rounded">Business Analysis</span>
            <span className="bg-gray-100 py-2 rounded">Stakeholder Management</span>
            <span className="bg-gray-100 py-2 rounded">JIRA & Confluence</span>
            <span className="bg-gray-100 py-2 rounded">SQL & Data Analysis</span>
            <span className="bg-gray-100 py-2 rounded">Wireframing & UX</span>
            <span className="bg-gray-100 py-2 rounded">Process Improvement</span>
            <span className="bg-gray-100 py-2 rounded">Project Management</span>
          </div>
        </section>

        {/* Work Section */}
        <section className="py-24 px-6 md:px-20 bg-gray-100">
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-xl shadow border">
              <img
                src="https://source.unsplash.com/featured/?dashboard,analytics"
                alt="Risk Dashboard"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Enterprise Risk Dashboard</h3>
              <p className="text-sm text-gray-600">
                Launched an enterprise tool at Freddie Mac to monitor risk, alerts, and model
                compliance across business-critical models.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <img
                src="https://source.unsplash.com/featured/?satellite,internet"
                alt="SES Launch"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">SES Product Launch</h3>
              <p className="text-sm text-gray-600">
                Spearheaded the rollout of enterprise-grade internet services across Europe and
                Asia in collaboration with SES global teams.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 md:px-20 bg-white">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <blockquote className="border-l-4 border-gray-300 pl-6 text-gray-700 italic">
              “Yackob brings a rare combination of strategy, heart, and execution. A true partner
              to stakeholders.”
              <footer className="mt-2 text-sm font-medium text-gray-500">– PM, Freddie Mac</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-300 pl-6 text-gray-700 italic">
              “He handled product strategy and international deployment like a seasoned
              consultant.”
              <footer className="mt-2 text-sm font-medium text-gray-500">– Director, SES Satellites</footer>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <footer className="text-center py-12 text-sm text-gray-500 bg-gray-50 border-t">
          © 2025 Yackob Tamire. All rights reserved.
        </footer>
      </main>
    </>
  );
}
