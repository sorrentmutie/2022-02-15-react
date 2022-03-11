import { useState, useEffect } from "react";
import { RandomUser, Result } from "../../models/randomUser";
import axios from "axios";
import { RandomUserCard } from "./RandomUserCard";


export const RandomUsersPage = () => {
 const [randomUsers, setRandomUsers] = useState<Result[]>([]);
 useEffect(() => {
   axios.get<RandomUser>("https://randomuser.me/api?results=10").then((response) => {
     setRandomUsers(response.data.results);
   });
 }, []);
 return (
     <div className="row" style={{marginTop:"50px", marginLeft: "20px"}}>
         {randomUsers.map( (user: Result) => <RandomUserCard result={user}  key={user.email} /> )}
     </div>
 )
}