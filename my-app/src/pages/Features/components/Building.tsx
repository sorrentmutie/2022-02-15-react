import React from "react";
import { Building } from "../../../models/building";
import { MapQuest } from "../../../shared/MapQuest";

export interface BuildingProps {
    building: Building
}

export const BuildingItem: React.FC<BuildingProps> = (props) => {
    return (
        <div className="col-md-4" key={props.building.id}>
            <h4>{props.building.title}</h4>
            <p>{props.building.address}</p>
            <MapQuest city={props.building.city} height="300" width="300" />
        </div>
    )
}