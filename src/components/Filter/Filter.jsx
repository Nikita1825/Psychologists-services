import React from 'react';
import { useContext,  useState, useEffect } from 'react';
import { FilterContex } from 'context';
import { getAlphabetList } from 'utils/getAlphabet';
import { onValue } from 'firebase/database';
import { database } from "../../firebase-config";



export const Filter = ({changeFilter}) => {
    const filter = useContext(FilterContex);
    const [psychologists, setPsychologists] = useState([]);

    const [visibleAlphabet, setVisibleAlphabet] = useState(false);
    const [filterAlphabet, setFilterAlphabet] = useState('');
    const alphabetList = getAlphabetList(psychologists);

    const handleClickDropdownAlphabet = (e) => {
        e.preventDefault()
        setVisibleAlphabet(prevState => !prevState);
      };

      const handleClickFilterAlphabet = event => {
        event.preventDefault()
        const newFilter = {
          firstFilter: filter ? false : true,
          filter: 'rating',
          value: event.target.innerHTML,
        };
    
        setFilterAlphabet(event.target.innerHTML);
        console.log(filterAlphabet)
    
        changeFilter(newFilter);
    
        setVisibleAlphabet(false);
      };


      useEffect(()=>{
        
        
        
        onValue(database, (snapshot)=>{
            const currentData = snapshot.val();
            
            setPsychologists(currentData)

        })
    } ,[ ])
    
    return(
<div>
    <form action="">
        <label>Filters</label>
        <input type="text"  />
        {visibleAlphabet ? (
                  <button onClick={handleClickDropdownAlphabet}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12.5L10 7.5L15 12.5" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg></button>
        ) : (
            <button onClick={handleClickDropdownAlphabet}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12.5L10 7.5L15 12.5" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg></button>
        )}
        {visibleAlphabet && (
            <ul>
{alphabetList.map((item, index) =>(
    <li key={index} onClick={handleClickFilterAlphabet}>
         {item}
    </li>
))}
            </ul>
        )}
 

    </form>
</div>
    )}
    export default Filter