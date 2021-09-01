import { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js' //biblioteka zassana poprzez yarn add values.js

function App() {

  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10)); //ustawienie domyślnego koloru żeby było coś widać na dzień dobry i było spójne z placeholderem w inpucie

  const handleSubmit = e => {
    e.preventDefault();
    try {
      //wykorzystanie biblioteki do generowania odcieni danego koloru, przeczytaj dokumentację dla szczegółów
      let colors = new Values(color).all(10);//10 oznacza i ile chcemy podzielić tutaj co 10%
      setList(colors);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }

  return (
    <>
    <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={e => setColor(e.target.value)}
            className={`${isError ? 'error' : null}`}
          />
          <button type="submit" className="btn">generate</button>
        </form>
    </section>
    <section className="colors">
      {
        list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          )
        })
      }
    </section>
    </>
  );
}

export default App;