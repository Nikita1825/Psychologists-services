import React from "react";
import Girl from '../img/Imgmane.jpg'

import css from '../components//Home/Home.module.css'
const Home = () => {
    return (
      <div >
        <div className={css.home}>

        <div className={css.home_info}>

      <h1 className={css.home_h}>The road to the<span>depths</span>  of the human soul</h1>
      <p className={css.home_p}>We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</p>
      <button className={css.home_btn}>Get started</button>
      <div className={css.home_price}>
        
      <svg className={css.home_svg} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5.5L0 8L7.5 15.5L20 3L17.5 0.5L7.5 10.5L2.5 5.5Z" fill="#FC832C"/>
</svg>
<div>

        <p className={css.home_psyhologists}>Experienced psychologists</p>
        <p className={css.home_experienced}>15,000</p>
</div>
      </div>

        </div>
        <div className={css.home_icon }>
          <p className={css.home_icon_svg}>?</p>
        </div>
        <div className={css.home_img}>
      <img className={css.img} src={`${Girl}`} alt="girl with laptop"></img>

        </div>
        <div className={css.home_Info}>

<h1 className={css.home_h}>The road to the<span>depths</span>  of the human soul</h1>
<p className={css.home_p}>We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</p>
<button  className={css.home_btn}>Get started</button>
  </div>
        </div>
      </div>
    );
}
export default Home