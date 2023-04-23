import { FiLinkedin } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { FiFileText } from 'react-icons/fi'
import cv from '../assets/Daniel-cv.pdf'
function LeftSideBar() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 fixed bottom-2 left-16 z-10'>
      <a href='https://github.com/Jeff-Nibbs' target='_blank' rel='noopener noreferrer'>
        <FiGithub className='text-gray-400 text-4xl cursor-pointer hover:text-blue-400' />
      </a>
      <a href='https://www.linkedin.com/in/daniel-nibbs/' target='_blank' rel='noopener noreferrer'>
        <FiLinkedin className='text-gray-400 text-4xl cursor-pointer hover:text-blue-400' />
      </a>
      <a href='mailto:danielnibbs100@gmail.com'>
        <FiMail className='text-gray-400 text-4xl cursor-pointer hover:text-blue-400' />
      </a>
      <a href={cv} download>
        <FiFileText className='text-gray-400 text-4xl cursor-pointer hover:text-blue-400' />
      </a>
      <div className='w-0.5 h-28 bg-gray-400'></div>
    </div>
  )
}

export default LeftSideBar
