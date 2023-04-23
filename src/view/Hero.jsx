import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
function Hero() {
  return (
    <section className='flex justify-center items-center h-screen relative'>
      <LeftSideBar />
      <RightSideBar />
      <div className='relative text-center'>
        <div className='text-left font-medium text-xl pl-3 text-gray-400'>HI IM</div>
        <div className='h-1.5 w-10/12 bg-blue-400 absolute top-3.5 right-0'></div>
        <h1 className='text-9xl font-bold text-gray-800'>DANIEL NIBBS</h1>
        <div className='text-right font-semibold text-xl leading-7 text-blue-500'>A FULL STACK DEVELOPER</div>
        <div className='text-right font-semibold text-xl leading-3 text-blue-500'></div>
      </div>
    </section>
  )
}

export default Hero
