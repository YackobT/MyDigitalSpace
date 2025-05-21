type Props = {
  quote: string
  name: string
}

export default function TestimonialCard({ quote, name }: Props) {
  return (
    <div className="bg-[#1f1f21] border border-white/10 p-6 rounded-lg shadow-sm">
      <p className="italic text-gray-300">"{quote}"</p>
      <p className="mt-4 text-right text-sm text-cyan-400">— {name}</p>
    </div>
  )
}
