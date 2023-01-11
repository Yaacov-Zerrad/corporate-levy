import React, { FunctionComponent, useEffect, useState } from "react";
type Props = {
    youtubeFrame: any;
};
const VideoCard: FunctionComponent<Props> = ({ youtubeFrame }) => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [youtubeSize, setYoutubeSize]= useState({width:'700',height:'364' })
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    const isMobile = width <= 768;
    useEffect(()=>{
        
        console.log(isMobile);
        if(isMobile){
            setYoutubeSize({width:'350',height:'180' })
        }
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, [isMobile])
    
    return (
        <div className="video-responsive">
            <iframe
            className="video-youtube "
                width={youtubeSize.width}
                height={youtubeSize.height}
                src={youtubeFrame}
                // title="Calmer L'anxiété Naturellement- Musique Relaxante pour Déstresser - Contre le Stress"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
            ></iframe>
 
        </div>
    );
};

export default VideoCard;
