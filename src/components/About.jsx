import skullcandy_all from "../assets/skullcandy-all.png"
import { motion } from "framer-motion";

const About = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-60">
                <h1 className="my-20 text-center text-5xl font-bold">Our Story</h1>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{ duration: 0.5}}
                 className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                    <img src={skullcandy_all} alt="skull_candy_all"></img>
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta eos voluptas qui doloremque vitae minus pariatur quam aliquid iste laborum doloribus, quis delectus sunt. Incidunt, autem ipsum? Sint, blanditiis. Similique id voluptate distinctio odio eveniet inventore, consequuntur deserunt ratione molestias quae dolorem atque repudiandae. Architecto possimus perspiciatis doloribus similique incidunt delectus laborum nihil corrupti. Modi repellat ut laboriosam aspernatur ullam et sequi delectus debitis, soluta aliquid ipsam distinctio velit corrupti nam, iure voluptas inventore culpa ab, nulla quos. Ipsum recusandae repellendus, officia laudantium iure in voluptatum delectus nemo nulla, eligendi debitis! Vitae asperiores eaque possimus error tenetur numquam suscipit, neque dolor nihil dignissimos eos iure rem atque quisquam impedit praesentium harum delectus. Minima facere, alias vel, eos perspiciatis ea soluta ad numquam sed id ab magni adipisci. Rerum vel maiores similique illum? Architecto dicta quibusdam voluptatum nesciunt minus ad reiciendis nostrum quod laborum doloremque neque aperiam esse, suscipit consectetur!</p>
                        </div>
                    </motion.div>
            </div>
  </div>
}

export default About;
