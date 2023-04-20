import { MdAppRegistration, MdOutlineCompareArrows, MdOutlineLogin } from 'react-icons/md'

import { navlinks } from '../../types/types'

export const links: navlinks[] = [
    {
        id: 1,
        page: 'login',
        path: 'login',
        icon: MdOutlineLogin
    },
    {
        id: 2,
        page: 'register',
        path: 'register',
        icon: MdAppRegistration
    },
    {
        id: 3,
        page: 'compare',
        path: 'compare',
        icon: MdOutlineCompareArrows
    }
]