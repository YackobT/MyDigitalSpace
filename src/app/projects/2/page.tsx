// ✅ Project 2 - Agile Workflow Redesign
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Project2() {
  return (
    <main className="min-h-screen px-6 py-20 bg-[#f8f5f0] text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e4dcd0] rounded-3xl p-10 shadow-xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Image
            src="/images/project2.png"
            alt="Agile Workflow Redesign"
            width={1000}
            height={600}
            className="rounded-xl mb-6"
          />
          <h1 className="text-3xl font-bold text-[#b48a5d] mb-4">Agile Workflow Redesign</h1>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">Redesigned Agile sprint ceremonies and backlog grooming process to boost team throughput and reduce sprint rollover.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Tools & Technologies</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Jira</li>
              <li>Scrum / Agile frameworks</li>
              <li>Confluence</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Steps</h2>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Interviewed teams to find blockers</li>
              <li>Audited current workflow board</li>
              <li>Introduced structured backlog grooming</li>
              <li>Standardized daily standups and demo formats</li>
            </ol>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Outcome</h2>
            <p className="text-gray-700">Increased team velocity by 28% and reduced sprint rollover stories by 40% within 3 months.</p>
          </section>
        </motion.div>
      </div>
    </main>
  )
}