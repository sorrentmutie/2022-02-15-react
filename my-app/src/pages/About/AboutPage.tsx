import { MapQuest } from "../../shared/MapQuest"


export const AboutPage = () => {
    return (
        <div>
            <h3>Esempio di Mappa Statica</h3>
            <MapQuest
              onMouseOver = { () => console.log('mouse over')}       
              onClick={ () => console.log('map click')} 
              city="Naples,Italy" 
              width="500" height="500" />
        </div>
    )
}