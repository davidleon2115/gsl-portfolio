"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name's David Andres León 😎",
      "I'm a Frontend Developer 🚀",
      "I'm a super kind guy 🌎",
      "I'm a proactive guy 🏋️‍♂️",
      "Guy who loves code 💻",
      "Guy who loves coffe ☕",
      "Guy who loves music 🎵",
    ],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 50,
  });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center overflow-x-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [1, 0, 2, 1] }}
        transition={{ duration: 1 }}
      >
        <Image
          width={150}
          height={150}
          src={"/Image.jpg"}
          alt="Logo Grupo Sanchez Leon"
          className="h-36 w-36 mb-6 relative mx-auto object-cover rounded-full"
        />
      </motion.div>
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          transition={{ duration: 2 }}
          className="text-2xl min-h-16 md:text-3xl font-bold text-center  text-yellow-100"
        >
          {text}
          <Cursor />
        </motion.p>
      </div>
    </div>
  );
}
