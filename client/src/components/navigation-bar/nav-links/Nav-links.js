import { MdCompare } from 'react-icons/md'
import { HiHeart } from 'react-icons/hi'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
 
const navLinks = [
    {
        path: 'compare',
        icon: <MdCompare size={25} />,
        title: 'Compare',
        title2: 'Product'
    },
    {
        path: 'wishlist',
        icon: <HiHeart size={25} />,
        title: 'Favourite',
        title2: 'Wishlits'
    },
    {
        path: 'auth',
        icon: <FaUser size={25} />,
        title: 'Auth',
        title2: 'Account'
    },
    {
        path: 'cart',
        icon: <FaShoppingCart size={25} />,
        title: 0,
        title2: 'R1500'
    }
]

const navLinks2 = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: 'about',
        title: 'About'
    },
    {
        path: 'store',
        title: 'Store'
    },
    {
        path: 'blog',
        title: 'Blog'
    },
    {
        path: 'contact',
        title: 'Contact'
    }
]

export { navLinks, navLinks2 }