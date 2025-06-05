// src/data/testimonials.ts
export interface Testimonial {
  quote: string;
  name: string;
  company?: string;
  backgroundImageUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Yackob’s requirements work eliminated confusion across teams. We shipped cleaner and faster.",
    name: "SME",
    company: "DS Technologies",
  },
  {
    quote: "The agile coaching Yackob provided transformed our sprint efficiency and team morale significantly. His insights into our workflow were invaluable.", // Ensuring full quote is used
    name: "SPM",
    company: "CIM Group"
  },
  {
    quote: "Thanks to Yackob's analytical skills, our new operations dashboard provides critical, real-time insights that have revolutionized our decision-making process.", // Ensuring full quote is used
    name: "PM",
    company: "CACI"
  },
  {
    quote: "Yackob was instrumental in optimizing our Yardi CRM, leading to a 30% boost in sales productivity and better client relationship management.", // Ensuring full quote is used
    name: "SBA",
    company: "Spectrum Financial"
  }
  // The 5th testimonial (SBA, CACI - process improvement) should be removed.
];
