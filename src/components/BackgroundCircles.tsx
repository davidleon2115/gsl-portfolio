import { motion } from "framer-motion";

type Props = {};

export function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 5, 5, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0, 0.4, 0.2, 0.8, 0.2, 0, 1.0],
      }}
      transition={{
        duration: 1,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#0008FF] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className=" absolute border border-[#0008FF] opacity-20 animate-pulse rounded-full h-[300px] w-[300px] mt-52 " />
      <div className=" absolute border border-[#0008FF] opacity-20  rounded-full h-[500px] w-[500px] mt-52 animate-pulse" />
    </motion.div>
  );
}
