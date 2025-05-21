'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id: number
  title: string
  description: string
}

export default function ProjectCard({ id, title, description }: Props) {
  return (
    <div className="border border-white/10 bg-[#1d1d1f] p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow duration-300">
      <Image
        src={`/images/project${id}.png`}
        alt={`Project ${id}`}
        width={600}
        height={300}
        className="rounded-md mb-4 w-full"
      />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <Link
        href={`/projects/${id}`}
        className="inline-block mt-4 text-sm text-cyan-400 underline hover:text-cyan-300"
      >
        Details →
      </Link>
    </div>
  )
}
