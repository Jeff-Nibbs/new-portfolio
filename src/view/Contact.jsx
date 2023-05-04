import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Contact() {
  // set up ref for contact
  const contact = useRef(null)

  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  //useEffect for gsap timeline
  useEffect(() => {
    let ctx = gsap.context(() => {}, contact)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={contact} className='flex justify-center items-center h-screen relative'>
      <div className='flex flex-col text-center gap-5'>
        <h2 className='text-8xl pt-3.5 font-bold text-gray-800 font-LeagueSpartan'>LET&apos;S TALK</h2>
        <p className='leading-snug w-3/5 mx-auto text-xl font-light font-lato text-gray-400'>
          If you&apos;re interested in working together or have any feedback on my portfolio, feel free to get in touch. I&apos;d love to hear from
          you!
        </p>
        <a
          href='mailto:danielnibbs100@gmail.com'
          className='nav4 flex justify-center item-center border-2 rounded py-3 px-4 mt-6 mx-auto cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
        >
          SAY HELLO
        </a>
      </div>
    </section>
  )
}

export default Contact
