import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1664165263956-79ac4d05fa29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md-w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo autem
          placeat perspiciatis ullam nihil. Earum architecto maxime nihil ut
          voluptas itaque ipsam, beatae et alias placeat eius vero cupiditate
          eum praesentium explicabo recusandae iste repellat, corrupti dicta
          dolorem. Recusandae minus molestiae quae et! Voluptatem earum eum
          temporibus laudantium aliquam accusantium optio qui dicta officia,
          doloribus ipsam iure quae perferendis animi at! Dolorem, rem! Cumque
          dolor consequuntur facere veritatis officia, aliquid deserunt illo,
          accusantium excepturi, sit necessitatibus neque amet laborum.
          Aspernatur possimus modi, tempora repellat, rerum fugit adipisci eaque
          hic cumque quod ab animi itaque doloremque, ut impedit ducimus dolor.
          Modi?
        </p>
      </div>
    </motion.div>
  );
}
