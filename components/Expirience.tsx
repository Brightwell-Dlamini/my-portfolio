import React from 'react';
import { motion } from 'framer-motion';
import ExpirienceCards from './ExpirienceCards';

type Props = {};

function Expirience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Work Expirience
      </h3>
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
        {/* expirience cards */}
        <ExpirienceCards />
        <ExpirienceCards />
        <ExpirienceCards />
        <ExpirienceCards />
      </div>
    </motion.div>
  );
}

export default Expirience;
