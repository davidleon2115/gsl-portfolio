"use client";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

export function Header({}: Props) {
  return (
    <header className="fixed top-0 left-0 right-0  flex items-start justify-between p-5 lg:max-w-7xl mx-auto z-20 xl:item-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
        }}
        className="flex flex-row items-center gap-3"
      >
        <SocialIcon
          className="cursor-pointer"
          url="https://www.instagram.com/gsl_topografia/"
          fgColor="#7478FF"
          bgColor="#0008FF26"
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://www.facebook.com/gelver.castilla"
          fgColor="#7478FF"
          bgColor="#0008FF26"
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://api.whatsapp.com/send?phone=573245671739&text=Hola%2C%20estoy%20interesad%40%20en%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20que%20ofrecen.%20He%20visto%20que%20ustedes%20se%20especializan%20en%20varios%20campos%20como%3A%0A%0AGesti%C3%B3n%20catastral%20%F0%9F%8C%8E%0ADise%C3%B1o%20de%20v%C3%ADas%20%F0%9F%9B%A4%EF%B8%8F%0AFotogrametr%C3%ADa%20y%20LiDAR%20%E2%9C%88%EF%B8%8F%0AGeorreferenciaci%C3%B3n%20%F0%9F%93%8D%0AParcelaciones%20%F0%9F%93%90%F0%9F%96%8A%EF%B8%8F%0A%0APodr%C3%ADan%20proporcionarme%20m%C3%A1s%20detalles%20sobre%20estos%20servicios%2C%20sus%20beneficios%20y%20c%C3%B3mo%20podr%C3%ADan%20ayudarme%20en%20mi%20proyecto%3F%0A%0AGracias%20de%20antemano%20por%20su%20atenci%C3%B3n.%0A%0ASaludos"
          fgColor="#7478FF"
          bgColor="#0008FF26"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
        }}
        className="flex flex-row items-center text-yellow-400 cursor-pointer gap-3"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#7478FF"
          bgColor="#0008FF26"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#7478FF] dark:text-[#7478FF]">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
