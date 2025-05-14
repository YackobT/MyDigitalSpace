// Example for `/projects/1/page.tsx`

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Project1() {
  return (
    <main className="min-h-screen px-6 py-20 bg-[#f8f5f0] text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e4dcd0] rounded-3xl p-10 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/project1.png"
            alt="Workflow Automation Platform"
            width={1000}
            height={600}
            className="rounded-xl mb-6"
          />

          <h1 className="text-3xl font-bold text-[#b48a5d] mb-4">Workflow Automation Platform</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">Designed and deployed an automated workflow tracking platform for real estate operations across multiple leasing offices.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Tools & Technologies</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>React & TypeScript</li>
              <li>Next.js</li>
              <li>MongoDB</li>
              <li>Jira, Confluence</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Steps</h2>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Collected requirements from operations managers</li>
              <li>Designed front-end in Figma, built in React</li>
              <li>Integrated MongoDB for persistence</li>
              <li>Used webhooks to auto-track status via Jira</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Outcome</h2>
            <p className="text-gray-700">Reduced manual emails by 90% and improved SLA visibility across teams.</p>
          </section>
        </motion.div>
      </div>
    </main>
  )
}
