import { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js' //biblioteka zassana poprzez yarn add values.js

function App() {

  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <>
    <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} placeholder="#f15025" onChange={e => setColor(e.target.value)} />
          <button type="submit" className="btn">generate</button>
        </form>
    </section>
    <section className="colors">
      <h4>list goes here</h4>
    </section>
    </>
  );
}

export default App;