function Nav() {
  return (
    <nav className='flex justify-center items-center fixed min-w-full py-3 px-4 z-10'>
      <img src='src/assets/d-button-icon.svg' alt='logo' className='w-16 mr-auto ml-7' />
      <div className='flex items-center gap-7 mr-7 '>
        <a href='https://danielnibbs.com/' className='text-lg cursor-pointer'>
          ABOUT
        </a>
        <a href='https://danielnibbs.com/' className='text-lg cursor-pointer'>
          PROJECTS
        </a>
        <a href='https://danielnibbs.com/' className='text-lg cursor-pointer'>
          CONTACT
        </a>
        <a href='https://danielnibbs.com/' className='border-2 rounded py-3 px-4 cursor-pointer text-blue-500 border-blue-400'>
          RESUME
        </a>
      </div>
    </nav>
  )
}

export default Nav
