import { useEffect, useRef } from 'react'
import pic1 from '../assets/dn-site.png'
import pic2 from '../assets/loan-calculator.png'
import pic3 from '../assets/sous-chef-helper.png'
import '../view/Portfolio.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Portfolio() {
  // set up ref for portfolio
  const portfolio = useRef(null)

  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // useEffect for gsap scrolltrigger
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from('.title2', {
          autoAlpha: 0,
          x: 400,
          y: 200,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.title2',
            start: 'center bottom',
            end: 'bottom center',
            scrub: 0.2,
          },
        })
        .from('.portCard1', {
          autoAlpha: 0,
          x: -400,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.portCard1',
            start: '35% 90%',
            end: 'bottom 60%',

            scrub: 0.2,
          },
        })
        .from('.portCard2', {
          autoAlpha: 0,
          x: 400,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.portCard2',
            start: '35% 90%',
            end: 'bottom 60%',

            scrub: 0.2,
          },
        })
        .from('.portCard3', {
          autoAlpha: 0,
          x: -400,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.portCard3',
            start: '35% 90%',
            end: 'bottom 60%',

            scrub: 0.2,
          },
        })
    }, portfolio)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={portfolio} className='max-w-5xl mx-auto pt-16 bg-slate-100'>
      <h2 className='title2 invisible text-9xl my-32 font-bold text-center text-gray-800 font-LeagueSpartan uppercase'>Projects</h2>

      <div className='portCard1 invisible flex text-transparent rounded -ml-28 '>
        <div className='w-1/2 rounded overflow-hidden relative'>
          <img
            src={pic1}
            alt='portfolio picture'
            className='hover:scale-125 transition-all block w-full aspect-square object-contain object-center'
          />
        </div>

        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading hover:text-gray-800 text-6xl font-bold font-LeagueSpartan uppercase'>Don Nuva Web Solutions</h2>
          <p>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>Javascript</span>
          </p>
          <div className='flex '>
            <a
              href='https://github.com/Jeff-Nibbs/Front-sass-page'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 mr-5 py-3 px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              GITHUB
            </a>
            <a
              href='https://jeff-nibbs.github.io/Front-sass-page/'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 py-3 px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>

      <div className='portCard2 invisible flex text-transparent rounded -mr-28 '>
        <div className='w-1/2 mr-5 flex flex-col justify-center text-right'>
          <h2 className='heading hover:text-gray-800 text-6xl font-semibold font-LeagueSpartan'>LOAN CALCULATOR</h2>
          <p>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>Javascript /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>React.js</span>
          </p>
          <div className='flex ml-auto'>
            <a
              href='https://github.com/Jeff-Nibbs/loan-calulator'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 mr-5 py-3 px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              GITHUB
            </a>
            <a
              href='https://loan-calulator.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 py-3 px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              LIVE DEMO
            </a>
          </div>
        </div>
        <div className='w-1/2 rounded overflow-hidden relative'>
          <img
            src={pic2}
            alt='portfolio picture'
            className='hover:scale-125 transition-all block w-full aspect-square object-contain object-center'
          />
        </div>
      </div>

      <div className='portCard3 invisible flex text-transparent rounded -ml-28 '>
        <div className='w-1/2 rounded overflow-hidden relative'>
          <img
            src={pic3}
            alt='portfolio picture'
            className='hover:scale-125 transition-all block w-full aspect-square object-contain object-center'
          />
        </div>
        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading hover:text-gray-800 text-6xl mb-3 font-semibold font-LeagueSpartan uppercase'>Sous-Chef Helper</h2>
          <p>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>Javascript /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>API</span>
          </p>
          <div className='flex'>
            <a
              href='https://github.com/Jeff-Nibbs/sous-chef-helper'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 mr-5 py-3 px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              GITHUB
            </a>
            <a
              href='https://jeff-nibbs.github.io/sous-chef-helper/'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 py-3 px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
