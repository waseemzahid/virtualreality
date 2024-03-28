import { resourcesLinks, platformLinks, communityLinks } from '../constants'
import logo from '../assets/logo.png'
import { User, Mail, Phone } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <a href="#">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight font-semibold">
                Virtual
                <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text">
                  Reality
                </span>
              </span>
            </div>
          </a>
          <p className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-md font-semibold mb-4 mt-4">
            Developed By:
          </p>
          <div className='mb-3'>
            <span className='mt-2 inline-block pr-1'><User className='text-orange-500' /></span> Waseem Zahid
          </div>
          <div className='mb-3'>
            <span className='mt-2 inline-block pr-1'><Mail className='text-orange-500' /></span> <a
              className="text-md font-medium"
              href="mailto:waseemzahid64@gmail.com"
            >
              waseemzhid64@gmail.com
            </a>
          </div>
          <div className='mb-3'>
            <span className='mt-2 inline-block pr-1'><Phone className='text-orange-500' /></span> <a
              className="text-md font-medium"
              href="tel:+923006997639"
            >
              +92 300 699 7639
            </a>
          </div>
        </div>
        <div>
          <h3 className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-md font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="transition font-light duration-300 hover:text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-md font-semibold mb-4">
            Platform
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="transition font-light duration-300 hover:text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-md font-semibold mb-4">
            Community
          </h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="transition font-light duration-300 hover:text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
