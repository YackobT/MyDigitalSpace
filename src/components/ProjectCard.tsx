'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  id: number
  title: string
  description: string
}

const ProjectCard = ({ id, title, description }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#1e1e1e] border border-[#333] rounded-xl overflow-hidden shadow-md relative"
    >
      <Image
        src={`/images/project${id}.png`}
        alt={`Project ${id}`}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#f5f5dc]">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-end">
          <Link
            href={`/projects/${id}`}
            className="text-sm text-cyan-400 hover:underline"
          >
            Details →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
