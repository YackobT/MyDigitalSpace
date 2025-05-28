export interface Project {
  title: string;
  context: string;
  outcome: string;
  skillsUsed: string[];
  detailsUrl?: string;
  // Optional metadata for future use
  // status?: string;
  // effort?: string;
  // timeline?: string;
}

export const projects: Project[] = [
  {
    title: "Pandemic Relief Application Workflow",
    context: "CIM Group",
    outcome: "$2M secured via streamlined funding process for tenants.",
    skillsUsed: ["Business Ops", "Form UX", "Outreach Coordination", "Process Improvement"],
  },
  {
    title: "EHR Integration Rollout",
    context: "DS Technologies",
    outcome: "Successfully deployed new clinical workflows to 50+ users; created comprehensive training manuals and UAT test cases, leading to 90% user adoption in 3 months.",
    skillsUsed: ["EHR Systems", "UAT", "Stakeholder Comms", "Validation Scripting", "Training"],
  },
  // Example of a more complex project for future reference
  // {
  //   title: "Enterprise Risk Platform Development",
  //   context: "Freddie Mac (via CACI)",
  //   outcome: "Led development of an enterprise risk platform module to monitor and report on regulatory model performance, improving data accuracy by 20%.",
  //   skillsUsed: ["Agile", "Scrum", "JIRA", "Confluence", "Stakeholder Management", "BRD", "Risk Management"],
  //   detailsUrl: "#", // Link to a case study page
  //   status: "Completed",
  //   effort: "High Complexity",
  //   timeline: "9 Months"
  // }
];
