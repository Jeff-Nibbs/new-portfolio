import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TagCloud } from '@frank-mayer/react-tag-cloud'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
function About() {
  // set up ref for about
  const about = useRef(null)

  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // useEffect for gsap scrolltrigger
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().from(about.current, {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: about.current,
          start: 'center center',
          end: '+=600',
          pin: true,
          scrub: 0.2,
        },
      })
    }, about)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={about} className='invisible flex justify-center items-center my-24'>
      <div className='max-w-5xl p-6 grid md:gap-8 grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col pt-16 md:pt-0 text-center md:text-left justify-center items-start'>
          <h2 className='md:pb-7 m-auto text-3xl md:text-7xl font-LeagueSpartan text-gray-700 mb-5'>
            ABOUT ME <div className='line2 h-1.5 w-4/5 mx-auto bg-sky-400'></div>
          </h2>
          <p className='md:pb-7 text-sm md:text-xl font-light font-lato text-gray-400'>
            I am a Full Stack Developer who expertly combines professionalism with a dash of fun! I thrive on tackling challenges head-on, all while
            fostering a collaborative team environment.
          </p>
          <p className='md:pb-7 text-sm md:text-xl font-light font-lato text-gray-400'>
            My skill set spans a diverse range of front-end and back-end technologies, frameworks, and UI/UX design tools.
          </p>
          <p className='md:pb-7 text-sm md:text-xl font-light font-lato text-gray-400'>
            My passion for continuous learning and collaboration drives me to excel in the ever-evolving world of web development. Join me on this
            exhilarating journey!
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <TagCloud
            options={w => ({
              radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: 'fast',
            })}
            className='text-gray-800 font-lato'
          >
            {[
              'React',
              'Python',
              'JavaScript',
              'Leadership',
              'CSS',
              'PHP',
              'Tailwindcss',
              'Communication',
              'Git',
              'Typescript',
              'HTML',
              'Node.js',
              'Teamwork',
              'SQL',
              'JQuery',
              'Bootstrap',
              'GitHub',
              'Figma',
            ]}
          </TagCloud>
        </div>
      </div>
    </section>
  )
}

export default About
