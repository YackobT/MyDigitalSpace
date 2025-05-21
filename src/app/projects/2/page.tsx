'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EHRIntegrationSuite() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-6 py-20 bg-dots relative">
      <motion.section
        initial={ opacity: 0, y: 30 }
        animate={ opacity: 1, y: 0 }
        transition={ duration: 0.6 }
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#c084fc] mb-6">EHR Integration Suite</h1>
        <p className="text-gray-300 mb-6">
          Integrated EHR workflows to streamline compliance and reporting.
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
          <li>Synced with 3rd party EHR systems via HL7/FHIR</li><li>Improved patient record availability by 60%</li><li>Enabled cross-departmental compliance</li>
        </ul>
        <Link href="/" className="text-[#c084fc] underline hover:text-purple-300">
          ← Back to home
        </Link>
      </motion.section>
    </main>
  )
}