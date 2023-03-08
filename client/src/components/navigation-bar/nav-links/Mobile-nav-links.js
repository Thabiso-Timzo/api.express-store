import { MdCompare, MdEmail } from 'react-icons/md'
import { HiHeart } from 'react-icons/hi'
import { FaUser, FaShoppingCart, FaStore, FaBlog } from 'react-icons/fa'
import { TiInfoLarge } from 'react-icons/ti'
import { 
    AiFillLinkedin,
    AiFillInstagram,
    AiFillMail,
    AiOutlineTwitter,
    AiFillHome
  } from 'react-icons/ai'

const mobile1 = [
    
    {
        path: 'compare',
        icon: <MdCompare size={20} />,
        title: 'Compare',
        title2: 'Product'
    },
    {
        path: 'wishlist',
        icon: <HiHeart size={20} />,
        title: 'Favourite',
        title2: 'Wishlits'
    },
    {
        path: 'auth',
        icon: <FaUser size={20} />,
        title: 'Auth',
        title2: 'Account'
    },
    {
        path: 'cart',
        icon: <FaShoppingCart size={20} />,
        title: 0,
        title2: 'R1500'
    } 
]

const mobile2 = [
    {
        path: '/',
        title: 'Home',
        icon: <AiFillHome size={20} />
    },
    {
        path: 'about',
        title: 'About',
        icon: <TiInfoLarge size={20} />
    },
    {
        path: 'store',
        title: 'Store',
        icon: <FaStore size={20} />
    },
    {
        path: 'blog',
        title: 'Blog',
        icon: <FaBlog size={20} />
    },
    {
        path: 'contact',
        title: 'Contact',
        icon: <MdEmail size={20} />
    }
]

const socials = [
    {
        path: 'https://www.linkedin.com/in/thabiso-hlatshwayo-8a4079198/',
        icon: <AiFillLinkedin size={20} />
    },
    {
        path: 'https://www.instagram.com/thabiso.timzo.dev/',
        icon: <AiFillInstagram size={20} />
    },
    {
        path: 'https://twitter.com/thabiso_dev',
        icon: <AiOutlineTwitter size={20} />
    },
    {
        path: 'mailto:thabiso.hlatshwayo24@gmail.com',
        icon: <AiFillMail size={20} />
    }
]

export { mobile1, mobile2, socials }