import Button from '../components/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">THIS IS THE NEW BUILD</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
        Certified Scrum Master and Business Analyst with 5+ years experience
        driving operational improvements, optimizing workflows, and ensuring
        technical success across industries including FINTech and SaaS.
      </p>
      <div className="flex space-x-4">
        <Button>
          <a href="/YT.pdf" download>
            Download Resume
          </a>
        </Button>
        <Button>
          <a
            href="https://linkedin.com/in/yackob-tamire"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  );
}
