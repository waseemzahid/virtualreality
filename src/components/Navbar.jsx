import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial hash check
    setCurrentHash(window.location.hash);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
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
          {/* <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="transition font-semibold duration-300 hover:text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text"
                >
                  {item.label}
                  </a>
              </li>
            ))}
          </ul> */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`transition font-semibold duration-300 hover:text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text ${
                    currentHash === item.href ? 'text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-5 border rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 hover:border-transparent"
            >
              Sign In
            </a>
            <a 
              href="#"
              className="relative inline-block bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition-colors duration-300 hover:from-black hover:to-gray-900 hover:text-white"
            >
                Create an account
            <span className="absolute inset-0 rounded-md border border-white opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-center">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="transition font-semibold duration-300 hover:text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
            <a
              href="#"
              className="py-2 px-5 border rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 hover:border-transparent"
            >
              Sign In
            </a>
            <a 
              href="#"
              className="relative inline-block bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition-colors duration-300 hover:from-black hover:to-gray-900 hover:text-white"
            >
                Create an account
            <span className="absolute inset-0 rounded-md border border-white opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
