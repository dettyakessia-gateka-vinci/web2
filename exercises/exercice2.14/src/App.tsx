import { useEffect, useState } from 'react'
import './App.css'
import { Joke } from './type';
import JokeDetails from './components/JokeDetails';

function App() {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  const fetchJoke=() => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
      .then((response) => {
        if(!response.ok) {
          throw new Error('Failed to fetch jokes');
        }
        return response.json();
      })
      .then((joke) => setJoke(joke));
  };
  
  useEffect(() => {
    fetchJoke();
    setInterval(fetchJoke, 10000);
  }, []);
  

  return (
    
    <>
     <h1>JOKES</h1>
     {joke ? <JokeDetails joke={joke}/> : <p>Loading...</p>}
    </>
  )
}

export default App
