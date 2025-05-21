'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WorkflowAutomationPlatform() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-6 py-20 bg-dots relative">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6">Workflow Automation Platform</h1>
        <p className="mb-4 text-gray-300">
          Developed an internal workflow automation tool to track risk-related tasks, alerts, and approvals across departments. Integrated dashboards, secure comment history, and document repository.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li>Dashboard for real-time model risk tracking</li>
          <li>Centralized alert review and resolution flow</li>
          <li>Role-based comment system and audit trail</li>
        </ul>
        <Link href="/" className="text-cyan-400 underline">
          ← Back to Home
        </Link>
      </motion.section>
    </main>
  )
}
