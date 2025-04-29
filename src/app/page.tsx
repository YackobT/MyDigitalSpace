import Button from "@/components/button";
import HydratedContent from "@/components/HydratedContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-black font-sans px-6 md:px-20 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Yackob Tamire</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Certified Scrum Master and Business Analyst with 5+ years of experience driving operational improvements, optimizing workflows, and ensuring technical success across industries including FinTech, Healthcare, and Real Estate.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/YT.pdf" download>
            <Button>Download Resume</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/yackob-tamire/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button>LinkedIn</Button>
          </a>
        </div>

        {/* Hydration status */}
        <div className="mt-4 text-gray-500 text-sm">
          <HydratedContent />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Insert case study cards here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Insert testimonial quotes here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-10">
        © 2025 Yackob Tamire. All rights reserved.
      </footer>
    </main>
  );
}
