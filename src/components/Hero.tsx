"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Grupo Sanchez Leon 😎",
      "Servicios Profesionales de Topografía 🏞️",
      "Gestión Catastral 🌎",
      "Diseño de Vías 🛤️",
      "Fotogrametría y LIDAR ✈️",
      "Georreferenciación 📍",
      "Parcelaciones 📐🖊",
    ],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 50,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [1, 0, 2, 1] }}
        transition={{ duration: 1 }}
      >
        <Image
          width={150}
          height={150}
          src={"/Logo.png"}
          alt="Logo Grupo Sanchez Leon"
          className="h-36 w-36 mb-6"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{ duration: 2 }}
        className="text-2xl md:text-3xl font-bold text-center  text-yellow-100"
      >
        {text}
        <Cursor />
      </motion.p>
    </div>
  );
}
