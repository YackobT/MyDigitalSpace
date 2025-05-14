
// ✅ Project 3 - Property Reporting Dashboard
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Project3() {
  return (
    <main className="min-h-screen px-6 py-20 bg-[#f8f5f0] text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e4dcd0] rounded-3xl p-10 shadow-xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Image
            src="/images/project3.png"
            alt="Property Reporting Dashboard"
            width={1000}
            height={600}
            className="rounded-xl mb-6"
          />
          <h1 className="text-3xl font-bold text-[#b48a5d] mb-4">Property Reporting Dashboard</h1>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">Created an interactive dashboard for leasing and rent performance reporting, used by regional property managers.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Tools & Technologies</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Power BI</li>
              <li>SQL Server</li>
              <li>Excel for data prep</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Steps</h2>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Worked with stakeholders to define KPIs</li>
              <li>Extracted historical rent and lease data</li>
              <li>Built and styled dashboards in Power BI</li>
              <li>Trained regional managers on usage</li>
            </ol>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Outcome</h2>
            <p className="text-gray-700">Improved decision-making time by 45% and reduced data request emails by 70%.</p>
          </section>
        </motion.div>
      </div>
    </main>
  )
}