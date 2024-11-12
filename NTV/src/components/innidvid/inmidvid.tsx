import React from 'react'
import './inmidvid.sass'
interface BrandingVideoProps {
    videoSrc:string
}

const BrandingVideo:React.FC<BrandingVideoProps>=({videoSrc})=>{
    return(
        <div className="inmidvid-Con">
          <video src={videoSrc} autoPlay  muted />
        </div>
    )
}
export default BrandingVideo