import React from 'react';
import { useContext,  useState, useEffect } from 'react';
import { FilterContex } from 'context';
import { getAlphabetList, getExperienceList } from 'utils/getAlphabet';
import { onValue } from 'firebase/database';
import { database } from "../../firebase-config";
import css from './Filter.module.css'


export const Filter = ({changeFilter}) => {
    const filter = useContext(FilterContex);
    const [psychologists, setPsychologists] = useState([]);

    const [visibleAlphabet, setVisibleAlphabet] = useState(false);
    const [filterAlphabet, setFilterAlphabet] = useState('');
    const alphabetList = getAlphabetList(psychologists);

    const [visibleExperience, setVisibleExperience] = useState(false);
    const [filterExperience, setFilterExperience] = useState('');
    const experienceList = getExperienceList(psychologists);

    const handleClickDropdownAlphabet = (e) => {
        e.preventDefault()
        setVisibleAlphabet(prevState => !prevState);
      };
      const handleClickDropdownExperience = (e) => {
        e.preventDefault()
        
        setVisibleExperience(prevState => !prevState);
      };



      const handleClickFilterExperience = event => {
        event.preventDefault()
        const newFilter = {
          firstFilter: filter ? false : true,
          filter: 'experience',
          value: event.target.innerHTML,
        };
    
        setFilterExperience(event.target.innerHTML);
        
    
        changeFilter(newFilter);
    
        setVisibleExperience(false);
      };


      const handleClickFilterAlphabet = event => {
        event.preventDefault()
        const newFilter = {
          firstFilter: filter ? false : true,
          filter: 'price_per_hour',
          value: event.target.innerHTML,
        };
    
        setFilterAlphabet(event.target.innerHTML);
       
    
        changeFilter(newFilter);
    
        setVisibleAlphabet(false);
      };
      const handleClickReset = (e) => {
        // e.preventDefault()
        setFilterAlphabet('');
        setFilterExperience('');
        
        changeFilter(null);
        
      };


      useEffect(()=>{
        
        
        
        onValue(database, (snapshot)=>{
            const currentData = snapshot.val();
            
            setPsychologists(currentData)

        })
    } ,[ ])
    
    return(
<div className={css.filter}>
    <form  className={css.filter_form}>
        <label className={css.filter_label}>Rating
        <input className={css.filter_input} type="text" placeholder={filterAlphabet}  />
        {visibleAlphabet ? (
            <svg onClick={handleClickDropdownAlphabet} className={css.filter_svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12.5L10 7.5L15 12.5" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
        ) : (
            <svg onClick={handleClickDropdownAlphabet} className={css.filter_svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )}
        {visibleAlphabet && (
            <ul className={css.filter_list}>
{alphabetList.map((item, index) =>(
    <li key={index} onClick={handleClickFilterAlphabet}>
         {item}
    </li>
))}
            </ul>
        )}
        </label>
        <label className={css.filter_label}>Experience
        <input className={css.filter_input} type="text" placeholder={filterExperience}  />
        {visibleExperience ? (
            <svg onClick={handleClickDropdownExperience} className={css.filter_svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12.5L10 7.5L15 12.5" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
        ) : (
            <svg onClick={handleClickDropdownExperience} className={css.filter_svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )}
        {visibleExperience && (
            <ul className={css.filter_list}>
{experienceList.map((item, index) =>(
    <li key={index} onClick={handleClickFilterExperience}>
         {item}
    </li>
))}
            </ul>
        )}
        </label>
        

 <button className={css.filter_reset} onClick={handleClickReset}>Reset</button>
    </form>
</div>
    )}
    export default Filter