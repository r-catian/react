import skull_candy from "../assets/skull-crusher.png"
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Skull Candy</motion.h1>
                <motion.span 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Crusher Evo</motion.span>
                <motion.p 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-3xl">
                Skullcandy is a known and trusted brand for headphones, so if you are looking for a headphone set, then a headset from this company is ideal for you. The brand has a wide range of products, so if you go online on shopping sites such as Flipkart, you will find a plethora of.
                </motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8"> 
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x: 100, opacity: 0 }}
                        animate={{x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                         src={skull_candy} alt="skull_candy" />
                    </div>
            </div>
        </div>
  </div>
}
export default Hero
