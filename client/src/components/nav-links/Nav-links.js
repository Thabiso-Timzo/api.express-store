import { MdCompare } from 'react-icons/md'
import { HiHeart } from 'react-icons/hi'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
 
const navLinks = [
    {
        path: 'compare',
        icon: <MdCompare size={15} />,
        title: 'Compare'
    },
    {
        path: 'wishlist',
        icon: <HiHeart size={15} />,
        title: 'Favourite'
    },
    {
        path: 'auth',
        icon: <FaUser size={15} />,
        title: 'Auth'
    },
    {
        path: 'cart',
        icon: <FaShoppingCart size={15} />,
        title: 0
    }
]

export { navLinks }