'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Project1() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-[#c084fc]">Workflow Automation Platform</h1>
        <Image
          src="/images/project1.png"
          alt="Workflow Automation"
          width={900}
          height={500}
          className="rounded-xl mb-6"
        />
        <p className="text-gray-300 mb-4">
          A comprehensive solution designed to automate real estate operations across multi-office environments. Features include document workflows, scheduling, and alert systems.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Automated lease processing and compliance reminders</li>
          <li>Custom dashboard for KPIs and metrics</li>
          <li>Integrated with CRM and cloud storage tools</li>
        </ul>
      </motion.div>
    </main>
  )
}
