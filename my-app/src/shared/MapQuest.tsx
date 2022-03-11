import React from "react";
import { MapQuestProps } from "../models/MapQuestProps";

export const MapQuest:
  React.FC<MapQuestProps & React.ImgHTMLAttributes<HTMLImageElement>> = 
   ( {city, width = 500, height = 500, ...rest}) => {
    // const {city, width, height} = props;
    const src = "https://www.mapquestapi.com/staticmap/v5/map?key=2yQuTXXx8Mvpn9AdLyW4k4vGUC0uU2Ul&center=" +
     city +  "&size=@2x";
    return (
        <div>
            <img alt="Mia Mappa" width={width} height={height} src={src} {...rest}/>
        </div>
    )
}