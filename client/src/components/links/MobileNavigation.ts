import { FaBars, FaBlog, FaHome, FaSearch, FaStore } from 'react-icons/fa'
import { MdAppRegistration, MdCompareArrows, MdEmail, MdFavorite, MdOutlineLogin, MdShoppingCart } from 'react-icons/md'

import { Icon, mobile, auth } from '../../types/types'

export const bars: Icon = {
    icon: FaBars
}

export const search: Icon = {
    icon: FaSearch
}

export const cart: Icon = {
    icon: MdShoppingCart
}

export const wishlist: Icon = {
    icon: MdFavorite
}

export const links: mobile[] = [
    {
        id: 1,
        url: '/',
        name: 'Home',
        icon: FaHome
    },
    {
        id: 2,
        url: 'store',
        name: 'Our store',
        icon: FaStore
    },
    {
        id: 3,
        url: 'blog',
        name: 'Blog',
        icon: FaBlog
    },{
        id: 4,
        url: 'contact',
        name: 'Contact',
        icon: MdEmail
    },
    {
        id: 5,
        url: 'compare',
        name: 'Compare',
        icon: MdCompareArrows
    }
]

export const authentication: auth[] = [
    {
        id : 1,
        name: 'login',
        url: 'login',
        icon: MdOutlineLogin
    },
    {
        id : 2,
        name: 'register',
        url: 'register',
        icon: MdAppRegistration
    }
] 