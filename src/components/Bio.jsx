import { BIO } from "../constants"
import { motion } from "framer-motion"

const Bio = () => {
  return (
    <section className='flex max-w-4xl flex-col gap-12 pt-20' id='bio'>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='text-center text-3xl lg:text-4xl'>
        Bio
      </motion.h2> 
      <motion.div
        initial={{ y: 100 }} // Start 100px to the left
        whileInView={{ y: 0 }} // Move to original position when in view
        transition={{ duration: 1 }} // Duration of animation
      >
        {BIO.map((bio, index) => (
          <p
            key={index}
            className='mb-4 text-lg lg:text-xl'>
            {bio}
          </p>
        ))}
      </motion.div>    
    </section>
  )
}

export default Bio
