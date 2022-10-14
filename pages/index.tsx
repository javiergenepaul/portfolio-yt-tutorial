import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap snap-mandatorys overflow-scroll z-0">
            <Head>
                <title>Javi portfolio</title>
            </Head>

            <Header />

            <section id="hero" className="snap-start">
                <Hero />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>
            
            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>

            <section id='skills' className='snap-center'>
                <Skills />
            </section>

            {/* Projects */}

            {/* Contact Me */}
        </div>
    )
}

export default Home
