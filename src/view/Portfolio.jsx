import pic1 from '../assets/dn-site.png'
import pic2 from '../assets/loan-calculator.png'
import pic3 from '../assets/sous-chef-helper.png'
import '../view/Portfolio.css'

function Portfolio() {
  return (
    <section className='max-w-5xl h-screen mx-auto bg-gray-100'>
      <div className='flex text-transparent hover:text-gray-800'>
        <div className='w-1/2'>
          <img src={pic1} alt='portfolio picture' />
        </div>
        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading text-6xl font-semibold font-LeagueSpartan '>Don Nuva Web Solutions</h2>
          <p>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>Javascript</span>
          </p>
        </div>
        {/* <img src='' alt='' /> */}
      </div>
      <div className='bg-blue-500'>
        <h3>h</h3>
        <p>h</p>
      </div>
      <div className='bg-green-500'>
        <h3>h</h3>
        <p>h</p>
      </div>
    </section>
  )
}

export default Portfolio
