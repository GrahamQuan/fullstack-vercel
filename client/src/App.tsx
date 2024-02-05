import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';

const url = import.meta.env.VITE_API_URL + '/api/env';

function App() {
  const [str, setStr] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(url);
    setLoading(false);
    if (res.ok) {
      const data = await res.text();
      setStr(data);
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button disabled={!!str || loading} onClick={fetchData}>
        {loading ? 'loading...' : 'fetch data'}
      </button>
      <p>Data: {str || 'none'}</p>
    </>
  );
}

export default App;
