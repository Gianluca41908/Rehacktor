import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

function LazyLoadGameImage({ image }){
    return (
        <LazyLoadImage
        alt="game image"
        effect="blur"
        className="h-100 w-100"
        wrapperProps={{
            style: {transitionDelay: "0.5s"}
        }}
        src={image} />
    )
}

export default LazyLoadGameImage