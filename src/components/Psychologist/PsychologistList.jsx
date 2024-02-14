import React from 'react';
import css from './PsychologistList.module.css';
import { useState } from 'react';
// import { Auth } from '../../context';

// import { Notify } from 'notiflix';

import { ModalAppointment } from 'components/Modal/ModalAppointment';

export const PsychologistList = ({ psychologists }) => {
  // const authContex = useContext(Auth);
 
  // const isLoggedIn = authContex.isLoggedIn;
 
  const [elloadMore, setLoadMore] = useState(3);
 

  const loadMore = () => {
    setLoadMore(elloadMore + 3);
  };
  const slice = psychologists.slice(0, elloadMore);

  const [teacherCardActive, setTeacherCardActive] = useState('');

  const handleClick = psychologist => {
    setTeacherCardActive(psychologist);
  };

  // const handleClickHeart = () => {
  //   if (!isLoggedIn) {
  //     Notify.failure(
  //       'This functionality is available only to authorized users'
  //     );
  //     return;
  //   }
  // };

  const [childrenModal, setChildrenModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };
  const Click = event => {
    const value = event.target.innerHTML;
    console.log(value);

    if (value === 'Make an appointment') {
      setChildrenModal('appointment');
    } else {
      setChildrenModal('registration');
    }

    setIsModalOpen(true);

    document.body.classList.add('hidden');
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
            <svg
              className={css.card_svgActive}
              width="30"
              height="20"
              viewBox="0 0 14 14"
              fill="#38CD3E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7" cy="7" r="7" fill="#FBFBFB" />
              <circle
                cx="7.00065"
                cy="7.00009"
                r="4.66667"
                fillRule="#38CD3E"
              />
            </svg>

            <div>
              <div className={css.card_rating}>
                <p className={css.card_rating_price}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_42_1944)">
                      <path
                        d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z"
                        fill="#FFC531"
                        stroke="#FFC531"
                        strokeWidth="1.2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_1944">
                        <rect width="16" height="16" fill="white" />
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
                </button>
              )}
              {teacherCardActive ===
                `${psychologist.name} ${psychologist.surname}` && (
                <ul className={css.review_list}>
                  {psychologist.reviews.map(review => (
                    <li className={css.card_reviews} key={review.reviewer}>
                      <div className={css.bpyug}></div>
                      <div>
                        <p className={css.review_name}>{review.reviewer}</p>

                        <p className={css.review_rating}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_42_1944)">
                              <path
                                d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z"
                                fill="#FFC531"
                                stroke="#FFC531"
                                strokeWidth="1.2"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_42_1944">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>{' '}
                          {review.rating}
                        </p>
                        <p className={css.review_comment}>{review.comment}</p>
                      </div>
                    </li>
                  ))}
                  <button onClick={Click} className={css.review_appointment}>
                    Make an appointment
                  </button>
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
      {isModalOpen && childrenModal === 'appointment' && (
        <ModalAppointment closeModal={closeModal} />
      )}
    </div>
  );
};
export default PsychologistList;
