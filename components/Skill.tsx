import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

function skill({ directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
                src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B"
                alt=""
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">100%</p>
                </div>
            </div>
        </div>
    )
}

export default skill
