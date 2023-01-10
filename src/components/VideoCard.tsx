import React, { FunctionComponent } from "react";
type Props = {
    youtubeFrame: any;
};
const VideoCard: FunctionComponent<Props> = ({ youtubeFrame }) => {
    return (
        <div className="video-responsive">
            <iframe
            className="video-youtube "
                width="647"
                height="364"
                src={youtubeFrame}
                // title="Calmer L'anxiété Naturellement- Musique Relaxante pour Déstresser - Contre le Stress"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
            ></iframe>
            {/* <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${'8glvVwC-q0w'}`}
    //   frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /> */}
        </div>
    );
};

export default VideoCard;
