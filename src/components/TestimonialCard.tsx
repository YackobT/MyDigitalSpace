export default function TestimonialCard({ quote, name }: { quote: string, name: string }) {
  return (
    <div className="bg-[#2D2D2D] p-6 rounded-xl shadow-md border border-[#F5F5DC]">
      <p className="italic text-gray-300">&quot;{quote}&quot;</p>
      <span className="block text-right mt-4 text-sm text-[#F5F5DC]">— {name}</span>
    </div>
  )
}
