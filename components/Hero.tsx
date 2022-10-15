import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi The Name's Gene Paul Mar", 'Guy_who_loves_coffee.tsx', '<ButLovesToCodeMore />'],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295174927_2204961829664450_3190420111181056787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGryMmFP6ARkSwBswf9aCmjMTLx6kaa7VQxMvHqRprtVGUBxJW9R3XrF6jeCGm_Boww3BUtSWOhLyHIZYEwoxej&_nc_ohc=0D0ilCe_hx0AX-VIwfR&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-LIopPJkPjt4daYJ9EGjTtHryn3DoTiYsSCqo9QyPeKA&oe=634D761B"
                alt=""
            />
            <div className='z-20'>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
