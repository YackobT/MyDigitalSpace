
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Project3() {
  return (
    <main className="min-h-screen bg-[#141417] text-white px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-[#c084fc]">Agile Reporting Dashboard</h1>
        <Image
          src="/images/project3.png"
          alt="Agile Reporting"
          width={900}
          height={500}
          className="rounded-xl mb-6"
        />
        <p className="text-gray-300 mb-4">
          Built dashboards that visually track sprint progress, highlight blockers, and improve Agile team transparency across large portfolios.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Integrated with JIRA and Azure DevOps</li>
          <li>Dynamic charts for burndown, velocity, and epic status</li>
          <li>Daily auto-sync with live team boards</li>
        </ul>
      </motion.div>
    </main>
  )
}