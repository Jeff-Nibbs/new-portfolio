import { FiLinkedin } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { FiFileText } from 'react-icons/fi'
function LeftSideBar() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 fixed bottom-2 left-16 z-10'>
      <FiGithub className='text-blue-500 text-4xl' />
      <FiLinkedin className='text-blue-500 text-4xl' />
      <FiMail className='text-blue-500 text-4xl' />
      <FiFileText className='text-blue-500 text-4xl' />
      <div className='w-0.5 h-28 bg-blue-400'></div>
    </div>
  )
}

export default LeftSideBar
