// eslint-disable-next-line
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <div className="text-company-700 w-full py-20 px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
        <div className="lg:w-[90%]">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-5xl font-extrabold"
          >
            Network Engineer
          </motion.h1>
          <motion.ul
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-company-950"
          >
            <li className="mt-4">
              Over a year, I served as a Backbone Engineer at Biznet Networks,
              where I was directly responsible for managing the high-capacity
              server-to-server distribution networking. I was ensuring the core
              network infrastructure fast, and constantly connected.
            </li>
            <li className="mt-4">
              During my college years, I became a Freelance Networker. Managing
              networks at home (private), setting up networks in cafe, building
              connections in villas, and ensuring network stability in hotels.
            </li>
          </motion.ul>
        </div>
        <div className="hidden lg:block"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block"></div>
        <div className="lg:w-[90%]">
          <motion.h1 initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0 }} className="text-5xl font-extrabold">
            IT Support and Development
          </motion.h1>
          <motion.ul initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }} className="text-company-950">
            <li className="mt-4">
              For over two years, I have been working as an IT Support Officer
              at BPR Restu Dewata. I ensure the core banking system runs
              smoothly to operational performance. Maintenance internet network
              stability, maintenance computer equipment, managing CCTV and
              small-scale electrical systems. I also design and develop internal
              applications to improve team efficiency, as well as designing and
              producing entertainment content to brand on social media.
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
