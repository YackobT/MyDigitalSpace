'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Project2() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full h-64 mb-10 rounded-xl overflow-hidden">
          <Image
            src="/images/ticket.png"
            alt="Ticket Management System"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-6">Project 2: Ticket Management System</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>A centralized system to manage internal support tickets, prioritize them, and resolve issues faster.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
          <ul className="list-disc ml-6">
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
          <p>Basic knowledge of REST APIs, backend routing, and user authentication flows.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
          <ol className="list-decimal ml-6">
            <li>Created ticket schema and RESTful routes.</li>
            <li>Integrated user roles and authentication.</li>
            <li>Built frontend views with real-time updates.</li>
            <li>Connected system to internal notification service.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
          <p>Improved issue resolution speed by 50% and reduced backlog through automated assignment.</p>
        </section>
      </motion.div>
    </main>
  )
}
