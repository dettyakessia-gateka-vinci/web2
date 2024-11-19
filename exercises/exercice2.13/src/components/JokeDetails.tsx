import {Joke} from '../type'
interface JokeProps { 
    joke: Joke;
}  

const JokeDetails = ({joke}:JokeProps) => {
    return (
        <div>
            
            <p>Joke:{joke.joke}</p>
            <p>Category:{joke.category}</p>
        </div>
    )
}
export default JokeDetails;
