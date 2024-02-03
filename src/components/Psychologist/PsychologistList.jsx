import React from "react";
import css from './PsychologistList.module.css'
import { useState } from 'react';


 export const PsychologistList = ({psychologists}) =>{
  const [elloadMore, setLoadMore] = useState(3);

  const loadMore = () => {
    setLoadMore(elloadMore + 3);
  };
  const slice = psychologists.slice(0, elloadMore);

    return(
        <div>

          <ul>
 {slice.map((psychologist) => (
     
        <li key={psychologist.name} className={css.psychologistLi}>

          <span> {psychologist.name}</span>
          <span> {psychologist.experience
}</span>
          <span >{psychologist.rating}</span>
          <span >{psychologist.name}</span>
          <span > {psychologist.name}</span>
        </li>
        
      ))}
      </ul>
      {slice.length < 32 &&(
      <button onClick={() => loadMore()} >Load More</button>
      )}
        </div>
    )
 }
 export default PsychologistList