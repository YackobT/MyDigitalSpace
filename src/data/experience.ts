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
    dateRange: "2023 – 2025",
    impact: [
      "Led Agile ceremonies (sprint planning, daily scrums, sprint reviews, retrospectives) for a cross-functional team of 8, ensuring alignment with project goals and user stories.",
      "Authored and maintained comprehensive Business Requirements Documents (BRDs), user stories, and process flows, translating complex business needs into actionable development tasks.",
      "Facilitated JAD sessions with stakeholders to gather requirements, define scope, and resolve conflicts, leading to a 15% improvement in development velocity.",
      "Reduced rework by 30% through meticulous requirements validation and clear communication between business and technical teams.",
      "Achieved a 95% stakeholder satisfaction rate through proactive communication, expectation management, and timely delivery of solutions."
    ],
    tags: ["Agile", "JIRA", "Confluence", "Scrum", "Stakeholder Management", "BRD", "User Stories"]
  },
  {
    role: "EHR Implementation Specialist", // Placeholder Role
    company: "DS Technologies",
    dateRange: "2021 – 2023", // Placeholder Dates
    impact: [
      "Successfully deployed and configured clinical workflows within various EHR systems for multiple healthcare clients.",
      "Developed comprehensive training manuals and user guides, facilitating smooth adoption of new EHR functionalities by clinical staff.",
      "Designed and executed User Acceptance Testing (UAT) plans and test cases, ensuring system stability and compliance with clinical requirements.",
      "Authored validation scripts for EHR system updates and customizations, maintaining data integrity and regulatory compliance."
    ],
    tags: ["EHR", "UAT", "Training", "Validation Scripting", "Healthcare IT", "Workflow Design"]
  },
  {
    role: "Technical Writer & QA Analyst", // Placeholder Role
    company: "Spectrum Financial",
    dateRange: "2020 – 2021", // Placeholder Dates
    impact: [
      "Produced clear, concise, and accurate technical documentation for proprietary financial software, including user manuals, API guides, and release notes.",
      "Executed rigorous QA testing cycles (functional, regression, usability) to identify software defects and ensure product quality.",
      "Collaborated with development teams to document new features and verify bug fixes.",
      "Improved documentation clarity based on user feedback, reducing support tickets by 10%."
    ],
    tags: ["QA", "Technical Writing", "Software Documentation", "Testing", "Financial Software"]
  },
  {
    role: "Property Operations Analyst", // Placeholder Role
    company: "CIM Group",
    dateRange: "2018 – 2020", // Placeholder Dates
    impact: [
      "Supported property operations for a diverse real estate portfolio, focusing on process optimization and data analysis.",
      "Provided Yardi system support and training to property management teams, enhancing operational efficiency.",
      "Developed and implemented a streamlined workflow for processing pandemic relief applications for commercial tenants.",
      "Analyzed property performance data to identify trends and recommend operational improvements."
    ],
    tags: ["Yardi", "Real Estate", "Business Operations", "Property Management", "Data Analysis"]
  },
  {
    role: "Leasing Strategist", // Placeholder Role
    company: "Bell Partners",
    dateRange: "2017 – 2018", // Placeholder Dates
    impact: [
      "Developed and executed innovative leasing strategies for a 400+ unit residential property, consistently exceeding occupancy targets.",
      "Conducted market research and competitor analysis to inform pricing and promotional activities.",
      "Managed online listings and marketing campaigns to attract prospective tenants.",
      "Built strong relationships with residents to foster a positive community environment and encourage renewals."
    ],
    tags: ["Real Estate", "Leasing", "Marketing", "Property Management", "Sales"]
  }
];
