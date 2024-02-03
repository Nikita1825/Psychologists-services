import React from "react";
import { onValue,query,endBefore } from 'firebase/database';
import { useState ,useEffect } from "react";
import { database } from "../firebase-config";
import PsychologistList from "components/Psychologist/PsychologistList";



const Psychologists = () => {
    const [ psychologists, setPsychologists] = useState([ ])
    

    
    
    useEffect(()=>{
        
        const queryRef = query(database,  endBefore(`${limit}`));
        
        onValue(queryRef, (snapshot)=>{
            const currentData = snapshot.val();
            console.log(currentData)
            setPsychologists(currentData)

        })
    } ,[limit, page])

    return (
    <div >
     
      <PsychologistList psychologists={psychologists} />
    </div>
  );
}

export default Psychologists