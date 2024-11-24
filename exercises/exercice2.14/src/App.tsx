import { useEffect, useState } from 'react'
import './App.css'
import { Joke } from './type';
import JokeDetails from './components/JokeDetails';

function App() {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {setRefresh(!refresh)}, 10000);
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
      .then((response) => {
        if(!response.ok) {
          throw new Error('Failed to fetch jokes');
        }
        return response.json();
      })
      .then((joke) => setJoke(joke));
    return () => clearInterval(interval);
  }, [refresh]);
  

  return (
    
    <>
     <h1>JOKES</h1>
     {joke ? <JokeDetails joke={joke}/> : <p>Loading...</p>}
    </>
  )
}

export default App
