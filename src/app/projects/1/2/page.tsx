'use client';

import React from 'react';

export default function ProjectTwo() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-6">Project 2: Enterprise Ticketing System</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>
          Designed and launched a company-wide ticketing and order management system at SES Satellites. The tool was used to
          streamline tracking of infrastructure requests and service delivery across global enterprise clients.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
        <ul className="list-disc ml-6">
          <li>React</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>Jira Service Management</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
        <p>
          Familiarity with workflow automation tools, customer service operations, and relational database design principles.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
        <ol className="list-decimal ml-6">
          <li>Gathered user pain points from operations and technical teams.</li>
          <li>Mapped internal processes into structured workflows using Jira and Figma.</li>
          <li>Developed frontend components for ticket entry and dashboards.</li>
          <li>Integrated PostgreSQL for ticket storage and SLA tracking.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
        <p>
          Enabled end-to-end visibility for service requests, improved response times by 40%, and established a scalable system
          foundation for new SES product launches.
        </p>
      </section>
    </main>
  );
}
