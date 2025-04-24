"use client";


import { Button } from "@/components/ui/button";
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
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Yackob Tamire</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Certified Scrum Master and Business Analyst with 5+ years of experience driving operational improvements, optimizing workflows, and ensuring technical success across industries including FinTech and SaaS.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/YT.pdf" download>
              <Button>Download Resume</Button>
            </a>
            <a href="https://www.linkedin.com/in/yackob-tamire/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">LinkedIn</Button>
            </a>
          </div>
        </motion.section>

        {/* Add more sections here like Projects and Testimonials */}

      </motion.div>
    </>
  );
}
