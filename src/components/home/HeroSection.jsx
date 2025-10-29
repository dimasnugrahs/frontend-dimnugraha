// eslint-disable-next-line
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div className="px-20">
        <section className="h-screen flex justify-center items-center text-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5 }}
              className="text-5xl lg:text-6xl font-extrabold text-company-800"
            >
              Tech Enthusiast & Development
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="subtitle text-lg mt-4 text-company-800"
            >
              Design and build simple things, and love whatever I do.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="subtitle text-lg text-company-800"
            >
              Let's explore more.
            </motion.p>
          </div>
        </section>
      </div>
    </>
  );
}
