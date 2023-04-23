function RightSideBar() {
  const textRotation = {
    writingMode: 'vertical-rl',
  }
  return (
    <div className='flex flex-col justify-center items-center gap-5 fixed bottom-2 right-16 z-10'>
      <a href='mailto:danielnibbs100@gmail.com' style={textRotation} className='text-gray-400 text-lg cursor-pointer hover:text-blue-400'>
        danielnibbs100@gmail.com
      </a>

      <div className='w-0.5 h-28 bg-gray-400'></div>
    </div>
  )
}

export default RightSideBar
