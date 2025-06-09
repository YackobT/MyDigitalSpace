export interface Experience {
  role: string;
  company: string;
  dateRange: string;
  impact: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Business Analyst",
    company: "CACI",
    dateRange: "2023 – 2024",
    impact: [ // New impact points for CACI
      "Led requirements gathering sessions with cross-functional stakeholders across federal agencies, translating business needs into over 150 actionable user stories and acceptance criteria.",
      "Acted as Scrum Master proxy, facilitating daily stand-ups, sprint planning, and retrospectives to support Agile delivery across 4+ concurrent sprints.",
      "Designed process workflows and low-fidelity wireframes to support system modernization efforts, reducing manual entry time by 35%.",
      "Partnered with QA and development teams to execute UAT and triage defects, ensuring successful delivery of three high-impact software releases.",
      "Created and maintained product backlogs using Jira and Confluence, enabling transparency and alignment across business, technical, and compliance teams."
    ],
    tags: ["Agile", "JIRA", "Confluence", "Scrum", "Stakeholder Management", "BRD", "User Stories"]
  },
  {
    role: "EHR Implementation Specialist",
    company: "DS Technologies",
    dateRange: "2021 – 2023",
    impact: [
      "Successfully deployed and configured clinical workflows within various EHR systems for multiple healthcare clients.",
      "Developed comprehensive training manuals and user guides, facilitating smooth adoption of new EHR functionalities by clinical staff.",
      "Designed and executed User Acceptance Testing (UAT) plans and test cases, ensuring system stability and compliance with clinical requirements.",
      "Authored validation scripts for EHR system updates and customizations, maintaining data integrity and regulatory compliance."
    ],
    tags: ["EHR", "UAT", "Training", "Validation Scripting", "Healthcare IT", "Workflow Design"]
  },
  {
    role: "Technical Writer & QA Analyst",
    company: "Spectrum Financial",
    dateRange: "2020 – 2021",
    impact: [
      "Produced clear, concise, and accurate technical documentation for proprietary financial software, including user manuals, API guides, and release notes.",
      "Executed rigorous QA testing cycles (functional, regression, usability) to identify software defects and ensure product quality.",
      "Collaborated with development teams to document new features and verify bug fixes.",
      "Improved documentation clarity based on user feedback, reducing support tickets by 10%."
    ],
    tags: ["QA", "Technical Writing", "Software Documentation", "Testing", "Financial Software"]
  },
  {
    role: "Property Operations Analyst",
    company: "CIM Group",
    dateRange: "2018 – 2020",
    impact: [
      "Supported property operations for a diverse real estate portfolio, focusing on process optimization and data analysis.",
      "Provided Yardi system support and training to property management teams, enhancing operational efficiency.",
      "Developed and implemented a streamlined workflow for processing pandemic relief applications for commercial tenants.",
      "Analyzed property performance data to identify trends and recommend operational improvements."
    ],
    tags: ["Yardi", "Real Estate", "Business Operations", "Property Management", "Data Analysis"]
  },
  {
    role: "Leasing Strategist",
    company: "Bell Partners",
    dateRange: "2017 – 2018",
    impact: [
      "Developed and executed innovative leasing strategies for a 400+ unit residential property, consistently exceeding occupancy targets.",
      "Conducted market research and competitor analysis to inform pricing and promotional activities.",
      "Managed online listings and marketing campaigns to attract prospective tenants.",
      "Built strong relationships with residents to foster a positive community environment and encourage renewals."
    ],
    tags: ["Real Estate", "Leasing", "Marketing", "Property Management", "Sales"]
  }
];
