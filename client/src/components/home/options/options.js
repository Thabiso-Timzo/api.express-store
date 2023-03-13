import { FaGift, FaHeadset, FaShippingFast } from 'react-icons/fa'
import { MdPriceChange } from 'react-icons/md'
import { RiSecurePaymentFill } from 'react-icons/ri'

const options = [
    { 
        title: 'free shipping',
        phrase: 'from all orders over R5700',
        icon: <FaShippingFast size={30} />
    },
    {
        title: 'free shipping',
        phrase: 'from all orders over R5700',
        icon: <FaGift size={30} />
    },
    {
        title: 'free shipping',
        phrase: 'from all orders over R5700',
        icon: <FaHeadset size={30} />
    },
    {
        title: 'free shipping',
        phrase: 'from all orders over R5700',
        icon: <MdPriceChange size={30} />
    },
    {
        title: 'free shipping',
        phrase: 'from all orders over R5700',
        icon: <RiSecurePaymentFill size={30} />
    },
]

export { options }