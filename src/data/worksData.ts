// src/data/worksData.ts
import type { ProjectDetails } from '@/components/ProjectModal'; // Adjust path if ProjectDetails is elsewhere

export interface WorkProjectData extends ProjectDetails {
  id: string;
  categoryTag: string;
  description: string;
  imagePlaceholderClass: string;
  imageUrl: string;
}

export const worksData: WorkProjectData[] = [
  {
    id: '1',
    title: "Yardi Integration & Workflow Automation",
    categoryTag: "WORKFLOW AUTOMATION",
    description: "Reduced time spent on manual reporting by 40%. Increased lease renewal follow-through rate by 25%.",
    imagePlaceholderClass: "bg-purple-500",
    imageUrl: "/images/project1.png",
    contextCompany: "CIM Group",
    roadmapPhases: [
      "Phase 1: Requirements Gathering from Property Managers and Leasing Team.",
      "Phase 2: Map Current Workflow → Identify Redundant Tasks.",
      "Phase 3: Collaborate with Developers to Automate Lease Renewals & Rent Roll Reports.",
      "Phase 4: Test Automation Scripts & Validate Data Integrity.",
      "Phase 5: Deploy System-Wide & Train On-Site Teams."
    ],
    outcomeText: "Reduced time spent on manual reporting by 40%. Increased lease renewal follow-through rate by 25%.",
    skillsUtilized: ["Yardi/Voyager", "Requirements Gathering", "Workflow Optimization", "Stakeholder Management", "Testing"]
  },
  {
    id: '2',
    title: "EHR System Integration for Healthcare Clients",
    categoryTag: "EHR INTEGRATION",
    description: "Successful integration across 3 departments. User adoption reached 95% within the first month.",
    imagePlaceholderClass: "bg-gray-700",
    imageUrl: "/images/project2.png",
    contextCompany: "DS Technologies",
    roadmapPhases: [
      "Phase 1: Analyze existing EHR infrastructure and client needs.",
      "Phase 2: Develop integration plan and define data mapping strategies.",
      "Phase 3: Configure and customize EHR modules for seamless workflow.",
      "Phase 4: Conduct rigorous UAT with clinical SMEs and iterate based on feedback.",
      "Phase 5: Go-live support and post-implementation performance monitoring."
    ],
    outcomeText: "Successful integration across 3 departments. User adoption reached 95% within the first month.",
    skillsUtilized: ["JIRA", "Confluence", "Agile/Scrum", "Documentation", "UAT", "SME Collaboration"]
  },
  {
    id: '3',
    title: "Case Management System Modernization for a Civilian Agency", // UPDATED
    categoryTag: "AGILE COACHING", // Kept existing as not specified to change
    description: "Modernize an outdated, manual case tracking system to improve workflow efficiency, reporting accuracy, and user satisfaction.", // UPDATED
    imagePlaceholderClass: "bg-green-500",
    imageUrl: "/images/project3.png",
    contextCompany: "CACI", // UPDATED (was already CACI, confirmed)
    roadmapPhases: [ // UPDATED
      "**Objectives:** Modernize an outdated, manual case tracking system to improve workflow efficiency, reporting accuracy, and user satisfaction.",
      "**Scope:** • Gather and document requirements from 5+ stakeholder groups • Support Agile development of a web-based application • Conduct UAT and support system rollout",
      "**Deliverables:** • Requirements traceability matrix • 150+ user stories with acceptance criteria • Workflow diagrams and wireframes • UAT test scripts and issue logs • Sprint demo slide decks",
      "**Project Plan (8 months):** 1. Discovery & Requirements – 2 months 2. Agile Development (4 Sprints) – 4 months 3. UAT & Feedback Loop – 1 month 4. Go-Live Support & Documentation – 1 month"
    ],
    outcomeText: "**Success Metrics:**\n• Reduced manual data entry time by 35%\n• 95% of users reported improved usability\n• Met 100% of sprint goals across all 4 sprints\n\n**Challenges & Solutions:**\n• Challenge: Conflicting stakeholder priorities\nSolution: Facilitated weekly prioritization workshops to align needs\n• Challenge: Ambiguity in legacy system workflows\nSolution: Conducted shadowing sessions and used process mapping to clarify current-state", // UPDATED
    skillsUtilized: ["Jira", "Confluence", "Lucidchart", "Excel", "MS Teams"] // UPDATED
  },
  {
    id: '4',
    title: "Property Operations Dashboard for Executive Decision-Making",
    categoryTag: "DASHBOARD DESIGN",
    description: "Enabled real-time decision-making for rent delinquency and occupancy trends. Executive satisfaction increased significantly post-launch.",
    imagePlaceholderClass: "bg-purple-500",
    imageUrl: "/images/project4.png",
    contextCompany: "Spectrum Financial Services",
    roadmapPhases: [
     "Phase 1: Elicit reporting requirements from executive stakeholders.",
     "Phase 2: Design intuitive dashboard mockups and user flows with Visio.",
     "Phase 3: Develop data extraction logic from Yardi and other sources.",
     "Phase 4: Build and test interactive dashboard components.",
     "Phase 5: Present dashboard to executives and gather feedback for refinement."
    ],
    outcomeText: "Enabled real-time decision-making for rent delinquency and occupancy trends. Executive satisfaction increased significantly post-launch.",
    skillsUtilized: ["Visio", "Stakeholder Management", "Data Analysis", "Yardi Integration", "QA Testing", "Dashboard Design"]
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
  },
  {
    id: '6',
    title: "End-to-End Leasing Cycle Digitization",
    categoryTag: "CRM OPTIMIZATION",
    description: "Reduced leasing cycle time by 35%. Increased occupancy rate to over 95%. Improved tenant satisfaction scores.",
    imagePlaceholderClass: "bg-gray-700",
    imageUrl: "/images/project6.png",
    contextCompany: "Bell Partners",
    roadmapPhases: [
     "Phase 1: Map existing leasing cycle from prospect to move-in.",
     "Phase 2: Identify opportunities for digitization and CRM enhancement.",
     "Phase 3: Configure Yardi CRM for automated communication and task management.",
     "Phase 4: Develop standardized operating procedures (SOPs) and training materials.",
     "Phase 5: Roll out new system and provide ongoing support to leasing teams."
    ],
    outcomeText: "Reduced leasing cycle time by 35%. Increased occupancy rate to over 95%. Improved tenant satisfaction scores in the first 3 months.",
    skillsUtilized: ["Yardi CRM", "Business Process Management"]
  }
];
