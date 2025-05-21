
type TestimonialProps = {
  quote: string
  name: string
}

export default function TestimonialCard({ quote, name }: TestimonialProps) {
  return (
    <div className="bg-[#1f1f22] p-6 rounded-lg shadow-md border border-[#2c2c30]">
      <p className="italic text-gray-300">“{quote}”</p>
      <span className="block text-right mt-4 text-sm text-gray-500">— {name}</span>
    </div>
  )
}