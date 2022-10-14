import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[600px] w-[500px] md:w-[600px] xl:w-[900px] snap-start bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className="rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B"
                alt=""
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-ligt">3D Modeller</h4>
                <h4 className="font-bold text-2xl mt-1">Exodia</h4>
                <div className="flex space-x-2 my-2">
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B"
                        alt=""
                    />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B"
                        alt=""
                    />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B"
                        alt=""
                    />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B"
                        alt=""
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started Work... - Ended</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
