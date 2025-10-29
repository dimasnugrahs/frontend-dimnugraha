import React from "react";
import { experienceCardData } from "../../data/data";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {experienceCardData.map((card) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: card.id * 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-company-500 group hover:translate-y-[-10px] duration-300 bg-company-50 pb-8"
            key={card.id}
          >
            <div className="px-8 py-6">
              <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-company-200 text-company-800">
                {card.icon}
              </div>
              <div className="font-bold text-xl text-company-950">
                {card.title}
              </div>
              <p className="text-company-950 mb-6">{card.description}</p>
              <p className="text-company-600">Interested:</p>
              <p className="text-company-950 mb-6">{card.experience}</p>
              <p className="text-company-600 mb-2">Tools:</p>
              <div className="flex flex-wrap gap-2">
                {card.items.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 transition hover:bg-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
