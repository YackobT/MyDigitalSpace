export interface Project {
  title: string;
  context: string;
  outcome: string;
  skillsUsed: string[];
  detailsUrl?: string; // This field can be used if a detailed case study page exists
}

export const projects: Project[] = [
  {
    title: "Yardi Integration & Workflow Automation",
    context: "CIM Group",
    outcome: "Reduced time spent on manual reporting by 40%. Increased lease renewal follow-through rate by 25%.",
    skillsUsed: ["Yardi/Voyager", "Requirements Gathering", "Workflow Optimization", "Stakeholder Management", "Testing"],
  },
  {
    title: "EHR System Integration for Healthcare Clients",
    context: "DS Technologies",
    outcome: "Successful integration across 3 departments. User adoption reached 95% within the first month.",
    skillsUsed: ["JIRA", "Confluence", "Agile/Scrum", "Documentation", "UAT", "SME Collaboration"],
  },
  {
    title: "Sprint Optimization & Agile Coaching",
    context: "CACI",
    outcome: "15% increase in sprint velocity. 30% decrease in project rework. Boosted team satisfaction and stakeholder trust.",
    skillsUsed: ["Scrum Mastery", "Agile Coaching", "JIRA", "Sprint Planning", "Metrics Analysis", "Team Training"],
  },
  {
    title: "Property Operations Dashboard for Executive Decision-Making",
    context: "Spectrum Financial Services",
    outcome: "Enabled real-time decision-making for rent delinquency and occupancy trends. Executive satisfaction increased significantly post-launch.",
    skillsUsed: ["Visio", "Stakeholder Management", "Data Analysis", "Yardi Integration", "QA Testing", "Dashboard Design"],
  },
  {
    title: "Pandemic Relief Funding Acquisition System",
    context: "CIM Group",
    outcome: "Secured $2M in relief funding with 100% compliance. Reduced application processing time by 50%. Doubled application volume through community outreach.",
    skillsUsed: ["Business Process Improvement", "Stakeholder Collaboration", "Requirements Gathering", "Workflow Automation", "Reporting"],
  },
  {
    title: "End-to-End Leasing Cycle Digitization",
    context: "Bell Partners",
    outcome: "Reduced leasing cycle time by 35%. Increased occupancy rate to over 95%. Improved tenant satisfaction scores in the first 3 months.",
    skillsUsed: ["Yardi CRM", "Business Process Mapping", "SOP Development", "Stakeholder Training", "CRM Optimization"],
  }
];
