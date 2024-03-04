import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

// import type { FunctionComponent, FC } from "react"
type LazyImageProps = {src: string};
type ImageNative = ImgHTMLAttributes<HTMLImageElement>; // add native properties of an iamge element for future usabuilitie, Not required for lazy loading
type Props = LazyImageProps & ImageNative;


export const LazyImage = ({src, ...imgProps}: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null); //add element and inicialize with null
    const[currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");
   
    useEffect( () => {
        //new observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting || !node.current) {
                  return;
                }
        
                setCurrentSrc(src);
              });
        });
        // observe node
        if (node.current) {
            observer.observe(node.current);
        }

        //disconnect
        return () => {
            observer.disconnect() 
        }
    }, [src]);
    return <img 
        ref={node} 
        src={currentSrc} 
        {...imgProps} //additionl funcionalities
     /> 
} // most used


// export const RandomFox2: FunctionComponent = () => {
//     return <img /> 
// }

// export const RandomFox3: FC = () => {
//     return <img /> 
// }