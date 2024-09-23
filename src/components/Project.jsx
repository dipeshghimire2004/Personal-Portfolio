import React from 'react'
import {PROJECTS} from '../constants'
import { motion } from 'framer-motion'
import { MdArrowOutward } from 'react-icons/md'


function Project() {
  return (
    <section className='pt-20' id="projects">
        <motion.h2
        initial={{opacity:0, scale:0.9}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1}}
        className='mb-8 text-center text-3xl lg:text-4xl'>Projects</motion.h2>
        
        <div
        className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {PROJECTS.map((projects) =>(
                <div key={projects.id}
                
                className='group relative overflow-hidden rounded-3xl'>

                    <img src={projects.image}
                        alt={projects.name}
                        className='h-full w-full object-cover 
                        transition-transform duration-500 group-hover:scale-110'/>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white backdrop-blur-lg 
                     duration-500 '> 
                        <h3 className='mb-2 text-3xl'>{projects.name}</h3>
                        <p className='mb-12 p-4'>{projects.description}</p> 
                        <motion.a
                         initial={{opacity:0, scale:0.9}}
                         whileInView={{opacity:0, scale:1}}
                         transition={{duration:1}}
                         whileHover={{opacity:1,scale:1.1}}
 
                       
                        href={projects.githubLink} target="_blank"
                            rel="noopener noreferrer" className='rounded-full
                            bg-white px-4 py-2 text-black hover:bg-gray-300'>

                            <div
                           
                            
                            className='flex items-center'>
                                <span>View on GitHub</span>
                                <MdArrowOutward />
                            </div> 
                        </motion.a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Project
