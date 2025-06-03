export interface Testimonial {
  quote: string;
  name: string;
  company?: string;
  backgroundImageUrl?: string; // Optional: URL for a blurred background image
}

export const testimonials: Testimonial[] = [
  {
    quote: "Yackob’s requirements work eliminated confusion across teams. We shipped cleaner and faster.",
    name: "SME", // Using a more generic name as per original data
    company: "DS Technologies",
    // backgroundImageUrl: "/images/testimonial-bg-1.jpg" // Example placeholder
  },
  {
    quote: "The agile coaching Yackob provided transformed our sprint efficiency and team morale significantly. His insights into our workflow were invaluable.",
    name: "Michael Chen",
    company: "Innovate Solutions Ltd."
    // backgroundImageUrl: "/images/testimonial-bg-2.jpg"
  },
  {
    quote: "Thanks to Yackob's analytical skills, our new operations dashboard provides critical, real-time insights that have revolutionized our decision-making process.",
    name: "Sarah Miller",
    company: "DataDriven Logistics"
    // backgroundImageUrl: "/images/testimonial-bg-3.jpg"
  },
  {
    quote: "Yackob was instrumental in optimizing our Yardi CRM, leading to a 30% boost in sales productivity and better client relationship management.",
    name: "David Rodriguez",
    company: "GreenLeaf Properties"
    // backgroundImageUrl: "/images/testimonial-bg-4.jpg"
  },
  {
    quote: "The process improvement initiative led by Yackob streamlined our core operations beyond expectations, reducing waste and improving turnaround times.",
    name: "Aisha Khan",
    company: "Optima Manufacturing Co."
    // backgroundImageUrl: "/images/testimonial-bg-5.jpg"
  }
];
