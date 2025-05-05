'use client';

import React from 'react';

export default function ProjectThree() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-6">Project 3: Tableau Compliance Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>
          As part of model governance at Freddie Mac, developed compliance dashboards in Tableau to track reporting cycles,
          issue remediation progress, and key risk indicators (KRIs) for internal models.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Tools and Technologies</h2>
        <ul className="list-disc ml-6">
          <li>Tableau</li>
          <li>Excel / CSV Reports</li>
          <li>SQL (Query Assistance from Dev Team)</li>
          <li>PowerPoint (for stakeholder presentations)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
        <p>
          Familiarity with internal governance cycles, understanding of model lifecycle stages, and ability to translate business KPIs into visuals.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Step-by-Step Instructions</h2>
        <ol className="list-decimal ml-6">
          <li>Collected compliance metrics from audit and model teams.</li>
          <li>Designed high-level layout showing reporting frequency and open issues.</li>
          <li>Created calculated fields to flag overdue activities.</li>
          <li>Worked with stakeholders to finalize visuals and embed into monthly decks.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Expected Outcomes</h2>
        <p>
          Streamlined quarterly reporting, increased audit transparency, and reduced manual Excel reporting by 60%.
        </p>
      </section>
    </main>
  );
}
