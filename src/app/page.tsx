import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-8 font-sans">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4">Yackob Tamire</h1>
        <p className="text-xl max-w-2xl">
          Certified Scrum Master and Business Analyst with 5+ years of experience
          driving operational improvements, optimizing workflows, and ensuring
          technical success across industries including FinTech and SaaS.
        </p>
        <div className="mt-6">
          <Button className="mr-4">Download Resume</Button>
          <Button variant="outline">LinkedIn</Button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">DS Technologies Inc</h3>
              <p className="text-sm text-muted-foreground">Integration Business Analyst | Jul 2024 - Mar 2025</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Led EHR integration with 100% on-schedule deployment.</li>
                <li>Reduced error rates by 20% with better validation scripts.</li>
                <li>Cut incident reports by 25% using browser console tools.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">CACI</h3>
              <p className="text-sm text-muted-foreground">Business Analyst | May 2023 - Jun 2024</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Reduced rework by 30% via workflow optimization.</li>
                <li>Led UAT sessions achieving 95% user satisfaction.</li>
                <li>Drove 20% improvement in support response time.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-lg list-disc list-inside">
          <li>SQL & PostgreSQL</li>
          <li>Technical Documentation</li>
          <li>Workflow Optimization</li>
          <li>UAT & Incident Analysis</li>
          <li>Zendesk & Browser Console</li>
          <li>Agile / Scrum Methodology</li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Key Achievements</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>95% stakeholder satisfaction at CACI through cross-functional alignment.</li>
          <li>$2M relief funding acquisition at CIM Group via streamlined outreach.</li>
          <li>30% reduction in project rework through agile best practices.</li>
        </ul>
      </section>

      {/* Interests */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Personal Interests</h2>
        <p className="text-lg">Stock investing, soccer strategy, and podcast production.</p>
      </section>
    </div>
  );
}
