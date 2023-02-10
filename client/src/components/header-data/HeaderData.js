import { AiTwotoneHome } from 'react-icons/ai'
import { FaHeart, FaStore, FaBlog } from 'react-icons/fa'
import { MdAccountCircle, MdEmail } from 'react-icons/md'
import { GoGitCompare } from 'react-icons/go'

const rightHeader = [
    {
        page: 'Home',
        icon: <AiTwotoneHome size={20} />,
        path: '/'
    },
    {
        page: 'Favourite',
        icon: <FaHeart size={20} />,
        path: 'wishlist'
    },

]

const dropdown = [
    {
        page: 'Auth',
        icon: <MdAccountCircle size={20} />,
        path: 'auth'
    },
    {
        page: 'Store',
        icon: <FaStore size={20} />,
        path: 'products'
    },
    {
        page: 'Compare',
        icon: <GoGitCompare size={20} />,
        path: 'compare'
    },
    {
        page: 'Blog',
        icon: <FaBlog size={20} />,
        path: 'blog'
    },
]

// mobile view data
const mobile1Header = [
    {
        page: 'Compare',
        icon: <GoGitCompare size={20} />,
        path: 'compare' 
    },
    {
        
        page: 'Favourite',
        icon: <FaHeart size={20} />,
        path: 'wishlist'
        
    },
    {
        page: 'Auth',
        icon: <MdAccountCircle size={20} />,
        path: 'auth'
    }
]

const mobile2Header = [
    {
        page: 'Home',
        icon: <AiTwotoneHome  size={20} />,
        path: '/'
    },
    {
        page: 'Store',
        icon: <FaStore  size={20} />,
        path: 'products'
    },
    {
        page: 'Blog',
        icon: <FaBlog  size={20} />,
        path: 'blog'
    },
    {
        page: 'Contact',
        icon: <MdEmail  size={20} />,
        path: 'contact'
    }
]

export { rightHeader, dropdown, mobile1Header, mobile2Header }