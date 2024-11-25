import { useEffect, useState } from "react";
import Dog from "../type";



const RandomDog = () => {  
    const[dog, setDog] = useState<Dog | undefined>(undefined);
    useEffect(() => {
      fetchDog();
      setInterval(fetchDog, 5000);
    }, []);

    const fetchDog=async  () => {
      try{
      const response= await  fetch("https://dog.ceo/api/breeds/image/random");
      if(!response.ok){
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
       const dog = await response.json();
        setDog(dog);
      }catch(err){
        console.error("RandomDog::error: ", err);
      }
    };

    return (    
        <div>      
            <  img src={dog?.message} alt="A Random Dog"  />    
        </div>
    );
};
export default RandomDog;
