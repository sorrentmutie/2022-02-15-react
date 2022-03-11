import { Building } from "../../../models/building"
import { BuildingItem } from "./Building"

export interface BuildingListProps {
    buildings: Building[]
}

export const BuildingList: React.FC<BuildingListProps> = (props) => {
    return (
        <div className="row">
            <h3>Numero totale edifici: {props.buildings.length}</h3>
            {
                props.buildings.map( building => {
                    return <BuildingItem building={building}/> })
            }
        </div>
    )
}
