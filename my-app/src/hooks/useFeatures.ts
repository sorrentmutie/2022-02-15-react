import { useEffect, useState } from "react";
import { Building } from "../models/building";
import axios from "axios";
export function useFeatures() {
   const [buildings, setBuildings] = useState<Building[]>([]);
   useEffect( () => {
      axios.get<Building[]>('http://localhost:4500/buildings')
         .then(response => {
            setBuildings(response.data);
         })
   })
   return {
      buildings
   }
}