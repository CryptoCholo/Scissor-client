import { Fragment, useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { Disclosure,  Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';



  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Nav({ isAuthenticated }) {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
      { name: 'Home', href: '/' },
      isAuthenticated
        ? { name: 'History', href: '/history' } 
        : { name: 'Login', href: '/login' },
      isAuthenticated && { name: 'Logout', href: '/logout' },
      !isAuthenticated && { name: 'Signup', href: '/signup' },
    ].filter(Boolean);
    

  const handleMenuToggle = () => {
    
    setIsOpen(!isOpen);
  };
    return (
        <>
          <div className="h-screen w-screen flex align-center justify-center">
          <div className="h-full w-full static flex flex-col align-center justify-center ">
            <Disclosure as="nav" className="bg-green-900 w-full z-50 fixed top-0">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-green-100">
                          <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.18 16.77C8.16 16.77 8.13 16.77 8.11 16.77C7.14 16.68 6.23 16.23 5.55 15.51C3.95 13.83 3.95 11.1 5.55 9.42L7.74 7.12C8.52 6.3 9.57 5.84 10.69 5.84C11.81 5.84 12.86 6.29 13.64 7.12C15.24 8.8 15.24 11.53 13.64 13.21L12.55 14.36C12.26 14.66 11.79 14.67 11.49 14.39C11.19 14.1 11.18 13.63 11.46 13.33L12.55 12.18C13.61 11.07 13.61 9.26 12.55 8.16C11.56 7.12 9.82 7.12 8.82 8.16L6.63 10.46C5.57 11.57 5.57 13.38 6.63 14.48C7.06 14.94 7.64 15.22 8.25 15.28C8.66 15.32 8.96 15.69 8.92 16.1C8.89 16.48 8.56 16.77 8.18 16.77ZM18.45 14.59L16.26 16.89C15.48 17.71 14.43 18.17 13.31 18.17C12.19 18.17 11.14 17.72 10.36 16.89C8.76 15.21 8.76 12.48 10.36 10.8L11.45 9.65C11.74 9.35 12.21 9.34 12.51 9.62C12.81 9.91 12.82 10.38 12.54 10.68L11.45 11.83C10.39 12.94 10.39 14.75 11.45 15.85C12.44 16.89 14.18 16.9 15.18 15.85L17.37 13.55C18.43 12.44 18.43 10.63 17.37 9.53C16.94 9.07 16.36 8.79 15.75 8.73C15.34 8.69 15.04 8.32 15.08 7.91C15.12 7.5 15.48 7.19 15.9 7.24C16.87 7.34 17.78 7.78 18.46 8.5C20.05 10.17 20.05 12.91 18.45 14.59Z" fill="#292D32"/>
                          </svg>                        
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-60 flex items-baseline space-x-20">
                            {navigation.map((item) => (
                              <Link key={item.name}
                                  to={item.href}
                                  className={classNames(
                                  item.current ? 'bg-green-100 text-green-900' : 'text-green-100 hover:bg-green-500 hover:text-green-700', 'px-3 py-2 rounded-md text-sm font-semibold'
                                  )}
                                  aria-current={item.current ? 'page' : undefined}
                                  >
                                  {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button
                            type="button"
                            className="rounded-full bg-green-900 p-2 text-green-100 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button onClick={handleMenuToggle} className="inline-flex items-center justify-center rounded-md bg-green-900 p-2 text-green-100 hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-8 w-8 bg-green-900" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-8 w-8 bg-green-900 " aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                  <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                  >

                    <Disclosure.Panel className="md:hidden">
                      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {navigation.map((item) => (
                          
                          <Disclosure.Button key={item.name} onClick={handleMenuToggle} className={classNames(
                            item.current ? 'bg-green-100 text-green-900' : 'text-green-100 hover:bg-green-500 hover:text-stone-900',
                            'block px-3 py-2 rounded-md text-base font-medium'
                          )}>
                              <Link  to={item.href} aria-current={item.current ? 'page' : undefined}>
                                {item.name}
                              </Link>
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
              
            </Disclosure>
            <Outlet />
          </div>
          </div>
        </>
      )
  }

  Nav.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};
  