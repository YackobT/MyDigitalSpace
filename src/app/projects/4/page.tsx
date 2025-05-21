'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Project4() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-[#c084fc]">Portfolio Analytics Tool</h1>
        <Image
          src="/images/project4.png"
          alt="Portfolio Analytics"
          width={900}
          height={500}
          className="rounded-xl mb-6"
        />
        <p className="text-gray-300 mb-4">
          Developed a robust analytics platform to monitor investment portfolio performance. Enabled stakeholders to identify trends and mitigate risks effectively.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Real-time tracking of asset performance</li>
          <li>Customizable filters and visualization modules</li>
          <li>Secure exportable reports and charts</li>
        </ul>
      </motion.div>
    </main>
  )
}