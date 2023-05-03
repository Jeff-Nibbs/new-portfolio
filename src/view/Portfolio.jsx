import pic1 from '../assets/dn-site.png'
import pic2 from '../assets/loan-calculator.png'
import pic3 from '../assets/sous-chef-helper.png'
import '../view/Portfolio.css'

function Portfolio() {
  return (
    <section className='max-w-5xl mx-auto my-24 bg-slate-100'>
      <div className='flex text-transparent transition-all rounded -mb-28 -mt-28 -ml-28 hover:text-gray-800'>
        <div className='w-1/2 rounded overflow-hidden relative'>
          <img
            src={pic1}
            alt='portfolio picture'
            className='hover:scale-125 transition-all block w-full aspect-square object-contain object-center'
          />
        </div>
        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading text-6xl font-semibold font-LeagueSpartan '>Don Nuva Web Solutions</h2>
          <p>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>Javascript</span>
          </p>
        </div>
      </div>

      <div className='flex text-transparent transition-all rounded -mb-28 -mt-28 -mr-28 hover:text-gray-800'>
        <div className='w-1/2 mr-5 flex flex-col items-end justify-center'>
          <h2 className='heading text-6xl font-semibold font-LeagueSpartan '>Loan Calculator</h2>
          <p>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>Javascript /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>React.js</span>
          </p>
        </div>
        <div className='w-1/2 rounded overflow-hidden relative'>
          <img
            src={pic2}
            alt='portfolio picture'
            className='hover:scale-125 transition-all block w-full aspect-square object-contain object-center'
          />
        </div>
      </div>

      <div className='flex text-transparent transition-all rounded -mb-28 -mt-28 -ml-28 hover:text-gray-800'>
        <div className='w-1/2 rounded overflow-hidden relative'>
          <img
            src={pic3}
            alt='portfolio picture'
            className='hover:scale-125 transition-all block w-full aspect-square object-contain object-center'
          />
        </div>
        <div className='w-1/2 ml-5 flex flex-col justify-center'>
          <h2 className='heading text-6xl mb-3 font-semibold font-LeagueSpartan '>Sous-Chef Helper</h2>
          <p>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>HTML /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>CSS /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>Javascript /</span>
            <span className='text-xl pl-1 text-gray-700 font-light font-lato'>API</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
