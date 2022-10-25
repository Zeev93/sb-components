import './myLabel.css'

export interface MyLabelProps {
    /**
        * This is the text that will show be showed
    */
    label: string;

    /**
        * This is to set font size
    */
    size: 'normal' | 'h1' | 'h2' | 'h3' ;

    /**
     *  This is to set uppercase or lowercase
    */
    allCaps?: boolean

    /**
     * This is to set font color
    */
    color?: 'primary' | 'secondary' | 'tertiary'

    /**
     *  This is to set personalized font color
     */
    fontColor?: string
}


export const MyLabel = ( { 
    label = 'No Label', 
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
} : MyLabelProps ) => {
  return (
    <span style={{ color: fontColor }} className={`label ${size} ${ allCaps? 'upperCase' : '' } text-${color}`}>
        { label }
    </span>
  )
}
