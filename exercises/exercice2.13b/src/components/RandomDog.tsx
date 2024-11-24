import { useEffect, useState } from "react";
import Dog from "../type";

interface RandomDogProps {
    refresh: boolean;
}

const RandomDog = ({ refresh }: RandomDogProps) => {  
    const[dog, setDog] = useState<Dog | undefined>(undefined);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          if(!response.ok) {
            throw new Error("Failed to fetch data");
          }
        return  response.json();
      })
      .then((dog)=> setDog(dog))
      .catch((error) => console.error(error));
    }, [refresh]);

    return (    
        <div>      
            <img src={dog?.message} alt="A Random Dog" />    
        </div>
    );
};
export default RandomDog;
