import React from "react";
import AboutCard from "../card/AboutCard";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="bg-company-600 lg:px-20 px-10 py-20">
        <div className="flex justify-center items-center mx-auto text-center">
          <div className="text-company-50">
            <motion.h1
              className="text-4xl font-extrabold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              Hello, I’m Dimas Nugraha.
            </motion.h1>
            <motion.h1
              className="text-4xl font-extrabold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              will guide the journey to explore the layers.
            </motion.h1>
            <motion.p
              className="lg:w-210 text-lg mt-4 mx-auto"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Since beginning my journey as a tech enthusiast. I started the
              tech story by working on Networking for more 1 year. But my hunger
              about technology took me into the deeper sea of technology. I love
              many things, about how a Computer Works, the Computer Components,
              and App Design, System Analysis, the discipline of Database
              Management, to Development an App.
            </motion.p>
          </div>
        </div>
        <AboutCard />
      </section>
    </>
  );
}
