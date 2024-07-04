import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <p>{counter}</p>
        <div>
          <button type="button" onClick={() => setCounter(counter - 1)}>
            -
          </button>
          <button type="button" onClick={() => setCounter(counter + 1)}>
            +
          </button>
        </div>
      </main>
    </>
  );
};

export default App;