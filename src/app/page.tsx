"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import Button from "../components/button";

export default function Portfolio() {
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
        <meta property="og:description" content="Explore Yackob Tamire's portfolio showcasing business analyst experience, key projects, and professional highlights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-digital-space.vercel.app" />
        <meta property="og:image" content="https://source.unsplash.com/featured/?business,portfolio" />
      </Head>

      <div className="min-h-screen bg-white text-black px-4 md:px-20 py-16 font-sans">
        <SpeedInsights />

        {/* Hero */}
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

        {/* Projects */}
        <section className="py-24 bg-gray-100 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <img src="https://source.unsplash.com/featured/?dashboard,analytics" alt="Dashboard" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise Risk Dashboard</h3>
              <p className="text-sm text-gray-600">
                Launched an enterprise tool at Freddie Mac to monitor risk, alerts, and model compliance across business-critical models.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <img src="https://source.unsplash.com/featured/?satellite,internet" alt="SES" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">SES Product Launch</h3>
              <p className="text-sm text-gray-600">
                Spearheaded the rollout of enterprise-grade internet services across Europe and Asia in collaboration with SES global teams.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="max-w-3xl mx-auto space-y-10">
            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
              “Yackob brings a rare combination of strategy, heart, and execution. A true partner to stakeholders.”
              <footer className="mt-2 text-sm text-gray-500 font-medium">– PM, Freddie Mac</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
              “He handled product strategy and international deployment like a seasoned consultant.”
              <footer className="mt-2 text-sm text-gray-500 font-medium">– Director, SES Satellites</footer>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <footer className="text-center py-12 text-sm text-gray-500 bg-gray-50">
          © {new Date().getFullYear()} Yackob Tamire. All rights reserved.
        </footer>
      </div>
    </>
  );
}
