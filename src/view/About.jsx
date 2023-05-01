import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import TagCloud from 'TagCloud'
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

  // useEffect for tagcloud
  useEffect(() => {
    return () => {
      const container = '.tagcloud'
      const texts = [
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
      ]
      const options = {
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: 'slow',
        direction: 135,
        keep: true,
      }

      TagCloud(container, texts, options)
    }
  }, [])

  return (
    <section ref={about} className='invisible flex justify-center items-center my-24'>
      <div className='max-w-5xl p-6 grid gap-8 grid-cols-2'>
        <div className='flex flex-col justify-center items-start'>
          <h2 className='pb-7 text-7xl font-LeagueSpartan text-gray-700 mb-5'>ABOUT ME</h2>
          <p className='pb-7 text-xl font-light font-lato text-gray-400'>
            I am a Full Stack Developer who expertly combines professionalism with a dash of fun! I thrive on tackling challenges head-on, all while
            fostering a collaborative team environment.
          </p>
          <p className='pb-7 text-xl font-light font-lato text-gray-400'>
            My skill set spans a diverse range of front-end and back-end technologies, frameworks, and UI/UX design tools.
          </p>
          <p className='pb-7 text-xl font-light font-lato text-gray-400'>
            My passion for continuous learning and collaboration drives me to excel in the ever-evolving world of web development. Join me on this
            exhilarating journey!
          </p>
        </div>
        <div>
          <span className='tagcloud [-webkit-text-stroke: 1px #6b7280;] font-LeagueSpartan text-base text-gray-500 ml-8'></span>
        </div>
      </div>
    </section>
  )
}

export default About
