'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Project2() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6">Project 2: Agile Workflow Redesign</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>Led redesign of Agile workflow systems for distributed development teams to improve velocity tracking and team coordination.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
          <ul className="list-disc ml-6">
            <li>Jira Software</li>
            <li>Confluence</li>
            <li>Slack</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
          <p>Understanding of Agile Scrum, Kanban, and remote team collaboration challenges.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
          <ol className="list-decimal ml-6">
            <li>Evaluated current sprint boards and team rituals.</li>
            <li>Introduced story point estimation training.</li>
            <li>Integrated new reporting dashboards.</li>
            <li>Held Agile workshops for product owners.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
          <p>Increased sprint delivery rate by 20% and reduced missed deadlines by 40%.</p>
        </section>
      </motion.div>
    </main>
  )
}
