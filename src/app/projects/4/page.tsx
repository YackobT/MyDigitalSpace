
// ✅ Project 4 - Electronic Health Record System
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Project4() {
  return (
    <main className="min-h-screen px-6 py-20 bg-[#f8f5f0] text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e4dcd0] rounded-3xl p-10 shadow-xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Image
            src="/images/project4.png"
            alt="Electronic Health Record System"
            width={1000}
            height={600}
            className="rounded-xl mb-6"
          />
          <h1 className="text-3xl font-bold text-[#b48a5d] mb-4">Electronic Health Record System</h1>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">Helped design and deploy a new EHR platform to integrate appointments, billing, and document workflows across clinics.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Tools & Technologies</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Custom EHR system</li>
              <li>API integrations</li>
              <li>Jira</li>
              <li>Figma</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Steps</h2>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Mapped legacy system workflows</li>
              <li>Collaborated with dev team on APIs</li>
              <li>Prototyped designs in Figma</li>
              <li>Supported rollout and onboarding</li>
            </ol>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Outcome</h2>
            <p className="text-gray-700">Unified health records across 6 locations and reduced appointment scheduling time by 33%.</p>
          </section>
        </motion.div>
      </div>
    </main>
  )
}