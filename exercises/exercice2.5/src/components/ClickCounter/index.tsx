import { useState } from 'react'


const ClickCounter=()=>{
    const [count, setCount] = useState(0);
    const ClickCounter =()=>{
        setCount(count+1);
    }
return(
<div className="card">
        <button onClick={ClickCounter}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
)
}
export default ClickCounter;