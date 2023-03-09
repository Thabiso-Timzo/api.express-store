import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"

const socials = [
    {
        path: 'https://www.linkedin.com/in/thabiso-hlatshwayo-8a4079198/',
        icon: <AiFillLinkedin size={20} />,
        title: 'LinkedIn'
    },
    {
        path: 'https://www.instagram.com/thabiso.timzo.dev/',
        icon: <AiFillInstagram size={20} />,
        title: 'Instagram'
    },
    {
        path: 'https://twitter.com/thabiso_dev',
        icon: <AiOutlineTwitter size={20} />,
        title: 'Twitter'
    },
]

const information = [
    {
        path: 'privacy-policy',
        title: 'Privacy Policy'
    },
    {
        path: 'refund-policy',
        title: 'Refund Policy'
    },
    {
        path: 'shipping-policy',
        title: 'Shipping Policy'
    },
    {
        path: 'terms-of-service',
        title: 'Terms of Service'
    },
    {
        path: 'blogs',
        title: 'Blogs'
    },
]

const accounts = [
    {
        path: 'account',
        title: 'Account'
    },
    {
        path: 'about',
        title: 'About us'
    },
    {
        path: 'faq',
        title: 'Fag'
    },
    {
        path: 'contact',
        title: 'Contact'
    },
    {
        path: 'size-chat',
        title: 'Size chat'
    }
]

const quickLinks = [
    {
        path: 'accessories',
        title: 'Accessories'
    },
    {
        path: 'laptops',
        title: 'Laptops'
    },
    {
        path: 'head-phones',
        title: 'Header phones'
    },
    {
        path: 'smart-watches',
        title: 'Smart watches'
    },
    {
        path: 'tablets',
        title: 'Tablets'
    },
]

const links = [
    {
        path: 'terms-and-conditions',
        title: 'Terms & Conditions'
    },
    {
        path: 'privacy',
        title: 'Privacy'
    },
    {
        path: 'security',
        title: 'Security'
    },{
        path: 'cookie-declaration',
        title: 'Cookie Declaration'
    },
]

export { socials, information, accounts, quickLinks, links }