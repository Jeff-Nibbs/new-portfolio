import { useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import pic1 from '../assets/dn-site.png'
import pic2 from '../assets/loan-calculator.png'
import pic3 from '../assets/sous-chef-helper.png'
import placeholder1 from '../assets/dn-site-placeholder.jpg'
import placeholder2 from '../assets/loan-calculator-placeholder.jpg'
import placeholder3 from '../assets/sous-chef-helper-placeholder.jpg'
import picSmall1 from '../assets/dn-site-small.jpg'
import picSmall2 from '../assets/loan-calculator-small.jpg'
import picSmall3 from '../assets/sous-chef-helper-small.jpg'
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
    <section id='projects' ref={portfolio} className=' max-w-xs md:max-w-5xl mx-auto md:pt-16 bg-slate-100'>
      <h2 className='title2 invisible text-6xl md:text-9xl my-32 font-bold text-center text-gray-800 font-LeagueSpartan uppercase'>Projects</h2>

      <div className='portCard1 mb-12 invisible flex justify-center text-transparent rounded md:-ml-28 '>
        <div className='w-1/2 hidden md:block rounded overflow-hidden relative'>
          <LazyLoadImage
            src={picSmall1}
            alt='portfolio picture'
            effect='blur'
            height={300}
            width={533}
            placeholderSrc={placeholder1}
            className='hover:scale-125 transition-all block w-full object-contain object-center'
          />
        </div>

        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading hover:text-gray-800 text-lg md:text-6xl font-bold font-LeagueSpartan uppercase'>Don Nuva Web Solutions</h2>
          <p>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>Javascript</span>
          </p>
          <div className='flex '>
            <a
              href='https://github.com/Jeff-Nibbs/Front-sass-page'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 mr-2 md:mr-5 py-1 px-2 md:py-3 md:px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              GITHUB
            </a>
            <a
              href='https://jeff-nibbs.github.io/Front-sass-page/'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 py-1 px-2 md:py-3 md:px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              <span className='hidden md:inline mr-1'>LIVE </span> DEMO
            </a>
          </div>
        </div>
      </div>

      <div className='portCard2 justify-center mb-12 invisible flex text-transparent rounded md:-mr-28 '>
        <div className='w-1/2 mr-5 flex flex-col justify-center text-right'>
          <h2 className='heading hover:text-gray-800 text-lg md:text-6xl font-semibold font-LeagueSpartan'>LOAN CALCULATOR</h2>
          <p>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>Javascript /</span>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>React.js</span>
          </p>
          <div className='flex ml-auto'>
            <a
              href='https://github.com/Jeff-Nibbs/loan-calulator'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 mr-2 md:mr-5 py-1 px-2 md:py-3 md:px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              GITHUB
            </a>
            <a
              href='https://loan-calulator.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 py-1 px-2 md:py-3 md:px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              <span className='hidden md:inline mr-1'>LIVE</span> DEMO
            </a>
          </div>
        </div>
        <div className='w-1/2 rounded hidden md:block overflow-hidden relative'>
          <LazyLoadImage
            src={picSmall2}
            alt='portfolio picture'
            effect='blur'
            height={300}
            width={533}
            placeholderSrc={placeholder2}
            className='hover:scale-125 transition-all block w-full object-contain object-center'
          />
        </div>
      </div>

      <div className='portCard3 mb-12 invisible flex justify-center text-transparent rounded md:-ml-28 '>
        <div className='w-1/2 rounded hidden md:block overflow-hidden relative'>
          <LazyLoadImage
            src={picSmall3}
            alt='portfolio picture'
            effect='blur'
            height={300}
            width={533}
            placeholderSrc={placeholder3}
            className='hover:scale-125 transition-all block w-full object-contain object-center'
          />
        </div>
        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading hover:text-gray-800 text-lg md:text-6xl mb-3 font-semibold font-LeagueSpartan uppercase'>Sous-Chef Helper</h2>
          <p>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>Javascript /</span>
            <span className='text-xs md:text-xl pl-1 text-gray-700 font-light font-lato'>API</span>
          </p>
          <div className='flex'>
            <a
              href='https://github.com/Jeff-Nibbs/sous-chef-helper'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 mr-2 md:mr-5 py-1 px-2 md:py-3 md:px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              GITHUB
            </a>
            <a
              href='https://jeff-nibbs.github.io/sous-chef-helper/'
              target='_blank'
              rel='noopener noreferrer'
              className='nav4 flex justify-center item-center border-2 rounded mt-7 py-1 px-2 md:py-3 md:px-4 cursor-pointer text-sky-400 border-sky-500 hover:text-gray-50 hover:bg-sky-400'
            >
              <span className='hidden md:inline mr-1'>LIVE</span> DEMO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
