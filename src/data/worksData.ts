// src/data/worksData.ts
import type { ProjectDetails } from '@/components/ProjectModal';

export interface WorkProjectData extends ProjectDetails {
  id: string;
  categoryTag: string;
  description: string;
  imagePlaceholderClass: string;
  imageUrl: string;
}

export const worksData: WorkProjectData[] = [
  // Project id: '1' ("Yardi Integration & Workflow Automation") is REMOVED
  {
    id: '2',
    title: "EHR System Integration for Healthcare Clients", // Remains same
    categoryTag: "EHR INTEGRATION", // Remains same
    description: "Successful integration across 3 departments. User adoption reached 95% within the first month.", // Remains same
    imagePlaceholderClass: "bg-gray-700", // Preserved
    imageUrl: "/images/project2.png", // Preserved
    contextCompany: "DS Technologies", // Ensure this is set (was already DS Technologies)
    roadmapPhases: [ // UPDATED
      "**Objectives:** Integrate a new Electronic Health Record (EHR) system to streamline patient data access, improve care coordination, and ensure compliance with federal healthcare standards.",
      "**Scope:** • Collaborate with healthcare providers to define system needs • Map legacy data for EHR migration • Support API integration with existing clinical and billing tools • Ensure HIPAA-compliant workflows",
      "**Deliverables:** • Business requirements documentation • Data mapping matrix and interface specs • 100+ user stories across patient intake, records, billing • UAT test cases and validation results • Training support materials for end users",
      "**Project Plan (9 months):** 1. Stakeholder Alignment & Requirements – 2 months 2. Data Mapping & API Design – 2 months 3. Agile Development & Integration (5 Sprints) – 3 months 4. UAT, Training & Rollout – 2 months"
    ],
    outcomeText: "**Success Metrics:**\n• 40% reduction in time spent accessing patient records\n• 100% data integrity validated during migration\n• Successful go-live with zero critical defects\n\n**Challenges & Solutions:**\n• Challenge: Inconsistent data formats from legacy systems\nSolution: Collaborated with dev team to standardize formats via middleware\n• Challenge: Limited stakeholder availability\nSolution: Scheduled structured weekly check-ins with defined decision points", // UPDATED
    skillsUtilized: ["Jira", "Confluence", "Figma", "Postman", "Excel", "MS Teams"] // UPDATED
  },
  {
    id: '3',
    title: "Case Management System Modernization for a Civilian Agency",
    categoryTag: "AGILE COACHING",
    description: "Modernize an outdated, manual case tracking system to improve workflow efficiency, reporting accuracy, and user satisfaction.",
    imagePlaceholderClass: "bg-green-500",
    imageUrl: "/images/project3.png",
    contextCompany: "CACI",
    roadmapPhases: [
      "**Objectives:** Modernize an outdated, manual case tracking system to improve workflow efficiency, reporting accuracy, and user satisfaction.",
      "**Scope:** • Gather and document requirements from 5+ stakeholder groups • Support Agile development of a web-based application • Conduct UAT and support system rollout",
      "**Deliverables:** • Requirements traceability matrix • 150+ user stories with acceptance criteria • Workflow diagrams and wireframes • UAT test scripts and issue logs • Sprint demo slide decks",
      "**Project Plan (8 months):** 1. Discovery & Requirements – 2 months 2. Agile Development (4 Sprints) – 4 months 3. UAT & Feedback Loop – 1 month 4. Go-Live Support & Documentation – 1 month"
    ],
    outcomeText: "**Success Metrics:**\n• Reduced manual data entry time by 35%\n• 95% of users reported improved usability\n• Met 100% of sprint goals across all 4 sprints\n\n**Challenges & Solutions:**\n• Challenge: Conflicting stakeholder priorities\nSolution: Facilitated weekly prioritization workshops to align needs\n• Challenge: Ambiguity in legacy system workflows\nSolution: Conducted shadowing sessions and used process mapping to clarify current-state",
    skillsUtilized: ["Jira", "Confluence", "Lucidchart", "Excel", "MS Teams"]
  },
  {
    id: '4',
    title: "End-to-End Documentation & QA for Proprietary Financial Software Suite", // UPDATED
    categoryTag: "DOCUMENTATION & QA", // UPDATED
    description: "Ensured product reliability and usability by delivering clear technical documentation and executing comprehensive QA testing.", // UPDATED
    imagePlaceholderClass: "bg-purple-500", // Preserved
    imageUrl: "/images/project4.png", // Preserved
    contextCompany: "A Financial Software Company", // UPDATED
    roadmapPhases: [ // UPDATED
      "**Objectives:** Ensure product reliability and usability by delivering clear technical documentation and executing comprehensive QA testing across the company’s financial software products.",
      "**Scope:** • Create technical manuals and API documentation • Support major software release cycles through QA testing • Collaborate with developers to validate feature functionality • Incorporate user feedback into iterative doc improvements",
      "**Deliverables:** • 3 complete user manuals (loan processing, reporting, admin dashboard) • 2 API integration guides • 15+ release notes and change logs • QA test plans and defect reports • Documentation improvement plan based on user feedback",
      "**Project Plan (12 months):** 1. Initial Product Walkthrough & Doc Audit – 1 month 2. Documentation Development & QA Setup – 3 months 3. Agile QA & Doc Updates (per release) – 6 months 4. Final Revisions, Stakeholder Reviews & User Training Content – 2 months"
    ],
    outcomeText: "**Success Metrics:**\n• Reduced support ticket volume by 10% through improved documentation\n• Logged and validated 120+ defects across 5 release cycles\n• Achieved 100% documentation delivery within sprint timelines\n\n**Challenges & Solutions:**\n• Challenge: Inconsistent developer input on new features\nSolution: Instituted short weekly syncs with dev team to document features in real-time\n• Challenge: Lack of formal documentation standards\nSolution: Developed a living documentation style guide adopted by two additional product teams", // UPDATED
    skillsUtilized: ["Confluence", "Jira", "MS Word", "Postman", "Selenium", "Snagit"] // UPDATED
  },
  {
    id: '5',
    title: "Pandemic Relief Funding Acquisition System",
    categoryTag: "PROCESS IMPROVEMENT",
    description: "Secured $2M in relief funding with 100% compliance. Reduced application processing time by 50%.",
    imagePlaceholderClass: "bg-purple-500",
    imageUrl: "/images/project5.png",
    contextCompany: "CIM Group",
    roadmapPhases: [
     "Phase 1: Analyze relief program guidelines and application criteria.",
     "Phase 2: Design optimized workflow for application intake, review, and submission.",
     "Phase 3: Develop automated tools for document management and tracking.",
     "Phase 4: Train internal teams on new processes and compliance requirements.",
     "Phase 5: Monitor funding status and generate reports for stakeholders."
    ],
    outcomeText: "Secured $2M in relief funding with 100% compliance. Reduced application processing time by 50%. Doubled application volume through community outreach.",
    skillsUtilized: ["Business Process Improvement", "Stakeholder Collaboration", "Requirements Gathering", "Workflow Automation", "Reporting"]
  }
  // Project id: '6' ("End-to-End Leasing Cycle Digitization") is REMOVED
];
