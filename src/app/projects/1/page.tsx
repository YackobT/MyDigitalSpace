'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WorkflowAutomationPlatform() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-6 py-20 bg-dots relative">
      <motion.section
        initial={ opacity: 0, y: 30 }
        animate={ opacity: 1, y: 0 }
        transition={ duration: 0.6 }
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#c084fc] mb-6">Workflow Automation Platform</h1>
        <p className="text-gray-300 mb-6">
          A platform to automate real estate operations across multiple offices.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
          <li>Centralized workflow engine built with Node.js</li><li>Integrated approval flows and user roles</li><li>Cut down manual tasks by 70%</li>
        </ul>
        <Link href="/" className="text-[#c084fc] underline hover:text-purple-300">
          ← Back to home
        </Link>
      </motion.section>
    </main>
  )
}