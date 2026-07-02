import React from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations.js";

const SectionWrapper = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, margin: "-10%" }}
    variants={staggerContainer}
    className={`py-12 md:py-20 px-4 md:px-6 max-w-6xl mx-auto w-full flex flex-col gap-6 ${className}`}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
