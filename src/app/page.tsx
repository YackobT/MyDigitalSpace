'use client';

import Button from '../components/button';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yackob Tamire – Business Analyst Portfolio</title>
        <meta
          name="description"
          content="Creative Business Analyst & Scrum Master. Explore Yackob’s portfolio showcasing project success, business impact, and tech execution."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white text-black px-4 md:px-20 py-16 font-sans"
      >
        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Yackob Tamire</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Creative Business Analyst & Certified Scrum Master with a passion for clarity, structure, and human-centered solutions.
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

        {/* Skills Section */}
        <section className="text-center mb-24">
          <h2 className="text-3xl font-bold mb-8">Core Skills</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <li className="px-4 py-2 bg-gray-100 rounded">Agile & Scrum</li>
            <li className="px-4 py-2 bg-gray-100 rounded">Business Process Mapping</li>
            <li className="px-4 py-2 bg-gray-100 rounded">Data Analysis</li>
            <li className="px-4 py-2 bg-gray-100 rounded">Wireframing</li>
            <li className="px-4 py-2 bg-gray-100 rounded">SQL</li>
            <li className="px-4 py-2 bg-gray-100 rounded">Stakeholder Management</li>
          </ul>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 bg-gray-50 rounded-xl">
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
                Led the development of a dashboard at Freddie Mac to monitor risk, alerts, and compliance for high-risk financial models.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <img
                src="https://source.unsplash.com/featured/?satellite,internet"
                alt="SES Product Launch"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">SES Product Launch</h3>
              <p className="text-sm text-gray-600">
                Managed the global rollout of internet services across Asia and Europe, delivering full enterprise readiness in 3 months.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <blockquote className="border-l-4 border-gray-300 pl-6 text-gray-700 italic">
              “Yackob brings a rare combination of strategy, heart, and execution. A true partner to stakeholders.”
              <footer className="mt-2 text-sm font-medium text-gray-500">– PM, Freddie Mac</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-300 pl-6 text-gray-700 italic">
              “He handled product strategy and international deployment like a seasoned consultant.”
              <footer className="mt-2 text-sm font-medium text-gray-500">– Director, SES Satellites</footer>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <footer className="text-center py-12 text-sm text-gray-500 bg-gray-100 mt-12 rounded-t-xl">
          © 2025 Yackob Tamire. All rights reserved.
        </footer>
      </motion.main>
    </>
  );
}
