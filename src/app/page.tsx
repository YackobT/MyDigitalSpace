'use client';
import { motion } from 'framer-motion'; // 👈 Add this
import Button from "@/components/button";
import HydratedContent from "@/components/HydratedContent";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <main className="bg-light text-dark font-sans px-6 md:px-24 py-16">
      <motion.section
        custom={0}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-screen flex flex-col justify-center items-center text-center"
      >
        {/* ...Hero Content... */}
      </motion.section>
      <button
  onClick={() => {
    document.documentElement.classList.toggle('dark');
  }}
  className="absolute top-6 right-6 text-sm border px-3 py-1 rounded-md bg-dark text-light dark:bg-light dark:text-dark transition"
>
  Toggle Theme
</button>

      <motion.section
        custom={1}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-28"
      >
        {/* ...Experience Content... */}
      </motion.section>

      <motion.section
        custom={2}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24"
      >
        {/* ...Case Studies Content... */}
      </motion.section>

      <motion.section
        custom={3}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-secondary text-center"
      >
        {/* ...Testimonials... */}
      </motion.section>
    </main>
  );
}
