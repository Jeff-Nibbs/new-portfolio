import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import cv from '../assets/Daniel-cv.pdf'
import logo from '../assets/d-button-icon.svg'
import '../view/Nav.css'
function Nav() {
  // set up ref for nav
  const nav = useRef(null)

  // build gsap timeline
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from('.logo', { autoAlpha: 0, y: -50, duration: 1, ease: 'power4.out', delay: 3.7 })
        .from('.nav1', { autoAlpha: 0, y: -50, duration: 1, ease: 'power4.out' }, '-=0.75')
        .from('.nav2', { autoAlpha: 0, y: -50, duration: 1, ease: 'power4.out' }, '-=0.75')
        .from('.nav3', { autoAlpha: 0, y: -50, duration: 1, ease: 'power4.out' }, '-=0.75')
        .from('.nav4', { autoAlpha: 0, y: -50, duration: 1, ease: 'power4.out' }, '-=0.75')
    }, nav)
    return () => ctx.revert()
  }, [])

  return (
    <nav ref={nav} className='flex justify-center items-center fixed min-w-full py-3 px-4 z-10'>
      <a href='#' className='mr-auto ml-7'>
        <img src={logo} alt='logo' className='logo w-16 ' />
      </a>
      <div className='flex items-center gap-7 mr-7 font-lato font-light'>
        <a href='https://danielnibbs.com/' className='invisible link nav1 text-lg cursor-pointer text-gray-400'>
          ABOUT
        </a>
        <a href='https://danielnibbs.com/' className='invisible link nav2 text-lg cursor-pointer text-gray-400'>
          PROJECTS
        </a>
        <a href='https://danielnibbs.com/' className='invisible link nav3 text-lg cursor-pointer text-gray-400'>
          CONTACT
        </a>
        <a
          href={cv}
          target='_blank'
          rel='noopener noreferrer'
          className='invisible nav4 flex justify-center item-center border-2 rounded py-3 px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
        >
          RESUME
        </a>
      </div>
    </nav>
  )
}

export default Nav
