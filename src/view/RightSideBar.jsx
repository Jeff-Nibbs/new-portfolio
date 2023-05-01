import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function RightSideBar() {
  // set up ref for rightSideBar
  const rightSideBar = useRef(null)
  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // build gsap timeline
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to('.side-line2', { height: 112, duration: 3, ease: 'power4.inOut', delay: 3 })
        .from('.side-email', { autoAlpha: 0, y: -50, duration: 1.2, ease: 'power4.out', delay: 0.3 }, '-=0.7')
        .to(rightSideBar.current, {
          y: 500,
          scrollTrigger: {
            trigger: rightSideBar.current,
            start: 'top top',
            end: '+=800',
            scrub: 0.2,
          },
        })
    }, rightSideBar)
    return () => ctx.revert()
  }, [])

  // to rotate email text
  const textRotation = {
    writingMode: 'vertical-rl',
  }
  return (
    <div ref={rightSideBar} className='flex flex-col justify-center items-center gap-5 fixed bottom-2 right-14 z-10'>
      <a
        href='mailto:danielnibbs100@gmail.com'
        style={textRotation}
        className='side-email invisible text-gray-400 text-lg cursor-pointer font-lato font-normal hover:text-sky-400'
      >
        danielnibbs100@gmail.com
      </a>

      <div className='side-line2 w-0.5 h-0 bg-gray-400'></div>
    </div>
  )
}

export default RightSideBar
