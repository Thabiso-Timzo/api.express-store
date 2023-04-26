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