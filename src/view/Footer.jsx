function Footer() {
  return (
    <section className='flex max-w-5xl mx-auto mb-10'>
      <a
        href='https://www.linkedin.com/in/daniel-nibbs/'
        target='_blank'
        rel='noopener noreferrer'
        className=' font-lato text-lg cursor-pointer text-gray-400 font-light hover:text-sky-400'
      >
        LINKEDIN
      </a>
      <a
        href='https://github.com/Jeff-Nibbs/new-portfolio'
        target='_blank'
        rel='noopener noreferrer'
        className=' font-lato text-lg cursor-pointer mx-auto text-gray-400 font-light uppercase hover:text-sky-400'
      >
        Designed & Built by Daniel Nibbs
      </a>
      <a
        href='https://github.com/Jeff-Nibbs'
        target='_blank'
        rel='noopener noreferrer'
        className=' font-lato text-lg cursor-pointer text-gray-400 font-light hover:text-sky-400'
      >
        GITHUB
      </a>
    </section>
  )
}

export default Footer