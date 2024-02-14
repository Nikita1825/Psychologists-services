import React from 'react';
import css from '../Favorites/Certificates.module.css';
import { Notify } from 'notiflix';
const Favorites = () => {

const send =()=>{
  Notify.success(
    'Congratulations on purchasing a gift certificate. All information has been sent to your email address.'
  );
}

  return (
    <div className={css.certificate}>
      <div className={css.certificate_info}>
        <div className={css.certificate_text}>
          <p className={css.certificate_gift}>GIFT CERTIFICATE </p>
          <h1 className={css.certificate_change}>Give change</h1>
          <p className={css.certificate_p}>
            Exploring yourself and changing is the most interesting adventure.
            Give this experience to a loved one - choose a certificate for a
            session with a psychologist.
          </p>
        </div>
        <img
          className={css.certificate_img}
          src="https://carfagnasshop.com/wp-content/uploads/gift-card-clipart.png"
          height={500}
          width={500}
          alt=""
        />
      </div>
      <h2 className={css.certificate_select}>Select a certificate</h2>
      <ul className={css.certificate_list}>
        <li className={css.certificate_li}>
          <h3 className={css.certificate_quantity}>1</h3>
          <p className={css.certificate_session}>session</p>
          <p className={css.certificate_description}>A great way to introduce a loved one to psychology</p>
          <p className={css.certificate_price}>100$</p>
          <button onClick={send} className={css.certificate_btn}>Give</button>
        </li>
        <li className={css.certificate_li}>
          <h3 className={css.certificate_quantity}>3</h3>
          <p className={css.certificate_session}>session</p>
          <p className={css.certificate_description}>
            A slightly more in-depth acquaintance with psychology and oneself
          </p>
          <p className={css.certificate_price}>200$</p>
          <button onClick={send} className={css.certificate_btn}>Give</button>
        </li>
        <li className={css.certificate_li}>
          <h3 className={css.certificate_quantity}>5</h3>
          <p className={css.certificate_session}>session</p>
          <p className={css.certificate_description}>The ability to see and understand your internal conflicts</p>
          <p className={css.certificate_price}>450$</p>
          <button onClick={send} className={css.certificate_btn}>Give</button>
        </li>
        <li className={css.certificate_li}>
          <h3 className={css.certificate_quantity}>10</h3>
          <p className={css.certificate_session}>session</p>
          <p className={css.certificate_description}>Opportunity to better understand your problems</p>
          <p className={css.certificate_price}>800$</p>
          <button onClick={send} className={css.certificate_btn}>Give</button>
        </li>
      </ul>
      <p className={css.certificate_psychologists}>©Psychologists-services. All rights reserved. 2024</p>
    </div>
  );
};

export default Favorites;
