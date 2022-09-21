import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExpirienceCards({}: Props) {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 transition-opacity duration-200 hover:opacity-40 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center xl:w-[200px]"
        src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
        alt="amazon"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of the PAPAFAM</h4>
        <p className="mt-1 text-2xl font-bold">PAPAFAM</p>
        <div className="my-2 flex space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png"
            alt=""
          />{' '}
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
            alt=""
          />{' '}
          <img
            className="h-10 w-10 rounded-full"
            src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png"
            alt=""
          />
        </div>
        <p className="py-5 uppercase text-gray-300">
          Started work... -Ended....
        </p>
        <ul className="list-disc space-y-4 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExpirienceCards;
