import { IconType } from "react-icons";

export type ButtonType = 'Rounded' | 'Circle';

export interface ButtonComponentType{
    Type: ButtonType,
    Color: string,
    Text?: string,
    className: string
}

export const typeButton = {
    Rounded: 'rounded-lg',
    Circle: 'rounded-full'
}

export interface ComponenteFooterTypes{
    Icon:IconType,
    Font: string,
    Span: string,
    classNameIcon?: string,
    classNameSpan?: string,

}

export interface ContactData {
    Icon: IconType,
    Span: string,
    Font: string,
    classNameIcon?: string,
    classNameSpan?: string,
}


export interface ServiceComponentType{
    Icon: IconType | string,
    Title: string,
    Span: string
}