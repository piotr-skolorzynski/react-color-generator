import { useState, useEffect } from 'react';
// import rgbToHex from './utils';

const SingleColor = ({rgb, weight, index, hexColor}) => {

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;

  //ustanowienie useEffect w celu usuwania napisu 'copied to clipborad' po jakimś czasie na alercie
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert])


  // //wykorzystanie funkcji rgbToHex, ale można wykorzystać wygenerowany hexowy kolor dzięki values prrzekazany do komponentu
  // const hex = rgbToHex(...rgb);

  //do czego służy index i klasa `color` ??? chodzi o to że przy ciemniejszych kolorach nie widać czcionki więc chcemy zmienić klasę i można wykorzystać do tego index

  //na kliknięcie na dany kwadrat z kolorem można skopiować jego wartość w hexach, trzeba zrobić funkcję na zdarzenie onClick
  const handleClick = () => {
    setAlert(true);
    //do skopiowania do clipboard używa się obiektu navigator
    navigator.clipboard.writeText(hexValue);
  }

  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={handleClick}>
      <p className="percent-value">{ weight }%</p>
      <p className="color-value">{ /*hex*/ } { hexValue }</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor;