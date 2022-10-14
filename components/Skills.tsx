import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

type Props = {}

function Skills({}: Props) {
    return (
        <motion.div 
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            transition={{ duration:1.5 }}
            className="min-h-screen flex flex-col overflow-hidden m-w-full px-10 justify-evenly mx-auto items-center pt-16">
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">Skills</h3>
            <h3 className="uppercase tracking-[3px]">
                Hover over a skill for currency profienciency
            </h3>
            <div className="grid grid-cols-4 gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    )
}

export default Skills
