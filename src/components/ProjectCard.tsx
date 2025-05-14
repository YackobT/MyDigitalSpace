'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ id, title, description }: { id: number, title: string, description: string }) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="bg-zinc-900 hover:bg-zinc-800 transition p-4 rounded-lg shadow-lg border border-zinc-700">
        <Image
          src={`/images/project${id}.png`}
          alt={title}
          width={500}
          height={300}
          className="rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>
    </Link>
  )
}
