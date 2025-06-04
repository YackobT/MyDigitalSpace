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
    quote: "I am thrilled to highlight Yackob's outstanding performance as a dedicated and skilled employee, notably achieving a 95% lease renewal rate through exceptional property management efforts.",
    name: "Senior Property Manager",
    company: "Bell Partners"
    // backgroundImageUrl: "/images/testimonial-bg-2.jpg"
  },
  {
    quote: "Thanks to Yackob's analytical skills, our new operations dashboard provides critical, real-time insights that have revolutionized our decision-making process.",
    name: "Sarah Miller",
    company: "DS Technologies"
    // backgroundImageUrl: "/images/testimonial-bg-3.jpg"
  },
  {
    quote: "Yackob was instrumental in optimizing our Yardi CRM, leading to a 30% boost in sales productivity and better client relationship management.",
    name: "David Rodriguez",
    company: "CIM Group"
    // backgroundImageUrl: "/images/testimonial-bg-4.jpg"
  },
  {
    quote: "The process improvement initiative led by Yackob streamlined our core operations beyond expectations, reducing waste and improving turnaround times.",
    name: "PM",
    company: "CACI"
    // backgroundImageUrl: "/images/testimonial-bg-5.jpg"
  }
];
