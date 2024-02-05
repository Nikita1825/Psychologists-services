import React from 'react';
import css from './PsychologistList.module.css';
import { useState } from 'react';



export const PsychologistList = ({ psychologists }) => {
  const [elloadMore, setLoadMore] = useState(3);

  const loadMore = () => {
    setLoadMore(elloadMore + 3);
  };
  const slice = psychologists.slice(0, elloadMore);

  const [teacherCardActive, setTeacherCardActive] = useState('');

  const handleClick = psychologist => {
    setTeacherCardActive(psychologist);
  };

  return (
    <div className={css.psychologist}>
      <ul className={css.psychologist_list}>
        {slice.map(psychologist => (
          <li key={psychologist.name} className={css.psychologistLi}>
            <img
              className={css.psychologist_avatar}
              src={psychologist.avatar_url}
              alt=""
            />
            <svg className={css.card_svgActive} width="30" height="20" viewBox="0 0 14 14" fill="#38CD3E" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill="#FBFBFB"/>
<circle cx="7.00065" cy="7.00009" r="4.66667" fillRule="#38CD3E"/>
</svg>

            <div>
              <div className={css.card_rating}>
                <p className={css.card_rating_price}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_42_1944)">
<path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z" fill="#FFC531" stroke="#FFC531" strokeWidth="1.2"/>
</g>
<defs>
<clipPath id="clip0_42_1944">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
                  Rating:{psychologist.rating}
                </p>
                <p className={css.card_rating_price}>
                  Price / 1 hour:
                  <span className={css.card_price}>
                    {psychologist.price_per_hour}$
                  </span>
                  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5766 2.99416C22.0233 2.44058 21.3663 2.00144 20.6433 1.70184C19.9202 1.40223 19.1452 1.24802 18.3625 1.24802C17.5798 1.24802 16.8047 1.40223 16.0817 1.70184C15.3586 2.00144 14.7016 2.44058 14.1483 2.99416L13 4.14249L11.8516 2.99416C10.734 1.87649 9.21809 1.2486 7.63747 1.2486C6.05685 1.2486 4.54097 1.87649 3.4233 2.99416C2.30563 4.11183 1.67773 5.62771 1.67773 7.20833C1.67773 8.78895 2.30563 10.3048 3.4233 11.4225L4.57163 12.5708L13 20.9992L21.4283 12.5708L22.5766 11.4225C23.1302 10.8692 23.5693 10.2122 23.869 9.48913C24.1686 8.76605 24.3228 7.99102 24.3228 7.20833C24.3228 6.42563 24.1686 5.65061 23.869 4.92753C23.5693 4.20445 23.1302 3.54748 22.5766 2.99416Z" stroke="#191A15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </p>
               
              </div>
              <h2 className={css.card_h}>Psychologist</h2>
              <p className={css.card_name}>{psychologist.name}</p>
              <div className={css.card_expirience}>
                <p className={css.card_p}>
                  Experience:{' '}
                  <span className={css.card_span}>
                    {psychologist.experience}
                  </span>
                </p>
                <p className={css.card_p}>
                  License:{' '}
                  <span className={css.card_span}>{psychologist.license}</span>
                </p>
              </div>
              <div className={css.card_expirience}>
                <p className={css.card_p}>
                  Specialization:{' '}
                  <span className={css.card_span}>
                    {psychologist.specialization}
                  </span>
                </p>
                <p className={css.card_p}>
                  Initial_consultation:{' '}
                  <span className={css.card_span}>
                    {psychologist.initial_consultation}
                  </span>
                </p>
              </div>
              <p className={css.card_h}>{psychologist.about}</p>
              {teacherCardActive !==
                `${psychologist.name} ${psychologist.surname}` && (
              <button
                className={css.card_readMore}
                onClick={() =>
                  handleClick(`${psychologist.name} ${psychologist.surname}`)
                }
              >
                Read more
              </button>)}
              {teacherCardActive ===
                `${psychologist.name} ${psychologist.surname}` && (
                <ul className={css.review_list}>
                  {psychologist.reviews.map(review => (
                    <li className={css.card_reviews} key={review.reviewer}>
                      <div className={css.bpyug}></div>
                      <div>
                        <p className={css.review_name}>{review.reviewer}</p>
                        
                        <p className={css.review_rating}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_42_1944)">
<path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z" fill="#FFC531" stroke="#FFC531" strokeWidth="1.2"/>
</g>
<defs>
<clipPath id="clip0_42_1944">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>   {review.rating}</p>
                        <p className={css.review_comment}>{review.comment}</p>
                      
                      </div>
                      </li>
                  ))}
                  <button className={css.review_appointment}>Make an appointment</button>
                </ul>
              )}
              
            </div>
          </li>
        ))}
      </ul>
      {slice.length < 32 && (
        <button className={css.loadMore} onClick={() => loadMore()}>
          Load More
        </button>
      )}
    </div>
  );
};
export default PsychologistList;
