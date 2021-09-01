import { useState, useEffect } from 'react';
// import rgbToHex from './utils';

const SingleColor = ({rgb, weight, index, hexColor}) => {

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // //wykorzystanie funkcji rgbToHex, ale można wykorzystać wygenerowany hexowy kolor dzięki values prrzekazany do komponentu
  // const hex = rgbToHex(...rgb);

  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percentvalue">{ weight }%</p>
      <p className="colorvalue">{ /*hex*/ } { hexColor }</p>
    </article>
  )
}

export default SingleColor;