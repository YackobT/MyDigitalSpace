export interface Testimonial {
  quote: string;
  name: string;
  company?: string;
  backgroundImageUrl?: string; // Optional: URL for a blurred background image
}

export const testimonials: Testimonial[] = [
  {
    quote: "Yackob’s requirements work eliminated confusion across teams. We shipped cleaner and faster.",
    name: "SME",
    company: "DS Technologies",
    // backgroundImageUrl: "/images/testimonial-bg-1.jpg"
  },
  {
    quote: "The agile coaching Yackob provided transformed our sprint efficiency and team morale significantly. His insights into our workflow were invaluable.",
    name: "SPM",
    company: "CIM Group"
    // backgroundImageUrl: "/images/testimonial-bg-2.jpg"
  },
  {
    quote: "Thanks to Yackob's analytical skills, our new operations dashboard provides critical, real-time insights that have revolutionized our decision-making process.",
    name: "PM",
    company: "CACI"
    // backgroundImageUrl: "/images/testimonial-bg-3.jpg"
  },
  {
    quote: "Yackob was instrumental in optimizing our Yardi CRM, leading to a 30% boost in sales productivity and better client relationship management.",
    name: "SBA",
    company: "Spectrum Financial"
    // backgroundImageUrl: "/images/testimonial-bg-4.jpg"
  }
  // Removed the 5th testimonial (SBA, CACI - process improvement)
];
