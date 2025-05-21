'use client'
import React from 'react'
import { motion } from 'framer-motion'

type TestimonialCardProps = {
  quote: string
  name: string
}

const TestimonialCard = ({ quote, name }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#1e1e1e] border border-[#333] rounded-lg p-4 text-sm text-gray-300"
    >
      <p className="italic">&ldquo;{quote}&rdquo;</p>
      <p className="text-right mt-2 text-[#f5f5dc] font-medium">— {name}</p>
    </motion.div>
  )
}

export default TestimonialCard
