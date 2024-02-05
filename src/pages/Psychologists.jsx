import React from "react";
import { onValue } from 'firebase/database';
import { useState ,useEffect, useContext } from "react";
import { database } from "../firebase-config";
import PsychologistList from "components/Psychologist/PsychologistList";
import Filter from "components/Filter/Filter";
import { FilterContex } from '../context';


const Psychologists = ({changeFilter}) => {
  const filter = useContext(FilterContex);

    const [ psychologists, setPsychologists] = useState([ ])
    
    useEffect(() => {
      if (!filter) return;
  
      if (filter.firstFilter) {
        onValue(database, snapshot => {
          let list;
          if (filter.filter === 'rating') {
            list = snapshot
              .val()
              .filter(item => item[filter.filter] <= filter.value);
          } else {
            list = snapshot
              .val()
              .filter(item => item[filter.filter].includes(filter.value));
          }
          setPsychologists(list);
          console.log(list)
        });
      } 
    }, 
    [filter]);
    
    
    useEffect(()=>{
         onValue(database, (snapshot)=>{
            const currentData = snapshot.val();
            
            setPsychologists(currentData)

        })
    } ,[ ])

    return (
    <div >
     <Filter changeFilter={changeFilter}/>
      <PsychologistList psychologists={psychologists} />
    </div>
  );
}

export default Psychologists