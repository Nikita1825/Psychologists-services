import React from "react";
import { onValue,query,endBefore } from 'firebase/database';
import { useState ,useEffect, useMemo } from "react";
import { database } from "../firebase-config";
import PsychologistList from "components/Psychologist/PsychologistList";



const Psychologists = () => {
    const [ psychologists, setPsychologists] = useState([ ])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4);

    const showMore = () => {
        setPage(prevState => prevState + 1);
        setLimit(prevState => prevState + 4);
      };
    
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