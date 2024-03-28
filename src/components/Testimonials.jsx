import { testimonials } from '../constants'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="testimonials">
      <div className="text-center">
        <span className="bg-neutral-900 text-md text-orange-500 rounded-full h-6 font-medium px-2 py-1 uppercase">
          Testimonials
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl tracking-wide lg:text-6xl text-center my-10 lg:my-10">
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          What People{' '}
        </span>
        are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-600 font-thin">
              <Quote className='text-orange-500 bg-neutral-900 absolute' />
              <p className='relative ml-8'>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-medium">
                    {testimonial.user}
                  </h6>
                  <span className="text-sm font-normal italic text-neutral-400">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
