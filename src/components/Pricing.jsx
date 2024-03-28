import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'

const Pricing = () => {
  return (
    <div className="mt-20" id="pricing">
      <div className="text-center pb-7">
        <span className="bg-neutral-900 text-md text-orange-500 rounded-full h-6 font-medium px-2 py-1 uppercase">
          Pricing
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 my-8 tracking-wide">
        Discover Our{' '}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Pricing Options
        </span>
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === 'Pro' && (
                  <span className="bg-gradient-to-t from-orange-500 to-ornage-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="bg-gradient-to-t from-orange-500 to-ornage-800 text-transparent bg-clip-text text-4xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
              href="#"
              className="relative inline-flex justify-center items-center text-center w-full p-5 mt-20 tracking-tight text-xl bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition-colors duration-300 hover:from-black hover:to-gray-900 hover:text-white"
            >
                Subscribe
            <span className="absolute inset-0 rounded-md border border-white opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
