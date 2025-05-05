'use client';

import React from 'react';

export default function ProjectOne() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-6">Project 1: Workflow Automation Platform</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>This project involved designing and deploying an automated workflow tracking platform for real estate operations across multiple leasing offices.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
        <ul className="list-disc ml-6">
          <li>React & TypeScript</li>
          <li>Next.js</li>
          <li>MongoDB</li>
          <li>Jira, Confluence</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
        <p>Working knowledge of Agile workflows, Jira API, and deployment to Vercel or internal servers.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
        <ol className="list-decimal ml-6">
          <li>Collected requirements from operations managers.</li>
          <li>Designed front-end components using Figma and built them in React.</li>
          <li>Integrated MongoDB for data persistence.</li>
          <li>Enabled automated status tracking using webhook triggers from Jira.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
        <p>Reduced manual status update emails by 90% and improved SLA visibility across internal stakeholders.</p>
      </section>
    </main>
  );
}
