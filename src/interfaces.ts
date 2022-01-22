export interface HeaderComponet {
    username: string;
    password: string;
    admin: Boolean
}

export interface CaptionProps {
    isFocus: boolean
}

export interface ListProps {
    isFocus: boolean
}

export interface SelectOption {
    label: string,
    pngUrl: string,
}


export interface CountryListObjectInterface {
    name: { common : string},
    value: { common : string},
    flag: string
}


export interface SelectProps{
    data: Object[],
    loading: boolean
}