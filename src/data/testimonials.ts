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
    // backgroundImageUrl: "/images/testimonial-bg-1.jpg" // Example placeholder
  },
  // Future testimonials can be added here
  // {
  //   quote: "Another great testimonial about how Yackob helped us succeed.",
  //   name: "Another Person",
  //   company: "Another Company Inc.",
  //   backgroundImageUrl: "/images/testimonial-bg-2.jpg" 
  // }
];
