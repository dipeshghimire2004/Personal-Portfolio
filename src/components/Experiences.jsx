import { EXPERIENCES } from "../constants"
import {motion} from "framer-motion"

const Experiences = () => {
  const containerVarient={
    hidden:{opacity:0, y:20},
    visible:{opacity:1, y:0,
      transition:{duration:1, staggerChildren:0.5}
    }
  }

  const itemsVarient={
    hidden:{opacity:0, x:-20},
    visible:{opacity:1, x:0, transition:{duration:0.5}}
  }

  return (
    <motion.section
    initial="hidden"
    whileInView={"visible"}
    variants={containerVarient}
    viewport={{once:true}}

    className="pt-20" id="work">
        <h1 className="mb-12 mt-20 text-center text-4xl font-semibold">Work Experience</h1>
        <div className="space-y-8 p-10">
            {EXPERIENCES.map((experience,index)=>(
                <motion.div
                variants={itemsVarient}
                key={index} className=" border rounded-xl border-stone-50/30 p-9 ">
                    <h1 className="py-3 text-2xl lg:text-3xl">{experience.title}</h1>
                    <p className="text-xl">{experience.company}</p>
                    <p className="text-sm">{experience.duration}</p>
                    <p className="py-3 text-sm">{experience.description}</p>
                </motion.div>
            ))}

        </div>
    </motion.section>
  )
}

export default Experiences