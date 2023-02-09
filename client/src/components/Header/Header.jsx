import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  AiOutlineClose, 
  AiOutlineMenu, 
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
  AiOutlineTwitter
} from 'react-icons/ai'
import { GoGitCompare } from 'react-icons/go'
import { FaHeart, FaBlog, FaStore } from 'react-icons/fa'
import { MdAccountCircle, MdCategory, MdEmail } from 'react-icons/md'
import { ImCart } from 'react-icons/im'
import { BiDownArrow, BiSearch } from 'react-icons/bi'
import { AiTwotoneHome } from 'react-icons/ai'
 
import logo from '../../assets/logo.png'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [open, setOpen] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    } 
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div 
      className={
        shadow 
        ? 'fixed w-full h-[60px] shadow-xl z-[100] bg-slate-700' 
        : 'fixed w-full h-[60px] z-[100] bg-slate-700'}
      > 
      <div 
        className={'flex justify-between items-center w-full h-full px-2 2xl:px-16'}>
        <Link to={'/'}>
          <img 
            src={logo} 
            alt='' 
            width={'50'} 
            height={'50'}
          />
        </Link>
        <div className={'flex'}>
          <input 
            className={'outline-none border-none rounded-l-lg h-7 w-75 placeholder-gray-500 placeholder-opacity-100'} 
            type="text" placeholder='search for products' 
          />
          <span 
            className={'cursor-pointer bg-slate-400 rounded-r-lg h-7 w-8 p-1.5 text-[#fff]'}
          >
            <BiSearch />
          </span>
        </div>
        <div>
          <ul className={'hidden md:flex mr-10'}>
            <Link to={'/'}>
              <div className={'flex text-[#fff]'}>
                <GoGitCompare size={30} />
                <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                  <li>Compare</li>
                  <li>products</li>
                </div>
              </div>
            </Link>
            <Link to={'/about'}>
            <div className={'flex text-[#fff] ml-10'}>
                <FaHeart size={30} />
                <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                  <li>Favourite</li> 
                  <li>Wishlist</li>
                </div>
              </div>
            </Link>
            <Link to={'/skills'}>
            <div className={'flex text-[#fff] ml-10'}>
                <MdAccountCircle size={30} />
                <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                  <li>Authentication</li>
                  <li>My account</li>
                </div>
              </div>
            </Link>
            <Link to={'/projects'}>
              <div className={'flex text-[#fff] ml-10'}>
                <ImCart size={30} />
                <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                  <li className={'rounded-full h-4 w-4 bg-white text-black px-5'}>0</li>
                  <li>R1500</li>
                </div>
              </div>
            </Link>
          </ul>
          <div className={'md:hidden text-[#fff]'} onClick={handleNav}>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* Second navigation */}
      <div className={'fixed w-full h-[40px] z-[100] bg-slate-500'}>
        <ul className={'ml-10 text-[#fff] uppercase text-xs'}>
          <div className={'flex center-align'}>
            <MdCategory size={30} />
            <div className={'ml-3 flex p-2 '}> 
              <ul>
                <div onClick={() => setOpen(!open)} className={'flex cursor-pointer'}>
                  <p className={'text-xs uppercase'}>Shop Category</p>
                  <li className={'p-1 ml-10'}><BiDownArrow /></li>
                </div> 
                <ul onClick={() => setOpen()} className={open ? 'bg-white mt-2 overflow-auto max-h-60 text-[#000]': null}>
                  <li className={'p-2 text-sm hover:bg-sky-600 hover:text-red-500'}>Cars</li>
                  <li className={'p-2 text-sm hover:bg-sky-600 hover:text-red-500'}>Outdoor</li>
                  <li className={'p-2 text-sm hover:bg-sky-600 hover:text-red-500'}>Clothes</li>
                  <li className={'p-2 text-sm hover:bg-sky-600 hover:text-red-500'}>Electronic</li>
                  <li className={'p-2 text-sm hover:bg-sky-600 hover:text-red-500'}>Furniture</li>
                </ul>
              </ul>
            </div>
          </div>
          <div className={'hidden  display-header'}>
            <Link to={''}>
              <li className={'ml-5 p-2'}>Home</li>
            </Link>
            <Link to={''}>
              <li className={'ml-5 p-2'}>Our store</li>
            </Link>
            <Link to={''}>
              <li className={'ml-5 p-2'}>Blogs</li>
            </Link>
            <Link to={''}>
              <li className={'ml-5 p-2'}>Contact</li>
            </Link>
          </div> 
        </ul>
      </div>

      {/* Mobile navigation */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav 
          ? 'fixed left-0 w-[75%] sm:[60%] md:w-[45%] h-screen bg-slate-600 p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="">
            <div className={'flex w-full items-center justify-between'}>
              <Link to={'/'}>
                <img
                  src={logo} 
                  alt='' 
                  width={'100'} 
                  height={'50'}
                />
              </Link>
              <div onClick={handleNav} className={'rounded-full text-[#fff] shadow-lg shadow-gray-700 p-3 cursor-pointer'}>
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className={'border-b border-grey-300 my-4'}>
                <p className={'w-[85%] md:w-[90%] py-4 text-[#fff]'}>A higher form of shopping.</p>
              </div>
            </div>
            <div className={'grid grid-cols-2 gap-4'}>
              <div className={'py-4 flex flex-col'}>
                <ul className='uppercase'>
                <Link to={'/'}> 
                  <div onClick={() => setNav(false)} className={'flex text-[#fff] py-4 text-sm'}>
                    <GoGitCompare size={20} />
                    <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                      <li>Compare</li>
                      <li>products</li>
                    </div>
                   </div>
                </Link>
                <Link to={'/about'}>
                <div onClick={() => setNav(false)} className={'flex text-[#fff] py-4 text-sm'}>
                    <FaHeart size={20} />
                    <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                      <li>Favourite</li>
                      <li>Wishlist</li>
                    </div>
                   </div>
                </Link>
                <Link to={'/skills'}>
                <div onClick={() => setNav(false)} className={'flex text-[#fff] py-4 text-sm'}>
                    <MdAccountCircle size={20} />
                    <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                      <li>Auth</li>
                      <li>My account</li>
                    </div>
                   </div>
                </Link>
                <Link to={'/projects'}>
                <div onClick={() => setNav(false)} className={'flex text-[#fff] py-4 text-sm'}>
                    <ImCart size={20} />
                    <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                      <li>0</li>
                      <li>R1500</li>
                    </div>
                   </div>
                </Link>
                </ul> 
            </div>
            <div className={'py-6 flex flex-col'}>
              <ul className='uppercase text-[#fff] text-xs'>
                <Link to={''}>
                  <div className={'flex mt-5'}>
                    <AiTwotoneHome size={20}/>
                    <div className={'ml-3 p-2'}>
                      <li>Home</li>
                    </div>
                  </div>
                </Link>
                <Link to={''}>
                <div className={'flex mt-5'}>
                    <FaStore size={20}/>
                    <div className={'ml-3 p-2'}>
                      <li>Our store</li>
                    </div>
                  </div>
                </Link>
                <Link to={''}>
                <div className={'flex mt-5'}>
                    <FaBlog size={20}/>
                    <div className={'ml-3 p-2'}>
                      <li>Blogs</li>
                    </div>
                  </div>
                </Link>
                <Link to={''}>
                <div className={'flex mt-5'}>
                    <MdEmail size={20}/>
                    <div className={'ml-3 p-2'}>
                      <li>Contact</li>
                    </div>
                  </div>
                </Link> 
              </ul>
            </div>
            </div>
            <div className={'pt-4'}>
              <p className={'uppercase tracking-widest text-[#fff]'}>Let's talk.</p>
              <div className={'flex text-[#fff] items-center justify-between my-4 w-full sm:w-[80%]'}>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'https://www.instagram.com/thabiso.timzo.dev/'}><AiFillInstagram size={20} /></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'https://twitter.com/thabiso_dev'}><AiOutlineTwitter size={20} /></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'https://www.linkedin.com/in/thabiso-hlatshwayo-8a4079198/'}><AiFillLinkedin size={20} /></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'https://github.com/Thabiso-Timzo'}><AiFillGithub size={20}/></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'mailto:thabiso.hlatshwayo24@gmail.com'}><AiFillMail size={20}/></Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar