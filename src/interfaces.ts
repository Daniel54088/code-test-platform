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

export interface ItemsProps{
    data: {
        id: String,
        type: String,
        title: String,
        description: String,
        status: String,
        premium: Number
        premium_formatted: String,
        payment_date: String,
        coverage_start_date: String,
        coverage_end_date: String | null,
        renewal: String| null,
        partner: {
          id: String,
          name: String,
          logo: String,
        }
    }
 
}