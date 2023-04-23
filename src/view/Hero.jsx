import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
function Hero() {
  return (
    <section className='flex justify-center items-center h-screen relative'>
      <LeftSideBar />
      <RightSideBar />
      <div className='relative text-center'>
        <div className='text-left text-xl pl-3 text-gray-400 font-light font-lato'>HI I AM</div>
        <div className='h-1.5 w-10/12 bg-blue-400 absolute top-3.5 right-0'></div>
        <h1 className='text-8xl pt-3.5 font-bold text-gray-800 font-LeagueSpartan'>DANIEL NIBBS</h1>
        <div className='text-right font-light text-xl leading-5 text-blue-500 font-lato'>A FULL STACK DEVELOPER</div>
      </div>
    </section>
  )
}

export default Hero
