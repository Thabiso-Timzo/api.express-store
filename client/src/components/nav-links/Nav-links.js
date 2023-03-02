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

export { navLinks }