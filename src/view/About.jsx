import { useEffect } from 'react'
import TagCloud from 'TagCloud'
function About() {
  useEffect(() => {
    return () => {
      const container = '.tagcloud'
      const texts = ['React', 'Python', 'JavaScript', 'CSS3', 'PHP', 'Tailwindcss', 'Mouse', 'Rolling', 'Sphere', '6KB', 'v2.x']
      const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'slow',
        direction: 135,
        keep: true,
      }

      TagCloud(container, texts, options)
    }
  }, [])

  return (
    <section className='flex justify-center items-center my-24'>
      <div className='max-w-5xl p-6 bg-blue-400'>
        <h2 className=' text-5xl font-LeagueSpartan text-gray-700'>ABOUT ME</h2>
        <p className=' text-xl font-light font-lato text-gray-400'>About me</p>
        <span className='tagcloud font-lato font-light text-xl text-gray-50 ml-8'></span>
      </div>
    </section>
  )
}

export default About
