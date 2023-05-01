import { FaCcPaypal, FaGifts, FaShippingFast } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { MdPriceChange } from 'react-icons/md'

import { Services } from '../../types/types'

export const services: Services[] = [
    {
        id: 1,
        icon: FaShippingFast,
        desc: 'Free shipping',
        text: 'From all orders over R3000'
    },
    {
        id: 2,
        icon: FaGifts,
        desc: 'Daily Surprise Offers',
        text: 'Save up to 25% off'
    },
    {
        id: 3,
        icon: BiSupport,
        desc: 'Support 24/7',
        text: 'Ship with an expert'
    },
    {
        id: 4,
        icon: MdPriceChange,
        desc: 'Affordable Prices',
        text: 'Get factory direct Prices'
    },
    {
        id: 5,
        icon: FaCcPaypal,
        desc: 'Secure Payments',
        text: '100% Protected Payments'
    }
]