'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Project2() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-[#c084fc]">EHR Integration Suite</h1>
        <Image
          src="/images/project2.png"
          alt="EHR Integration"
          width={900}
          height={500}
          className="rounded-xl mb-6"
        />
        <p className="text-gray-300 mb-4">
          Led the successful integration of Electronic Health Records for multiple clinics. Ensured HIPAA compliance and seamless communication between systems.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Bi-directional data syncing with EHR platforms</li>
          <li>Workflow automation for patient intake and discharge</li>
          <li>Data compliance and audit reporting features</li>
        </ul>
      </motion.div>
    </main>
  )
}