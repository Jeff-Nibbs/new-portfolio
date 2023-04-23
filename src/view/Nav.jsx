import cv from '../assets/Daniel-cv.pdf'
import '../view/Nav.css'
function Nav() {
  return (
    <nav className='flex justify-center items-center fixed min-w-full py-3 px-4 z-10'>
      <img src='src/assets/d-button-icon.svg' alt='logo' className='w-16 mr-auto ml-7' />
      <div className='flex items-center gap-7 mr-7 '>
        <a href='https://danielnibbs.com/' className='link text-lg cursor-pointer text-gray-400'>
          ABOUT
        </a>
        <a href='https://danielnibbs.com/' className='link text-lg cursor-pointer text-gray-400'>
          PROJECTS
        </a>
        <a href='https://danielnibbs.com/' className='link text-lg cursor-pointer text-gray-400'>
          CONTACT
        </a>
        <a
          href={cv}
          target='_blank'
          rel='noopener noreferrer'
          className='border-2 rounded py-3 px-4 cursor-pointer text-blue-500 border-blue-400 hover:text-gray-50 hover:bg-blue-400 duration-500'
        >
          RESUME
        </a>
      </div>
    </nav>
  )
}

export default Nav
