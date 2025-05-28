export interface Project {
  title: string;
  context: string;
  outcome: string;
  skillsUsed: string[];
  roadmap: string[]; 
  category?: string; 
  detailsUrl?: string; 
  themeAccent?: 'green' | 'deepPurple' | 'primaryAccent'; // Added themeAccent field
}

export const projects: Project[] = [
  {
    title: "Yardi Integration & Workflow Automation",
    context: "CIM Group",
    category: "Workflow Automation",
    themeAccent: "primaryAccent", // Default accent
    outcome: "Reduced time spent on manual reporting by 40%. Increased lease renewal follow-through rate by 25%.",
    skillsUsed: ["Yardi/Voyager", "Requirements Gathering", "Workflow Optimization", "Stakeholder Management", "Testing"],
    roadmap: [
      "Phase 1: Requirements Gathering from Property Managers and Leasing Team",
      "Phase 2: Map Current Workflow → Identify Redundant Tasks",
      "Phase 3: Collaborate with Developers to Automate Lease Renewals & Rent Roll Reports",
      "Phase 4: Test Automation Scripts & Validate Data Integrity",
      "Phase 5: Deploy System-Wide & Train On-Site Teams"
    ],
  },
  {
    title: "EHR System Integration for Healthcare Clients",
    context: "DS Technologies",
    category: "EHR Integration",
    // No themeAccent, will use default in card
    outcome: "Successful integration across 3 departments. User adoption reached 95% within the first month.",
    skillsUsed: ["JIRA", "Confluence", "Agile/Scrum", "Documentation", "UAT", "SME Collaboration"],
    roadmap: [
      "Phase 1: Analyze existing EHR infrastructure and client needs",
      "Phase 2: Develop integration plan and define data mapping strategies",
      "Phase 3: Configure and customize EHR modules for seamless workflow",
      "Phase 4: Conduct rigorous UAT with clinical SMEs and iterate based on feedback",
      "Phase 5: Go-live support and post-implementation performance monitoring"
    ],
  },
  {
    title: "Sprint Optimization & Agile Coaching", // "PROTECTX" equivalent
    context: "CACI",
    category: "Agile Coaching",
    themeAccent: "green", // Specific accent for this project
    outcome: "15% increase in sprint velocity. 30% decrease in project rework. Boosted team satisfaction and stakeholder trust.",
    skillsUsed: ["Scrum Mastery", "Agile Coaching", "JIRA", "Sprint Planning", "Metrics Analysis", "Team Training"],
    roadmap: [
      "Phase 1: Observe current Agile ceremonies and team dynamics",
      "Phase 2: Identify bottlenecks in sprint planning and execution",
      "Phase 3: Implement tailored coaching sessions and JIRA workflow enhancements",
      "Phase 4: Introduce improved metrics tracking and reporting for transparency",
      "Phase 5: Facilitate retrospective workshops to embed continuous improvement"
    ],
  },
  {
    title: "Property Operations Dashboard for Executive Decision-Making", // "Kahoot Answers" equivalent
    context: "Spectrum Financial Services",
    category: "Dashboard Design",
    themeAccent: "deepPurple", // Specific accent for this project
    outcome: "Enabled real-time decision-making for rent delinquency and occupancy trends. Executive satisfaction increased significantly post-launch.",
    skillsUsed: ["Visio", "Stakeholder Management", "Data Analysis", "Yardi Integration", "QA Testing", "Dashboard Design"],
    roadmap: [
      "Phase 1: Elicit reporting requirements from executive stakeholders",
      "Phase 2: Design intuitive dashboard mockups and user flows with Visio",
      "Phase 3: Develop data extraction logic from Yardi and other sources",
      "Phase 4: Build and test interactive dashboard components",
      "Phase 5: Present dashboard to executives and gather feedback for refinement"
    ],
  },
  {
    title: "Pandemic Relief Funding Acquisition System",
    context: "CIM Group",
    category: "Process Improvement",
    themeAccent: "primaryAccent", // Default accent
    outcome: "Secured $2M in relief funding with 100% compliance. Reduced application processing time by 50%. Doubled application volume through community outreach.",
    skillsUsed: ["Business Process Improvement", "Stakeholder Collaboration", "Requirements Gathering", "Workflow Automation", "Reporting"],
    roadmap: [
      "Phase 1: Analyze relief program guidelines and application criteria",
      "Phase 2: Design optimized workflow for application intake, review, and submission",
      "Phase 3: Develop automated tools for document management and tracking",
      "Phase 4: Train internal teams on new processes and compliance requirements",
      "Phase 5: Monitor funding status and generate reports for stakeholders"
    ],
  },
  {
    title: "End-to-End Leasing Cycle Digitization",
    context: "Bell Partners",
    category: "CRM Optimization",
    // No themeAccent, will use default in card
    outcome: "Reduced leasing cycle time by 35%. Increased occupancy rate to over 95%. Improved tenant satisfaction scores in the first 3 months.",
    skillsUsed: ["Yardi CRM", "Business Process Mapping", "SOP Development", "Stakeholder Training", "CRM Optimization"],
    roadmap: [
      "Phase 1: Map existing leasing cycle from prospect to move-in",
      "Phase 2: Identify opportunities for digitization and CRM enhancement",
      "Phase 3: Configure Yardi CRM for automated communication and task management",
      "Phase 4: Develop standardized operating procedures (SOPs) and training materials",
      "Phase 5: Roll out new system and provide ongoing support to leasing teams"
    ],
  }
];
