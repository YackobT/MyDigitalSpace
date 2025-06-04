// src/data/worksData.ts
import type { ProjectDetails } from '@/components/ProjectModal';

export interface WorkProjectData extends ProjectDetails {
  id: string;
  categoryTag: string;
  description: string;
  imagePlaceholderClass?: string; // Kept for now, though ProjectCard doesn't use its color
  imageUrl: string;
}

export const worksData: WorkProjectData[] = [
  {
    id: '1',
    title: "Yardi Integration & Workflow Automation",
    categoryTag: "WORKFLOW AUTOMATION",
    description: "Reduced time spent on manual reporting by 40%. Increased lease renewal follow-through rate by 25%.",
    imagePlaceholderClass: "bg-accent_primary", 
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
    imagePlaceholderClass: "bg-background", // Using a theme color name
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
    title: "Sprint Optimization & Agile Coaching",
    categoryTag: "AGILE COACHING",
    description: "15% increase in sprint velocity, 30% decrease in project rework. Boosted team satisfaction and stakeholder trust.",
    imagePlaceholderClass: "bg-accent_green", // Using a theme color name
    imageUrl: "/images/project3.png",
    contextCompany: "CACI",
    roadmapPhases: [
     "Phase 1: Observe current Agile ceremonies and team dynamics.",
     "Phase 2: Identify bottlenecks in sprint planning and execution.",
     "Phase 3: Implement tailored coaching sessions and JIRA workflow enhancements.",
     "Phase 4: Introduce improved metrics tracking and reporting for transparency.",
     "Phase 5: Facilitate retrospective workshops to embed continuous improvement."
    ],
    outcomeText: "15% increase in sprint velocity. 30% decrease in project rework. Boosted team satisfaction and stakeholder trust.",
    skillsUtilized: ["Scrum Mastery", "Agile"]
  },
  {
    id: '4',
    title: "Property Operations Dashboard for Executive Decision-Making",
    categoryTag: "DASHBOARD DESIGN",
    description: "Enabled real-time decision-making for rent delinquency and occupancy trends. Executive satisfaction increased significantly post-launch.",
    imagePlaceholderClass: "bg-accent_primary",
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
    imagePlaceholderClass: "bg-accent_primary",
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
    imagePlaceholderClass: "bg-background", 
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