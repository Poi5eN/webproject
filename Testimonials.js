import React from 'react';
import './OurTeam.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials by Parents</h2>
      <div className="testimonial">
        <p>"My son Hariom kumar is reading in 2nd standard in Alpha Convent School since 3 years. This school is providing the best education related to education and other related field also on district level competition. My son got top ranked in competition. This is best school in this area."</p>
        <h3>Hariom Kumar S/o Sunil Kumar</h3>
        {/* <p>Client</p> */}
      </div>
      <div className="testimonial">
        <p>"My self Shailender Kumar f/o Navya of Class 4th is very happy to know that my daughter got 3rd rank in District level competition and awarded 2k amount and recognized on district level. This is the best school in this area with this types of extra activity done."</p>
        <h3>Shailender Kumar F/o Navya of class 4th</h3>
        {/* <p>Client</p> */}
      </div>
      <div className="testimonial">
        <p>"My daughter name Yogita studying in 6th class. She is reading since 4 years. This is best school providing extra activities for the growth of mental and physical. May this school will grow like day double and night forth time."</p>
        <h3>Pooja m/o Yogita</h3>
        {/* <p>Client</p> */}
      </div>
    </div>
  );
};

export default Testimonials;
