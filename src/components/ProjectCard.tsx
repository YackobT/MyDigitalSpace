type ProjectProps = {
  id: number
  title: string
  description: string
}

export default function ProjectCard({ id, title, description }: ProjectProps) {
  return (
    <div className="bg-[#1f1f22] p-6 rounded-xl shadow-md border border-[#2c2c30] transition-transform hover:scale-105 duration-300">
      <img
        src={`/images/project${id}.png`}
        alt={`Screenshot of ${title}`}
        className="w-full h-48 object-cover rounded-md mb-4 border border-[#2c2c30]"
      />
      <h3 className="text-xl font-semibold text-[#c084fc] mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}