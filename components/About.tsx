import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.img
        className="-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover  md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/gerv_nkule.jpg"
        alt="Gervinho"
      />
      <div className="space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci non
          aperiam est culpa nihil sapiente quod eum doloribus quidem ab nesciunt
          voluptatum nemo dicta dolorem cupiditate, minus eveniet corrupti!
          Deserunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptates delectus eveniet possimus tenetur ut laboriosam officiis
          ullam. Molestiae quae sapiente, officia neque reiciendis culpa nisi
          qui consequatur voluptas magni perspiciatis. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Dicta vero repellendus accusamus
          nesciunt modi eveniet magnam quo perspiciatis, libero voluptates
          voluptatem itaque quod voluptas, cupiditate ipsa quisquam nobis
          assumenda. Odio.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
