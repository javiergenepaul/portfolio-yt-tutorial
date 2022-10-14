import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

// https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B
function About({}: Props) {
    let image =
        'https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B';
    return (
        // <div className="">sample</div>
        <motion.div 
            initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:1.5 }} 
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 md:rounded-lg rounded-full md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] overflow-hidden">
                <img src={image} className="h-full w-full object-cover" alt="" />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#F7Ab0A]/50">little</span>{' '}
                    background
                </h4>
                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisl sem,
                    euismod at ornare pharetra, rhoncus aliquet ipsum. Nulla facilisi. Quisque
                    mattis ullamcorper augue, at sollicitudin tellus consectetur eget. Donec non
                    mauris et justo maximus feugiat. Donec non mauris libero. Quisque rutrum, ante
                    eget feugiat cursus, turpis nunc dignissim eros, nec tempus ante leo a enim.
                    Morbi a tellus ac lorem ultricies dictum a vel risus. Maecenas nec viverra mi.
                    Vivamus tempus justo nec tincidunt tincidunt. Pellentesque sit amet tortor eu
                    ipsum porttitor rhoncus. Aliquam ut luctus quam, id porttitor felis. Integer
                    mattis vulputate nisi, quis tempor ligula ornare sit amet. Nulla blandit nulla
                    vel risus aliquet scelerisque. Nullam bibendum, ante vel posuere egestas, purus
                    ante efficitur quam, fringilla ornare velit sem eget libero. Donec lacinia nisi
                    magna, et ullamcorper urna efficitur euismod. Curabitur elementum blandit erat
                    in scelerisque. Pellentesque rutrum lectus eget risus rutrum rhoncus.
                </p>
            </div>
        </motion.div>
    )
}

export default About
