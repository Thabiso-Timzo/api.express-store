import { IconType } from "react-icons"

export interface navlinks {
    id: number,
    icon: IconType,
    page: string,
    path: string
} 

export interface Icon {
    icon: IconType
}

export interface mobile {
    id: number,
    url: string,
    name: string,
    icon: IconType
}

export interface auth {
    id: number,
    name: string,
    url: string,
    icon: IconType
}

export interface Navigation {
    id: number,
    name: string,
    url: string,
}

export interface Socials {
    id: number
    icon: IconType,
    url: string,
    color: any
}

export interface Footer {
    id: number,
    name: string
    url: string
}

export interface Services {
    id: number,
    icon: IconType,
    desc: string,
    text: string
}

export interface Items {
    id: number,
    image: any,
    desc: string,
    text: string
}

export interface Image {
    id: number,
    image: any
}