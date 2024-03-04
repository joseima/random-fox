// import type { FunctionComponent, FC } from "react"
type Props = {image: string};


export const RandomFox = ({image}: Props): JSX.Element => {

    return <img src={image} width={320} height="auto" className=" rounded-lg" /> 
} // most used


// export const RandomFox2: FunctionComponent = () => {
//     return <img /> 
// }

// export const RandomFox3: FC = () => {
//     return <img /> 
// }